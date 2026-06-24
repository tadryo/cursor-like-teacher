"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DrawElement, Lesson, Point, Step } from "@/lessons/types";

export type PlayState = "idle" | "playing" | "paused" | "done";

export interface CursorPos { x: number; y: number }

export interface EngineState {
  stepIndex: number;
  totalSteps: number;
  cursorPos: CursorPos;
  drawnElements: DrawElement[];
  currentNarration: string;
  playState: PlayState;
  play: () => void;
  pause: () => void;
  reset: () => void;
  goToStep: (index: number) => void;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function lerpPoint(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

export function useLessonEngine(lesson: Lesson): EngineState {
  const [stepIndex, setStepIndex] = useState(-1);
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: lesson.viewBox.width / 2, y: lesson.viewBox.height / 2 });
  const [drawnElements, setDrawnElements] = useState<DrawElement[]>([]);
  const [playState, setPlayState] = useState<PlayState>("idle");
  const [currentNarration, setCurrentNarration] = useState("▶ 再生ボタンで開始");

  const rafRef = useRef<number | null>(null);
  const playStateRef = useRef<PlayState>("idle");
  const stepIndexRef = useRef(-1);
  const cursorPosRef = useRef<CursorPos>({ x: lesson.viewBox.width / 2, y: lesson.viewBox.height / 2 });
  const drawnElementsRef = useRef<DrawElement[]>([]);

  playStateRef.current = playState;
  stepIndexRef.current = stepIndex;

  const cancelAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const runStep = useCallback((index: number) => {
    if (index >= lesson.steps.length) {
      setPlayState("done");
      setCurrentNarration("レッスン完了！ お疲れさまでした 🎉");
      return;
    }

    const step: Step = lesson.steps[index];
    setStepIndex(index);
    if (step.narration) setCurrentNarration(step.narration);

    const duration = step.duration;
    const start = performance.now();
    const startCursor = { ...cursorPosRef.current };

    const animate = (now: number) => {
      if (playStateRef.current === "paused") return;

      const elapsed = now - start;
      const rawT = Math.min(elapsed / duration, 1);
      const t = easeInOut(rawT);

      const { action } = step;

      if (action.type === "move") {
        const pos = lerpPoint(startCursor, action.to, t);
        cursorPosRef.current = pos;
        setCursorPos({ ...pos });
      }

      if (action.type === "draw") {
        if (action.element.kind === "line") {
          const from = action.element.from;
          const to = action.element.to;
          const animTo = lerpPoint(from, to, t);
          const liveEl: DrawElement = { ...action.element, to: animTo };
          const others = drawnElementsRef.current.filter(e => e.id !== action.element.id + "__live");
          setDrawnElements([...others, { ...liveEl, id: action.element.id + "__live" }]);
        } else if (action.element.kind === "arc") {
          const el = action.element;
          const endAngle = el.startAngle + (el.endAngle - el.startAngle) * t;
          const liveEl: DrawElement = { ...el, endAngle, id: el.id + "__live" };
          const others = drawnElementsRef.current.filter(e => e.id !== el.id + "__live");
          setDrawnElements([...others, liveEl]);
        }
      }

      if (rawT < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // finalize step
        const { action } = step;
        if (action.type === "move") {
          cursorPosRef.current = action.to;
          setCursorPos({ ...action.to });
        }
        if (action.type === "draw") {
          const withoutLive = drawnElementsRef.current.filter(
            e => e.id !== action.element.id + "__live"
          );
          drawnElementsRef.current = [...withoutLive, action.element];
          setDrawnElements([...drawnElementsRef.current]);
        }
        if (action.type === "erase") {
          drawnElementsRef.current = drawnElementsRef.current.filter(e => e.id !== action.id);
          setDrawnElements([...drawnElementsRef.current]);
        }
        if (action.type === "click") {
          // pulse animation handled in cursor component
        }

        // auto advance
        if (playStateRef.current === "playing") {
          rafRef.current = requestAnimationFrame(() => runStep(index + 1));
        }
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [lesson]);

  const play = useCallback(() => {
    setPlayState("playing");
    playStateRef.current = "playing";
    const next = stepIndexRef.current < 0 ? 0 : stepIndexRef.current + 1;
    if (next >= lesson.steps.length) {
      // restart
      drawnElementsRef.current = [];
      setDrawnElements([]);
      runStep(0);
    } else {
      runStep(next);
    }
  }, [lesson.steps.length, runStep]);

  const pause = useCallback(() => {
    cancelAnimation();
    setPlayState("paused");
    playStateRef.current = "paused";
  }, [cancelAnimation]);

  const reset = useCallback(() => {
    cancelAnimation();
    drawnElementsRef.current = [];
    setDrawnElements([]);
    setStepIndex(-1);
    stepIndexRef.current = -1;
    const center = { x: lesson.viewBox.width / 2, y: lesson.viewBox.height / 2 };
    cursorPosRef.current = center;
    setCursorPos(center);
    setPlayState("idle");
    playStateRef.current = "idle";
    setCurrentNarration("▶ 再生ボタンで開始");
  }, [cancelAnimation, lesson.viewBox]);

  const goToStep = useCallback((index: number) => {
    cancelAnimation();
    // replay all steps up to index synchronously to build state
    drawnElementsRef.current = [];
    let cursor = { x: lesson.viewBox.width / 2, y: lesson.viewBox.height / 2 };
    for (let i = 0; i <= index && i < lesson.steps.length; i++) {
      const s = lesson.steps[i];
      if (s.action.type === "move") cursor = s.action.to;
      if (s.action.type === "draw") {
        const el = s.action.element;
        const withoutLive = drawnElementsRef.current.filter(e => e.id !== el.id + "__live");
        drawnElementsRef.current = [...withoutLive, el];
      }
      if (s.action.type === "erase") {
        const eraseId = s.action.id;
        drawnElementsRef.current = drawnElementsRef.current.filter(e => e.id !== eraseId);
      }
    }
    cursorPosRef.current = cursor;
    setCursorPos({ ...cursor });
    setDrawnElements([...drawnElementsRef.current]);
    setStepIndex(index);
    stepIndexRef.current = index;
    const narration = lesson.steps[index]?.narration ?? "";
    if (narration) setCurrentNarration(narration);
    setPlayState("paused");
    playStateRef.current = "paused";
  }, [cancelAnimation, lesson]);

  useEffect(() => {
    return () => cancelAnimation();
  }, [cancelAnimation]);

  return {
    stepIndex,
    totalSteps: lesson.steps.length,
    cursorPos,
    drawnElements,
    currentNarration,
    playState,
    play,
    pause,
    reset,
    goToStep,
  };
}

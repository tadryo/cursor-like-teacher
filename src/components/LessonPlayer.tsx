"use client";
import { useLessonEngine } from "@/engine/useLessonEngine";
import type { Lesson } from "@/lessons/types";
import DrawCanvas from "./DrawCanvas";

interface Props {
  lesson: Lesson;
}

export default function LessonPlayer({ lesson }: Props) {
  const engine = useLessonEngine(lesson);

  const progress = engine.totalSteps > 0
    ? Math.max(0, (engine.stepIndex + 1) / engine.totalSteps)
    : 0;

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
      {/* header */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{lesson.title}</h2>
          <span className="text-sm text-blue-600 font-medium">{lesson.subject}</span>
        </div>
        <div className="text-sm text-gray-500">
          {engine.stepIndex < 0 ? 0 : engine.stepIndex + 1} / {engine.totalSteps} ステップ
        </div>
      </div>

      {/* canvas */}
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
        style={{ aspectRatio: `${lesson.viewBox.width} / ${lesson.viewBox.height}` }}
      >
        <DrawCanvas
          viewBox={lesson.viewBox}
          elements={engine.drawnElements}
          cursor={engine.cursorPos}
        />
      </div>

      {/* narration box */}
      <div className="min-h-[68px] bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 flex items-center">
        <p className="text-blue-900 text-base leading-relaxed">{engine.currentNarration}</p>
      </div>

      {/* progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* controls */}
      <div className="flex items-center justify-center gap-3">
        {/* Reset */}
        <button
          onClick={engine.reset}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          リセット
        </button>

        {/* Prev */}
        <button
          onClick={() => engine.goToStep(Math.max(0, engine.stepIndex - 1))}
          disabled={engine.stepIndex <= 0}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 text-sm font-medium transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          前へ
        </button>

        {/* Play / Pause */}
        {engine.playState === "playing" ? (
          <button
            onClick={engine.pause}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
            一時停止
          </button>
        ) : (
          <button
            onClick={engine.play}
            disabled={engine.playState === "done" && engine.stepIndex >= engine.totalSteps - 1}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            {engine.playState === "done" ? "もう一度" : engine.stepIndex < 0 ? "再生" : "続きを再生"}
          </button>
        )}

        {/* Next */}
        <button
          onClick={() => engine.goToStep(Math.min(engine.totalSteps - 1, engine.stepIndex + 1))}
          disabled={engine.stepIndex >= engine.totalSteps - 1}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 text-sm font-medium transition-colors"
        >
          次へ
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

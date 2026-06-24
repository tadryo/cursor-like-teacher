import type { Lesson } from "./types";

const W = 700;
const H = 500;

export const fractionAdd: Lesson = {
  id: "fraction-add",
  title: "分数のたし算（同分母）",
  subject: "算数",
  viewBox: { width: W, height: H },
  steps: [
    {
      action: { type: "move", to: { x: 350, y: 450 } },
      duration: 600,
      narration: "分数のたし算を学びましょう！",
    },
    {
      action: {
        type: "draw",
        element: { id: "title", kind: "text", pos: { x: W / 2, y: 55 }, content: "分数のたし算: 同じ分母のとき", size: 22, color: "#1e40af", bold: true, align: "middle" },
      },
      duration: 600,
      narration: "今日は同じ分母を持つ分数のたし算を学びます。",
    },
    {
      action: {
        type: "draw",
        element: { id: "problem", kind: "text", pos: { x: W / 2, y: 100 }, content: "1/4 + 2/4 = ?", size: 28, color: "#374151", bold: true, align: "middle" },
      },
      duration: 700,
      narration: "問題：4分の1 + 4分の2 を計算しましょう。",
    },
    {
      action: { type: "move", to: { x: 130, y: 200 } },
      duration: 700,
      narration: "円を使って視覚的に確認してみましょう。",
    },
    {
      action: {
        type: "draw",
        element: { id: "circle1-bg", kind: "circle", center: { x: 140, y: 230 }, radius: 80, fill: "#f3f4f6", stroke: "#9ca3af", width: 2 },
      },
      duration: 300,
      narration: "まず、4等分された円を描きます。",
    },
    {
      action: {
        type: "draw",
        element: { id: "c1-line1", kind: "line", from: { x: 140, y: 150 }, to: { x: 140, y: 310 }, color: "#9ca3af", width: 1.5 },
      },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "c1-line2", kind: "line", from: { x: 60, y: 230 }, to: { x: 220, y: 230 }, color: "#9ca3af", width: 1.5 },
      },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "c1-fill1", kind: "arc", center: { x: 140, y: 230 }, radius: 78, startAngle: -90, endAngle: 0, color: "#3b82f6", width: 0 },
      },
      duration: 500,
      narration: "1/4 の部分を青く塗ります。これが 4分の1 です。",
    },
    {
      action: {
        type: "draw",
        element: { id: "label1", kind: "text", pos: { x: 140, y: 320 }, content: "1/4", size: 20, color: "#1d4ed8", align: "middle" },
      },
      duration: 400,
      narration: "4分の1",
    },
    {
      action: { type: "move", to: { x: 350, y: 230 } },
      duration: 500,
      narration: "次の円を見てみましょう。",
    },
    {
      action: {
        type: "draw",
        element: { id: "plus", kind: "text", pos: { x: 310, y: 240 }, content: "+", size: 40, color: "#374151", bold: true, align: "middle" },
      },
      duration: 300,
      narration: "足し算の記号です。",
    },
    {
      action: {
        type: "draw",
        element: { id: "circle2-bg", kind: "circle", center: { x: 420, y: 230 }, radius: 80, fill: "#f3f4f6", stroke: "#9ca3af", width: 2 },
      },
      duration: 300,
      narration: "2つ目の円です。",
    },
    {
      action: {
        type: "draw",
        element: { id: "c2-line1", kind: "line", from: { x: 420, y: 150 }, to: { x: 420, y: 310 }, color: "#9ca3af", width: 1.5 },
      },
      duration: 200,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "c2-line2", kind: "line", from: { x: 340, y: 230 }, to: { x: 500, y: 230 }, color: "#9ca3af", width: 1.5 },
      },
      duration: 200,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "c2-fill1", kind: "arc", center: { x: 420, y: 230 }, radius: 78, startAngle: -90, endAngle: 0, color: "#f97316", width: 0 },
      },
      duration: 400,
      narration: "2/4 の部分をオレンジで塗ります。",
    },
    {
      action: {
        type: "draw",
        element: { id: "c2-fill2", kind: "arc", center: { x: 420, y: 230 }, radius: 78, startAngle: 0, endAngle: 90, color: "#f97316", width: 0 },
      },
      duration: 400,
      narration: "もう1つ分も塗ります。これが 4分の2 です。",
    },
    {
      action: {
        type: "draw",
        element: { id: "label2", kind: "text", pos: { x: 420, y: 320 }, content: "2/4", size: 20, color: "#c2410c", align: "middle" },
      },
      duration: 400,
      narration: "4分の2",
    },
    {
      action: { type: "move", to: { x: 600, y: 230 } },
      duration: 600,
      narration: "合わせると…",
    },
    {
      action: {
        type: "draw",
        element: { id: "equals", kind: "text", pos: { x: 555, y: 240 }, content: "=", size: 40, color: "#374151", bold: true, align: "middle" },
      },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "answer-box", kind: "rect", x: 600, y: 195, w: 85, h: 70, fill: "#fef3c7", stroke: "#f59e0b", opacity: 1 },
      },
      duration: 400,
      narration: "答えを入れる枠です。",
    },
    {
      action: {
        type: "draw",
        element: { id: "answer", kind: "text", pos: { x: 642, y: 242 }, content: "3/4", size: 32, color: "#7c3aed", bold: true, align: "middle" },
      },
      duration: 700,
      narration: "4分の3！",
    },
    {
      action: { type: "move", to: { x: W / 2, y: 380 } },
      duration: 600,
      narration: "計算のまとめを確認しましょう。",
    },
    {
      action: {
        type: "draw",
        element: { id: "rule", kind: "text", pos: { x: W / 2, y: 390 }, content: "分母が同じとき → 分子だけを足す！  1 + 2 = 3  →  3/4", size: 17, color: "#374151", align: "middle" },
      },
      duration: 800,
      narration: "分母が同じときは、分子どうしを足すだけです。1 + 2 = 3 なので答えは 4分の3！",
    },
    {
      action: {
        type: "draw",
        element: { id: "highlight-answer", kind: "highlight", center: { x: 642, y: 230 }, radius: 50, color: "#fbbf24" },
      },
      duration: 600,
      narration: "すばらしい！1/4 + 2/4 = 3/4 です。",
    },
    {
      action: { type: "move", to: { x: W / 2, y: H - 30 } },
      duration: 800,
      narration: "よくできました！",
    },
  ],
};

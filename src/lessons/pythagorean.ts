import type { Lesson } from "./types";

const W = 700;
const H = 500;

const A = { x: 150, y: 370 };
const B = { x: 480, y: 370 };
const C = { x: 150, y: 130 };

export const pythagorean: Lesson = {
  id: "pythagorean",
  title: "ピタゴラスの定理",
  subject: "算数・数学",
  viewBox: { width: W, height: H },
  steps: [
    {
      action: { type: "move", to: { x: 350, y: 430 } },
      duration: 800,
      narration: "ピタゴラスの定理を一緒に学びましょう！",
    },
    {
      action: {
        type: "draw",
        element: { id: "title", kind: "text", pos: { x: W / 2, y: 55 }, content: "ピタゴラスの定理: a² + b² = c²", size: 24, color: "#1e40af", bold: true, align: "middle" },
      },
      duration: 600,
      narration: "直角三角形には特別な法則があります。",
    },
    {
      action: {
        type: "draw",
        element: { id: "side-a", kind: "line", from: A, to: B, color: "#16a34a", width: 3 },
      },
      duration: 900,
      narration: "まず、底辺 a を描きます。",
    },
    {
      action: { type: "move", to: { x: (A.x + B.x) / 2, y: A.y + 30 } },
      duration: 400,
      narration: "底辺の長さを a と呼びます。",
    },
    {
      action: {
        type: "draw",
        element: { id: "label-a", kind: "text", pos: { x: (A.x + B.x) / 2, y: A.y + 30 }, content: "a = 3", size: 20, color: "#16a34a", align: "middle" },
      },
      duration: 500,
      narration: "今回は a = 3 とします。",
    },
    {
      action: {
        type: "draw",
        element: { id: "side-b", kind: "line", from: A, to: C, color: "#dc2626", width: 3 },
      },
      duration: 900,
      narration: "次に、縦辺 b を描きます。",
    },
    {
      action: { type: "move", to: { x: A.x - 35, y: (A.y + C.y) / 2 } },
      duration: 400,
      narration: "縦辺の長さを b と呼びます。",
    },
    {
      action: {
        type: "draw",
        element: { id: "label-b", kind: "text", pos: { x: A.x - 35, y: (A.y + C.y) / 2 }, content: "b = 4", size: 20, color: "#dc2626", align: "middle" },
      },
      duration: 500,
      narration: "b = 4 とします。",
    },
    {
      action: {
        type: "draw",
        element: { id: "right-angle", kind: "rect", x: A.x, y: A.y - 20, w: 20, h: 20, stroke: "#555", fill: "none" },
      },
      duration: 400,
      narration: "この角が直角です。",
    },
    {
      action: {
        type: "draw",
        element: { id: "side-c", kind: "line", from: B, to: C, color: "#7c3aed", width: 3 },
      },
      duration: 1000,
      narration: "斜辺 c を描きます。これが一番長い辺です。",
    },
    {
      action: { type: "move", to: { x: (B.x + C.x) / 2 + 40, y: (B.y + C.y) / 2 } },
      duration: 500,
      narration: "斜辺の長さを c と呼びます。",
    },
    {
      action: {
        type: "draw",
        element: { id: "label-c", kind: "text", pos: { x: (B.x + C.x) / 2 + 55, y: (B.y + C.y) / 2 }, content: "c = ?", size: 20, color: "#7c3aed", align: "middle" },
      },
      duration: 500,
      narration: "c の長さを求めましょう！",
    },
    {
      action: { type: "move", to: { x: 530, y: 200 } },
      duration: 600,
      narration: "計算式を確認します。",
    },
    {
      action: {
        type: "draw",
        element: { id: "formula1", kind: "text", pos: { x: 555, y: 160 }, content: "a² + b²= c²", size: 18, color: "#374151", align: "middle" },
      },
      duration: 600,
      narration: "a の2乗 + b の2乗 = c の2乗",
    },
    {
      action: {
        type: "draw",
        element: { id: "formula2", kind: "text", pos: { x: 555, y: 195 }, content: "3² + 4² = c²", size: 18, color: "#374151", align: "middle" },
      },
      duration: 700,
      narration: "3の2乗と4の2乗を計算します。",
    },
    {
      action: {
        type: "draw",
        element: { id: "formula3", kind: "text", pos: { x: 555, y: 230 }, content: "9 + 16 = c²", size: 18, color: "#374151", align: "middle" },
      },
      duration: 700,
      narration: "9 足す 16 は…",
    },
    {
      action: {
        type: "draw",
        element: { id: "formula4", kind: "text", pos: { x: 555, y: 265 }, content: "25 = c²", size: 18, color: "#374151", align: "middle" },
      },
      duration: 700,
      narration: "25 です！",
    },
    {
      action: {
        type: "draw",
        element: { id: "formula5", kind: "text", pos: { x: 555, y: 300 }, content: "c = √25 = 5", size: 20, color: "#7c3aed", bold: true, align: "middle" },
      },
      duration: 800,
      narration: "25の平方根は5なので、c = 5 です！",
    },
    {
      action: { type: "erase", id: "label-c" },
      duration: 100,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "label-c-answer", kind: "text", pos: { x: (B.x + C.x) / 2 + 55, y: (B.y + C.y) / 2 }, content: "c = 5 ✓", size: 20, color: "#7c3aed", bold: true, align: "middle" },
      },
      duration: 600,
      narration: "斜辺の長さは 5 です！",
    },
    {
      action: {
        type: "draw",
        element: { id: "answer-highlight", kind: "highlight", center: { x: 555, y: 300 }, radius: 40, color: "#fbbf24" },
      },
      duration: 600,
      narration: "これがピタゴラスの定理です。a² + b² = c²",
    },
    {
      action: { type: "move", to: { x: W / 2, y: H - 40 } },
      duration: 800,
      narration: "よくできました！3-4-5 は有名なピタゴラス数の組み合わせです。",
    },
  ],
};

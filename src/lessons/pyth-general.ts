import type { Lesson } from "./types";

// 3-4-5 right triangle, scale = 35px/unit
// A = right angle, B = end of side a, C = end of side b
const A = { x: 175, y: 370 };
const B = { x: 280, y: 370 }; // AB = 105px = 3 units
const C = { x: 175, y: 230 }; // AC = 140px = 4 units
// BC = 175px = 5 units (hypotenuse)

// Outward perpendicular of BC (away from A), rotating B→C direction 90° CCW:
// BC unit = (-0.6, -0.8) → CCW 90° = (0.8, -0.6)
const OUT = { x: 0.8, y: -0.6 };

// SQUARES on each side (polygon: 4 vertices, outward from triangle)
const sqA = [A, B, { x: 280, y: 475 }, { x: 175, y: 475 }];                 // below AB
const sqB = [A, C, { x: 35, y: 230 }, { x: 35, y: 370 }];                   // left of AC
const sqC = [B, C,                                                             // outside BC
  { x: C.x + 175 * OUT.x, y: C.y + 175 * OUT.y },  // D = (315, 125)
  { x: B.x + 175 * OUT.x, y: B.y + 175 * OUT.y },  // E = (420, 265)
];

// EQUILATERAL TRIANGLES on each side
// On AB: pointing down; height = (√3/2)*105 ≈ 90.9; midpoint = (227.5, 370)
const triA = [A, B, { x: 228, y: 461 }];
// On AC: pointing left; height = (√3/2)*140 ≈ 121.2; midpoint = (175, 300)
const triB = [A, C, { x: 54, y: 300 }];
// On BC: pointing outward; height = (√3/2)*175 ≈ 151.6; midpoint = (227.5, 300)
// third vertex = midpoint + 151.6 * OUT
const triC = [B, C, { x: 349, y: 209 }];

// Right panel x center
const RX = 510;

export const pythGeneral: Lesson = {
  id: "pyth-general",
  title: "三平方の定理の本質",
  subject: "中学数学",
  viewBox: { width: 700, height: 520 },
  steps: [
    // ── 導入 ──────────────────────────────────────────
    {
      action: { type: "move", to: { x: 350, y: 260 } },
      duration: 600,
      narration: "三平方の定理、もっと深く考えてみましょう！",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "title",
          kind: "text",
          pos: { x: 350, y: 46 },
          content: "三平方の定理の「本質」とは？",
          size: 22,
          color: "#1e40af",
          bold: true,
          align: "middle",
        },
      },
      duration: 600,
      narration: "a² + b² = c² のこの式、なぜ「2乗」なんでしょう？",
    },

    // ── 直角三角形を描く ──────────────────────────────
    {
      action: { type: "move", to: A },
      duration: 600,
      narration: "まず 3-4-5 の直角三角形を描きます。",
    },
    {
      action: {
        type: "draw",
        element: { id: "side-a", kind: "line", from: A, to: B, color: "#374151", width: 3 },
      },
      duration: 600,
      narration: "底辺 a = 3",
    },
    {
      action: {
        type: "draw",
        element: { id: "side-b", kind: "line", from: A, to: C, color: "#374151", width: 3 },
      },
      duration: 600,
      narration: "縦辺 b = 4",
    },
    {
      action: {
        type: "draw",
        element: { id: "side-c", kind: "line", from: B, to: C, color: "#374151", width: 3 },
      },
      duration: 700,
      narration: "斜辺 c = 5",
    },
    {
      action: {
        type: "draw",
        element: { id: "right-angle", kind: "rect", x: A.x, y: A.y - 18, w: 18, h: 18, stroke: "#555", fill: "none" },
      },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "lbl-a", kind: "text", pos: { x: (A.x + B.x) / 2, y: A.y + 22 }, content: "a = 3", size: 16, color: "#374151", align: "middle" },
      },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "lbl-b", kind: "text", pos: { x: A.x - 28, y: (A.y + C.y) / 2 }, content: "b = 4", size: 16, color: "#374151", align: "middle" },
      },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "lbl-c", kind: "text", pos: { x: (B.x + C.x) / 2 + 30, y: (B.y + C.y) / 2 }, content: "c = 5", size: 16, color: "#374151", align: "middle" },
      },
      duration: 400,
      narration: "",
    },

    // ── PHASE 1: 正方形 ──────────────────────────────
    {
      action: { type: "move", to: { x: 228, y: 430 } },
      duration: 600,
      narration: "まず「教科書通り」の説明：各辺に正方形を置きます。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "ph1-label",
          kind: "text",
          pos: { x: RX, y: 80 },
          content: "① 正方形で考える",
          size: 17,
          color: "#1e40af",
          bold: true,
          align: "middle",
        },
      },
      duration: 400,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "sq-a",
          kind: "polygon",
          points: sqA,
          fill: "#bbf7d0",
          stroke: "#16a34a",
          width: 2,
          opacity: 0.8,
        },
      },
      duration: 500,
      narration: "辺 a = 3 の正方形。面積は 3² = 9",
    },
    {
      action: { type: "move", to: { x: 228, y: 430 } },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "area-a", kind: "text", pos: { x: 228, y: 435 }, content: "3²=9", size: 18, color: "#15803d", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "9 と書きます。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "sq-b",
          kind: "polygon",
          points: sqB,
          fill: "#fecaca",
          stroke: "#dc2626",
          width: 2,
          opacity: 0.8,
        },
      },
      duration: 500,
      narration: "辺 b = 4 の正方形。面積は 4² = 16",
    },
    {
      action: { type: "move", to: { x: 105, y: 300 } },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "area-b", kind: "text", pos: { x: 105, y: 304 }, content: "4²=16", size: 18, color: "#b91c1c", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "16。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "sq-c",
          kind: "polygon",
          points: sqC,
          fill: "#ddd6fe",
          stroke: "#7c3aed",
          width: 2,
          opacity: 0.8,
        },
      },
      duration: 500,
      narration: "斜辺 c = 5 の正方形。面積は 5² = 25",
    },
    {
      action: { type: "move", to: { x: 348, y: 198 } },
      duration: 400,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "area-c", kind: "text", pos: { x: 348, y: 200 }, content: "5²=25", size: 18, color: "#6d28d9", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "25。",
    },
    {
      action: { type: "move", to: { x: RX, y: 150 } },
      duration: 500,
      narration: "足し合わせると…",
    },
    {
      action: {
        type: "draw",
        element: { id: "sq-sum", kind: "text", pos: { x: RX, y: 155 }, content: "9 + 16 = 25  ✓", size: 20, color: "#15803d", bold: true, align: "middle" },
      },
      duration: 700,
      narration: "9 + 16 = 25！ これが三平方の定理です。",
    },
    {
      action: {
        type: "draw",
        element: { id: "sq-highlight", kind: "highlight", center: { x: RX, y: 155 }, radius: 65, color: "#86efac" },
      },
      duration: 500,
      narration: "",
    },

    // ── 問い：なぜ正方形？ ──────────────────────────
    {
      action: { type: "move", to: { x: RX, y: 240 } },
      duration: 700,
      narration: "でも…なぜ「正方形」なのでしょう？正方形じゃないとダメなの？",
    },
    {
      action: {
        type: "draw",
        element: { id: "question", kind: "text", pos: { x: RX, y: 230 }, content: "❓ なぜ正方形？", size: 18, color: "#b45309", bold: true, align: "middle" },
      },
      duration: 600,
      narration: "実は…正方形じゃなくてもいいんです！",
    },

    // ── 正方形を消す ──────────────────────────────
    {
      action: { type: "erase", id: "sq-a" },
      duration: 100,
      narration: "",
    },
    {
      action: { type: "erase", id: "sq-b" },
      duration: 100,
      narration: "",
    },
    {
      action: { type: "erase", id: "sq-c" },
      duration: 100,
      narration: "",
    },
    {
      action: { type: "erase", id: "area-a" },
      duration: 100,
      narration: "",
    },
    {
      action: { type: "erase", id: "area-b" },
      duration: 100,
      narration: "",
    },
    {
      action: { type: "erase", id: "area-c" },
      duration: 100,
      narration: "",
    },
    {
      action: { type: "erase", id: "sq-sum" },
      duration: 100,
      narration: "",
    },
    {
      action: { type: "erase", id: "sq-highlight" },
      duration: 100,
      narration: "",
    },
    {
      action: { type: "erase", id: "ph1-label" },
      duration: 100,
      narration: "",
    },

    // ── PHASE 2: 正三角形 ──────────────────────────
    {
      action: { type: "move", to: { x: 228, y: 420 } },
      duration: 700,
      narration: "今度は各辺に「正三角形」を置いてみましょう！",
    },
    {
      action: {
        type: "draw",
        element: { id: "ph2-label", kind: "text", pos: { x: RX, y: 80 }, content: "② 正三角形で考える", size: 17, color: "#b45309", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "tri-a",
          kind: "polygon",
          points: triA,
          fill: "#bbf7d0",
          stroke: "#16a34a",
          width: 2,
          opacity: 0.85,
        },
      },
      duration: 600,
      narration: "辺 a = 3 の正三角形。正三角形の面積 = (√3/4) × 辺²。だから (√3/4) × 9",
    },
    {
      action: { type: "move", to: { x: 228, y: 430 } },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "tri-area-a", kind: "text", pos: { x: 228, y: 434 }, content: "k×9", size: 18, color: "#15803d", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "k × 9 と書きます（k = √3/4）。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "tri-b",
          kind: "polygon",
          points: triB,
          fill: "#fecaca",
          stroke: "#dc2626",
          width: 2,
          opacity: 0.85,
        },
      },
      duration: 600,
      narration: "辺 b = 4 の正三角形。面積は (√3/4) × 16",
    },
    {
      action: { type: "move", to: { x: 105, y: 295 } },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "tri-area-b", kind: "text", pos: { x: 100, y: 298 }, content: "k×16", size: 18, color: "#b91c1c", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "k × 16。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "tri-c",
          kind: "polygon",
          points: triC,
          fill: "#ddd6fe",
          stroke: "#7c3aed",
          width: 2,
          opacity: 0.85,
        },
      },
      duration: 600,
      narration: "斜辺 c = 5 の正三角形。面積は (√3/4) × 25",
    },
    {
      action: { type: "move", to: { x: 330, y: 210 } },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "tri-area-c", kind: "text", pos: { x: 330, y: 213 }, content: "k×25", size: 18, color: "#6d28d9", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "k × 25。",
    },

    // ── 検証 ──────────────────────────────────────
    {
      action: { type: "move", to: { x: RX, y: 145 } },
      duration: 600,
      narration: "足してみると…",
    },
    {
      action: {
        type: "draw",
        element: { id: "tri-sum1", kind: "text", pos: { x: RX, y: 140 }, content: "k×9 + k×16 = k×25", size: 17, color: "#374151", bold: true, align: "middle" },
      },
      duration: 700,
      narration: "k×9 + k×16 = k×25。",
    },
    {
      action: {
        type: "draw",
        element: { id: "tri-sum2", kind: "text", pos: { x: RX, y: 175 }, content: "→ k(9+16) = k×25", size: 16, color: "#374151", align: "middle" },
      },
      duration: 600,
      narration: "k でくくると k×(9+16) = k×25。",
    },
    {
      action: {
        type: "draw",
        element: { id: "tri-sum3", kind: "text", pos: { x: RX, y: 207 }, content: "→ k×25 = k×25  ✓", size: 17, color: "#15803d", bold: true, align: "middle" },
      },
      duration: 700,
      narration: "成り立ちます！正三角形でも同じ関係が！",
    },
    {
      action: {
        type: "draw",
        element: { id: "tri-highlight", kind: "highlight", center: { x: RX, y: 175 }, radius: 70, color: "#fde68a" },
      },
      duration: 500,
      narration: "",
    },

    // ── 本質の説明 ──────────────────────────────
    {
      action: { type: "move", to: { x: RX, y: 310 } },
      duration: 700,
      narration: "なぜ成り立つのか、理由を見てみましょう。",
    },
    {
      action: {
        type: "draw",
        element: { id: "why-title", kind: "text", pos: { x: RX, y: 290 }, content: "なぜ成り立つ？", size: 16, color: "#1e40af", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "why1", kind: "text", pos: { x: RX, y: 320 }, content: "面積 ∝ 辺²", size: 15, color: "#374151", align: "middle" },
      },
      duration: 500,
      narration: "どんな形でも、相似な図形の面積は「辺の2乗」に比例します。",
    },
    {
      action: {
        type: "draw",
        element: { id: "why2", kind: "text", pos: { x: RX, y: 350 }, content: "面積 = k × 辺²  (k は形で決まる定数)", size: 13, color: "#6b7280", align: "middle" },
      },
      duration: 700,
      narration: "面積 = k × 辺² です。正方形なら k=1、正三角形なら k=√3/4、半円なら k=π/4…",
    },
    {
      action: {
        type: "draw",
        element: { id: "why3", kind: "text", pos: { x: RX, y: 383 }, content: "k×a² + k×b² = k×c²", size: 15, color: "#374151", bold: true, align: "middle" },
      },
      duration: 600,
      narration: "だから k×a² + k×b² = k×c²。",
    },
    {
      action: {
        type: "draw",
        element: { id: "why4", kind: "text", pos: { x: RX, y: 410 }, content: "→ k×(a²+b²) = k×c²", size: 15, color: "#374151", align: "middle" },
      },
      duration: 500,
      narration: "k で割ると a² + b² = c²。",
    },
    {
      action: {
        type: "draw",
        element: { id: "why5", kind: "text", pos: { x: RX, y: 438 }, content: "k が何でも成り立つ！", size: 16, color: "#7c3aed", bold: true, align: "middle" },
      },
      duration: 600,
      narration: "k が正方形でも、正三角形でも、半円でも関係ない！ k が打ち消し合うからです。",
    },

    // ── まとめ ──────────────────────────────────
    {
      action: { type: "move", to: { x: 228, y: 130 } },
      duration: 700,
      narration: "まとめましょう。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "insight-box",
          kind: "rect",
          x: 30,
          y: 75,
          w: 390,
          h: 90,
          fill: "#eff6ff",
          stroke: "#3b82f6",
          opacity: 1,
        },
      },
      duration: 400,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "insight1", kind: "text", pos: { x: 225, y: 105 }, content: "三平方の定理の本質：", size: 15, color: "#1e40af", bold: true, align: "middle" },
      },
      duration: 400,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "insight2", kind: "text", pos: { x: 225, y: 130 }, content: "各辺を1辺とする「相似な図形」の面積は", size: 14, color: "#1e40af", align: "middle" },
      },
      duration: 500,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: { id: "insight3", kind: "text", pos: { x: 225, y: 152 }, content: "a² + b² = c² の関係になる！", size: 15, color: "#1d4ed8", bold: true, align: "middle" },
      },
      duration: 600,
      narration: "各辺を一辺とする相似な図形の面積は、必ず a² + b² = c² の関係になります。正方形はその特別な例にすぎません！",
    },
    {
      action: {
        type: "draw",
        element: { id: "final-highlight", kind: "highlight", center: { x: 225, y: 125 }, radius: 75, color: "#bfdbfe" },
      },
      duration: 500,
      narration: "概念が繋がると、定理が全く違って見えてきますね！",
    },
  ],
};

import type { Lesson, Step } from "./types";

const A = { x: 240, y: 390 };
const B = { x: 360, y: 390 };
const C = { x: 240, y: 230 };

// Square on AB (below, 3u × 3u = 120×120)
const sqAB = [A, B, { x: 360, y: 510 }, { x: 240, y: 510 }];

// Square on AC (left, 4u × 4u = 160×160)
const sqAC = [{ x: 80, y: 230 }, C, A, { x: 80, y: 390 }];

// Square on BC (upper right, 5u × 5u = 200×200)
// BC unit: (-0.6,-0.8), perp outward (90° CCW): (0.8,-0.6)
// D = B + 200*(0.8,-0.6) = (520, 270)
// E = C + 200*(0.8,-0.6) = (400, 110)
const sqBC = [B, C, { x: 400, y: 110 }, { x: 520, y: 270 }];

function st(action: Step["action"], duration: number, narration: string): Step {
  return { action, duration, narration };
}

export const pythMusic: Lesson = {
  id: "pyth-music",
  title: "音楽と三平方の定理",
  subject: "中学数学",
  viewBox: { width: 660, height: 545 },
  steps: [
    // ===== Intro =====
    st({ type: "noop" }, 1600,
      "音楽が好き？実はピタゴラスは三角形の定理だけじゃなく、音楽の数学も発見した人物！"),
    st({ type: "move", to: { x: 330, y: 80 } }, 600, ""),
    st({
      type: "draw",
      element: { id: "title", kind: "text", pos: { x: 330, y: 68 }, content: "♪ 音楽で覚える三平方の定理 ♫", size: 17, color: "#7c3aed", bold: true, align: "middle" },
    }, 800, "ドとソの音のハーモニー — 弦の長さを 3:2 にすると生まれる"),
    st({
      type: "draw",
      element: { id: "sub", kind: "text", pos: { x: 330, y: 92 }, content: "弦 2:1 = オクターブ　3:2 = ドとソ（5度）　4:3 = 4度", size: 12, color: "#6b7280", align: "middle" },
    }, 1400,
      "シンプルな整数の比率が音楽の美しさを作る。そして同じ数字 3・4・5 が三角形にも！"),

    // ===== Triangle =====
    st({ type: "move", to: A }, 700, "では 3・4・5 の直角三角形を描こう"),
    st({
      type: "draw",
      element: { id: "ab", kind: "line", from: A, to: B, color: "#374151", width: 3 },
    }, 600, "底辺：長さ 3（ドとソの比率にも出てくる数字！）"),
    st({
      type: "draw",
      element: { id: "ac", kind: "line", from: A, to: C, color: "#374151", width: 3 },
    }, 600, "縦辺：長さ 4"),
    st({
      type: "draw",
      element: { id: "bc", kind: "line", from: B, to: C, color: "#dc2626", width: 3 },
    }, 600, "斜辺：長さ 5（赤）"),
    st({
      type: "draw",
      element: { id: "ra", kind: "rect", x: 240, y: 378, w: 12, h: 12, stroke: "#374151", fill: "none" },
    }, 400, "ここが直角（90°）"),
    st({
      type: "draw",
      element: { id: "l3", kind: "text", pos: { x: 300, y: 412 }, content: "3", size: 17, color: "#1d4ed8", bold: true, align: "middle" },
    }, 250, ""),
    st({
      type: "draw",
      element: { id: "l4", kind: "text", pos: { x: 214, y: 313 }, content: "4", size: 17, color: "#1d4ed8", bold: true, align: "middle" },
    }, 250, ""),
    st({
      type: "draw",
      element: { id: "l5", kind: "text", pos: { x: 322, y: 298 }, content: "5", size: 17, color: "#dc2626", bold: true, align: "middle" },
    }, 600, "辺の長さ：3, 4, 5 — ピタゴラスが音楽でも使った数字！"),

    // ===== Piano square on AB (3 white keys, vertical) =====
    st({ type: "move", to: { x: 300, y: 455 } }, 600,
      "辺AB（長さ3）に正方形を描く — でも普通の正方形じゃなくピアノにしよう！"),
    st({
      type: "draw",
      element: { id: "sqAB-bg", kind: "polygon", points: sqAB, fill: "#fffbeb", stroke: "#d97706", width: 2, opacity: 1 },
    }, 500, "3 本の白鍵のピアノ！"),
    st({
      type: "draw",
      element: { id: "wk1", kind: "rect", x: 240, y: 390, w: 40, h: 120, fill: "white", stroke: "#9ca3af" },
    }, 220, ""),
    st({
      type: "draw",
      element: { id: "wk2", kind: "rect", x: 280, y: 390, w: 40, h: 120, fill: "white", stroke: "#9ca3af" },
    }, 220, ""),
    st({
      type: "draw",
      element: { id: "wk3", kind: "rect", x: 320, y: 390, w: 40, h: 120, fill: "white", stroke: "#9ca3af" },
    }, 220, "白鍵 3 本"),
    st({
      type: "draw",
      element: { id: "bk1", kind: "rect", x: 269, y: 390, w: 22, h: 76, fill: "#1a1a1a" },
    }, 220, ""),
    st({
      type: "draw",
      element: { id: "bk2", kind: "rect", x: 309, y: 390, w: 22, h: 76, fill: "#1a1a1a" },
    }, 220, "黒鍵 2 本"),
    st({
      type: "draw",
      element: { id: "lbl-ab", kind: "text", pos: { x: 300, y: 527 }, content: "3 本 → 3² = 9", size: 14, color: "#d97706", bold: true, align: "middle" },
    }, 700, "白鍵 3 本の正方形：面積 = 3 × 3 = 9"),

    // ===== Piano square on AC (4 horizontal keys) =====
    st({ type: "move", to: { x: 160, y: 310 } }, 600,
      "辺AC（長さ4）の正方形。ピアノを横向きにすると…"),
    st({
      type: "draw",
      element: { id: "sqAC-bg", kind: "polygon", points: sqAC, fill: "#f0fdf4", stroke: "#16a34a", width: 2, opacity: 1 },
    }, 500, "横向きピアノ — 4 本の鍵盤！"),
    st({
      type: "draw",
      element: { id: "hk1", kind: "rect", x: 80, y: 230, w: 160, h: 40, fill: "white", stroke: "#9ca3af" },
    }, 200, ""),
    st({
      type: "draw",
      element: { id: "hk2", kind: "rect", x: 80, y: 270, w: 160, h: 40, fill: "white", stroke: "#9ca3af" },
    }, 200, ""),
    st({
      type: "draw",
      element: { id: "hk3", kind: "rect", x: 80, y: 310, w: 160, h: 40, fill: "white", stroke: "#9ca3af" },
    }, 200, ""),
    st({
      type: "draw",
      element: { id: "hk4", kind: "rect", x: 80, y: 350, w: 160, h: 40, fill: "white", stroke: "#9ca3af" },
    }, 200, "白鍵 4 本（横向き）"),
    st({
      type: "draw",
      element: { id: "hbk1", kind: "rect", x: 80, y: 259, w: 107, h: 22, fill: "#1a1a1a" },
    }, 200, ""),
    st({
      type: "draw",
      element: { id: "hbk2", kind: "rect", x: 80, y: 299, w: 107, h: 22, fill: "#1a1a1a" },
    }, 200, ""),
    st({
      type: "draw",
      element: { id: "hbk3", kind: "rect", x: 80, y: 339, w: 107, h: 22, fill: "#1a1a1a" },
    }, 200, "黒鍵 3 本"),
    st({
      type: "draw",
      element: { id: "lbl-ac", kind: "text", pos: { x: 160, y: 218 }, content: "4 本 → 4² = 16", size: 14, color: "#16a34a", bold: true, align: "middle" },
    }, 700, "横向き白鍵 4 本の正方形：面積 = 4 × 4 = 16"),

    // ===== Square on BC =====
    st({ type: "move", to: { x: 460, y: 195 } }, 700,
      "斜辺BC（長さ5）の正方形は斜めになる"),
    st({
      type: "draw",
      element: { id: "sqBC-bg", kind: "polygon", points: sqBC, fill: "#fdf4ff", stroke: "#7e22ce", width: 2, opacity: 1 },
    }, 700, "5 × 5 の正方形：面積 = 25"),
    st({
      type: "draw",
      element: { id: "lbl-bc1", kind: "text", pos: { x: 460, y: 193 }, content: "5² = 25", size: 15, color: "#7e22ce", bold: true },
    }, 400, ""),
    st({
      type: "draw",
      element: { id: "lbl-bc2", kind: "text", pos: { x: 460, y: 218 }, content: "♪♫♩♪♫", size: 15, color: "#7e22ce" },
    }, 600, "ピアノで言えば白鍵 5 本分の正方形！"),

    // ===== Calculation =====
    st({ type: "noop" }, 700, "では計算してみよう！"),
    st({
      type: "draw",
      element: { id: "c1", kind: "text", pos: { x: 548, y: 320 }, content: "9", size: 24, color: "#d97706", bold: true },
    }, 500, "AB の正方形：9"),
    st({
      type: "draw",
      element: { id: "c2", kind: "text", pos: { x: 540, y: 355 }, content: "+ 16", size: 24, color: "#16a34a", bold: true },
    }, 500, "AC の正方形：16"),
    st({
      type: "draw",
      element: { id: "c3", kind: "text", pos: { x: 538, y: 390 }, content: "= 25 ✓", size: 24, color: "#7e22ce", bold: true },
    }, 900, "合計 25 — BC の正方形と一致！"),
    st({
      type: "draw",
      element: { id: "formula", kind: "text", pos: { x: 330, y: 155 }, content: "3² + 4² = 5²", size: 21, color: "#1d4ed8", bold: true, align: "middle" },
    }, 1000, "三平方の定理：直角三角形では a² + b² = c² が必ず成り立つ"),

    // ===== Music connection =====
    st({
      type: "draw",
      element: { id: "conn1", kind: "text", pos: { x: 530, y: 438 }, content: "♪ 音楽：3:2 = ドとソ", size: 13, color: "#7c3aed" },
    }, 700, "音楽のハーモニー：弦の比率 3:2 → 美しい音"),
    st({
      type: "draw",
      element: { id: "conn2", kind: "text", pos: { x: 530, y: 461 }, content: "📐 図形：3²+4²=5²", size: 13, color: "#1d4ed8" },
    }, 700, "幾何学のハーモニー：辺の二乗の関係 → 美しい三角形"),
    st({
      type: "draw",
      element: { id: "conn3", kind: "text", pos: { x: 530, y: 484 }, content: "どちらもピタゴラスの発見 ✨", size: 12, color: "#374151" },
    }, 1200, "音楽も図形も「数字の美しいパターン」— これがピタゴラスの偉大な発見！"),
  ],
};

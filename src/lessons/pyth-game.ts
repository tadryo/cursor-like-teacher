import type { Lesson, Step } from "./types";

const A = { x: 240, y: 390 };
const B = { x: 360, y: 390 };
const C = { x: 240, y: 230 };

const sqAB = [A, B, { x: 360, y: 510 }, { x: 240, y: 510 }];
const sqAC = [{ x: 80, y: 230 }, C, A, { x: 80, y: 390 }];
const sqBC = [B, C, { x: 400, y: 110 }, { x: 520, y: 270 }];

function st(action: Step["action"], duration: number, narration: string): Step {
  return { action, duration, narration };
}

export const pythGame: Lesson = {
  id: "pyth-game",
  title: "ゲームと三平方",
  subject: "中学数学",
  viewBox: { width: 660, height: 545 },
  steps: [
    // ===== Intro =====
    st({ type: "noop" }, 1400,
      "ゲームが好き？RPGのダンジョンを最短ルートで攻略するには三平方の定理が使える！"),
    st({ type: "move", to: { x: 330, y: 80 } }, 600, ""),
    st({ type: "draw", element: { id: "title", kind: "text", pos: { x: 330, y: 68 }, content: "ダンジョンで覚える三平方の定理", size: 16, color: "#7c3aed", bold: true, align: "middle" } },
      700, "勇者の移動ルート = 直角三角形 → 最短距離を求めよ"),
    st({ type: "draw", element: { id: "sub", kind: "text", pos: { x: 330, y: 90 }, content: "タイルの数 = 面積 → ルームの大きさを比べると定理が見えてくる", size: 11, color: "#6b7280", align: "middle" } },
      1400, "3・4・5 マスの三角形の謎を解け！"),

    // ===== Triangle / Map =====
    st({ type: "move", to: A }, 700, "勇者（A）→ 宝箱（C）のダンジョンマップを描こう"),
    st({ type: "draw", element: { id: "ab", kind: "line", from: A, to: B, color: "#374151", width: 3 } },
      550, "横ルート: 3 マス"),
    st({ type: "draw", element: { id: "ac", kind: "line", from: A, to: C, color: "#374151", width: 3 } },
      550, "縦ルート: 4 マス"),
    st({ type: "draw", element: { id: "bc", kind: "line", from: B, to: C, color: "#dc2626", width: 3 } },
      550, "斜めの近道（赤）: 何マス？ ← これを求めたい！"),
    st({ type: "draw", element: { id: "ra", kind: "rect", x: 240, y: 378, w: 12, h: 12, stroke: "#374151", fill: "none" } },
      400, "曲がり角（直角）"),
    st({ type: "draw", element: { id: "lblA", kind: "text", pos: { x: 225, y: 408 }, content: "HERO", size: 10, color: "#7c3aed", bold: true, align: "middle" } }, 200, ""),
    st({ type: "draw", element: { id: "lblC", kind: "text", pos: { x: 224, y: 224 }, content: "GOAL", size: 10, color: "#16a34a", bold: true, align: "middle" } }, 200, ""),
    st({ type: "draw", element: { id: "l3", kind: "text", pos: { x: 300, y: 408 }, content: "3", size: 15, color: "#1d4ed8", bold: true, align: "middle" } }, 180, ""),
    st({ type: "draw", element: { id: "l4", kind: "text", pos: { x: 218, y: 313 }, content: "4", size: 15, color: "#1d4ed8", bold: true, align: "middle" } }, 180, ""),
    st({ type: "draw", element: { id: "l5", kind: "text", pos: { x: 328, y: 298 }, content: "5", size: 15, color: "#dc2626", bold: true, align: "middle" } },
      700, "3・4・5 マスの直角三角形 ─ なぜ斜めが 5 マスになるの？"),

    // ===== AB square — small room =====
    st({ type: "move", to: { x: 300, y: 455 } }, 600,
      "AB（3 マス）の正方形ルーム ─ 小部屋"),
    st({ type: "draw", element: { id: "sqAB-bg", kind: "polygon", points: sqAB, fill: "#1e1b4b", stroke: "#7c3aed", width: 2, opacity: 1 } },
      400, "タイル 3×3 = 9 マスの小部屋"),
    st({ type: "draw", element: { id: "ag1", kind: "line", from: { x: 280, y: 390 }, to: { x: 280, y: 510 }, color: "#4338ca", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "ag2", kind: "line", from: { x: 320, y: 390 }, to: { x: 320, y: 510 }, color: "#4338ca", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "ag3", kind: "line", from: { x: 240, y: 430 }, to: { x: 360, y: 430 }, color: "#4338ca", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "ag4", kind: "line", from: { x: 240, y: 470 }, to: { x: 360, y: 470 }, color: "#4338ca", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "gem1", kind: "circle", center: { x: 261, y: 411 }, radius: 5, fill: "#fbbf24", stroke: "#fbbf24", opacity: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "gem2", kind: "circle", center: { x: 340, y: 491 }, radius: 5, fill: "#fbbf24", stroke: "#fbbf24", opacity: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "gem3", kind: "circle", center: { x: 300, y: 450 }, radius: 6, fill: "#f472b6", stroke: "#f472b6", opacity: 1 } }, 200, "小部屋に宝石が光ってる"),
    st({ type: "draw", element: { id: "lbl-ab", kind: "text", pos: { x: 300, y: 527 }, content: "EXP: 3² = 9", size: 15, color: "#a78bfa", bold: true, align: "middle" } },
      700, "小部屋の広さ（面積）= 9 タイル"),

    // ===== AC square — medium room =====
    st({ type: "move", to: { x: 160, y: 310 } }, 600,
      "AC（4 マス）の正方形ルーム ─ 中部屋"),
    st({ type: "draw", element: { id: "sqAC-bg", kind: "polygon", points: sqAC, fill: "#0c1330", stroke: "#2563eb", width: 2, opacity: 1 } },
      400, "タイル 4×4 = 16 マスの中部屋"),
    st({ type: "draw", element: { id: "bg1", kind: "line", from: { x: 80, y: 270 }, to: { x: 240, y: 270 }, color: "#1d4ed8", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "bg2", kind: "line", from: { x: 80, y: 310 }, to: { x: 240, y: 310 }, color: "#1d4ed8", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "bg3", kind: "line", from: { x: 80, y: 350 }, to: { x: 240, y: 350 }, color: "#1d4ed8", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "bg4", kind: "line", from: { x: 120, y: 230 }, to: { x: 120, y: 390 }, color: "#1d4ed8", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "bg5", kind: "line", from: { x: 160, y: 230 }, to: { x: 160, y: 390 }, color: "#1d4ed8", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "bg6", kind: "line", from: { x: 200, y: 230 }, to: { x: 200, y: 390 }, color: "#1d4ed8", width: 1 } }, 80, ""),
    st({ type: "draw", element: { id: "chest", kind: "rect", x: 147, y: 297, w: 26, h: 22, fill: "#d97706", stroke: "#fbbf24" } },
      300, "宝箱を発見！"),
    st({ type: "draw", element: { id: "chest-lid", kind: "line", from: { x: 147, y: 305 }, to: { x: 173, y: 305 }, color: "#fbbf24", width: 2 } }, 200, ""),
    st({ type: "draw", element: { id: "lbl-ac", kind: "text", pos: { x: 160, y: 218 }, content: "EXP: 4² = 16", size: 15, color: "#60a5fa", bold: true, align: "middle" } },
      700, "中部屋の広さ = 16 タイル"),

    // ===== BC square — boss room =====
    st({ type: "move", to: { x: 460, y: 195 } }, 700,
      "斜辺 BC（5 マス）の正方形 ─ BOSS ROOM！"),
    st({ type: "draw", element: { id: "sqBC-bg", kind: "polygon", points: sqBC, fill: "#300b0b", stroke: "#dc2626", width: 2, opacity: 1 } },
      600, "タイル 5×5 = 25 ─ 最大のボスルーム！"),
    st({ type: "draw", element: { id: "boss1", kind: "text", pos: { x: 460, y: 188 }, content: "BOSS ROOM", size: 11, color: "#dc2626", bold: true } }, 300, ""),
    st({ type: "draw", element: { id: "boss2", kind: "text", pos: { x: 460, y: 210 }, content: "HP: 25", size: 14, color: "#f97316", bold: true } },
      700, "ボスのHP = 25！これが答えにつながる"),

    // ===== Calculation =====
    st({ type: "noop" }, 500, "小部屋 + 中部屋のタイル数を合計すると…"),
    st({ type: "draw", element: { id: "c1", kind: "text", pos: { x: 548, y: 315 }, content: "9", size: 26, color: "#a78bfa", bold: true } },
      500, "小部屋: 9"),
    st({ type: "draw", element: { id: "c2", kind: "text", pos: { x: 538, y: 352 }, content: "+ 16", size: 26, color: "#60a5fa", bold: true } },
      500, "中部屋: 16"),
    st({ type: "draw", element: { id: "c3", kind: "text", pos: { x: 528, y: 389 }, content: "= 25  WIN!", size: 22, color: "#dc2626", bold: true } },
      950, "合計 25 = ボスのHP！三平方の定理で斜めの長さが求まった！"),
    st({ type: "draw", element: { id: "formula", kind: "text", pos: { x: 330, y: 155 }, content: "3² + 4² = 5²", size: 20, color: "#1d4ed8", bold: true, align: "middle" } },
      1000, "a² + b² = c² ─ ダンジョンも現実世界も同じ法則！"),

    // ===== Finale =====
    st({ type: "draw", element: { id: "clear", kind: "text", pos: { x: 330, y: 510 }, content: "STAGE CLEAR  三平方の定理をマスターした！", size: 13, color: "#fbbf24", bold: true, align: "middle" } },
      1200, "直角三角形の 2 辺の長さがわかれば、斜辺の長さが計算できる！"),
  ],
};

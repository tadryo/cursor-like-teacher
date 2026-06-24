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

export const pythSports: Lesson = {
  id: "pyth-sports",
  title: "スポーツと三平方",
  subject: "中学数学",
  viewBox: { width: 660, height: 545 },
  steps: [
    // ===== Intro =====
    st({ type: "noop" }, 1400,
      "スポーツが好き？サッカーや野球のグラウンドのコーナーはどうやって直角にしているか知ってる？"),
    st({ type: "move", to: { x: 330, y: 80 } }, 600, ""),
    st({ type: "draw", element: { id: "title", kind: "text", pos: { x: 330, y: 68 }, content: "スポーツで覚える三平方の定理", size: 16, color: "#16a34a", bold: true, align: "middle" } },
      700, "グラウンド整備で使われる「3-4-5の法則」"),
    st({ type: "draw", element: { id: "sub", kind: "text", pos: { x: 330, y: 90 }, content: "ロープを 3:4:5 の長さに結ぶ → 直角ができる！ 古代エジプトから続く知恵", size: 11, color: "#6b7280", align: "middle" } },
      1400, "4500年前のピラミッド建設から、今日のグラウンド整備まで現役の技術！"),

    // ===== Triangle =====
    st({ type: "move", to: A }, 700, "3・4・5 の直角三角形を描こう"),
    st({ type: "draw", element: { id: "ab", kind: "line", from: A, to: B, color: "#374151", width: 3 } },
      550, "底辺：3 メートル（コーナーからサイドラインに沿って）"),
    st({ type: "draw", element: { id: "ac", kind: "line", from: A, to: C, color: "#374151", width: 3 } },
      550, "縦辺：4 メートル（コーナーからゴールラインに沿って）"),
    st({ type: "draw", element: { id: "bc", kind: "line", from: B, to: C, color: "#dc2626", width: 3 } },
      550, "対角：5 メートルぴったりなら — 直角が出ている証拠！"),
    st({ type: "draw", element: { id: "ra", kind: "rect", x: 240, y: 378, w: 12, h: 12, stroke: "#374151", fill: "none" } },
      400, "ここが直角 90°"),
    st({ type: "draw", element: { id: "l3", kind: "text", pos: { x: 300, y: 408 }, content: "3m", size: 14, color: "#1d4ed8", bold: true, align: "middle" } }, 200, ""),
    st({ type: "draw", element: { id: "l4", kind: "text", pos: { x: 218, y: 313 }, content: "4m", size: 14, color: "#1d4ed8", bold: true, align: "middle" } }, 200, ""),
    st({ type: "draw", element: { id: "l5", kind: "text", pos: { x: 328, y: 298 }, content: "5m", size: 14, color: "#dc2626", bold: true, align: "middle" } },
      700, "3・4・5 メートルのロープで直角が完成！でもなぜ？"),

    // ===== AB square — green field =====
    st({ type: "move", to: { x: 300, y: 455 } }, 600,
      "AB（3m）の正方形 — サッカーフィールドのコーナーエリアに見立てよう"),
    st({ type: "draw", element: { id: "sqAB-bg", kind: "polygon", points: sqAB, fill: "#bbf7d0", stroke: "#16a34a", width: 2, opacity: 1 } },
      450, "3×3 のグリーンコート"),
    st({ type: "draw", element: { id: "fl1", kind: "line", from: { x: 240, y: 430 }, to: { x: 360, y: 430 }, color: "white", width: 1.5 } }, 120, ""),
    st({ type: "draw", element: { id: "fl2", kind: "line", from: { x: 240, y: 470 }, to: { x: 360, y: 470 }, color: "white", width: 1.5 } }, 120, ""),
    st({ type: "draw", element: { id: "fc1", kind: "line", from: { x: 280, y: 390 }, to: { x: 280, y: 510 }, color: "white", width: 1 } }, 120, ""),
    st({ type: "draw", element: { id: "fc2", kind: "line", from: { x: 320, y: 390 }, to: { x: 320, y: 510 }, color: "white", width: 1 } }, 120, ""),
    st({ type: "draw", element: { id: "ball1", kind: "circle", center: { x: 300, y: 450 }, radius: 8, fill: "white", stroke: "#374151", opacity: 1 } },
      300, "フィールドマーキング ─ 芝のコートをイメージ"),
    st({ type: "draw", element: { id: "lbl-ab", kind: "text", pos: { x: 300, y: 527 }, content: "3 x 3 = 9", size: 15, color: "#16a34a", bold: true, align: "middle" } },
      700, "3メートルの辺の正方形：面積 = 9"),

    // ===== AC square — blue court =====
    st({ type: "move", to: { x: 160, y: 310 } }, 600,
      "AC（4m）の正方形 — バスケコートに見立てよう"),
    st({ type: "draw", element: { id: "sqAC-bg", kind: "polygon", points: sqAC, fill: "#bfdbfe", stroke: "#2563eb", width: 2, opacity: 1 } },
      450, "4×4 のブルーコート"),
    st({ type: "draw", element: { id: "hk1", kind: "line", from: { x: 80, y: 270 }, to: { x: 240, y: 270 }, color: "white", width: 1.5 } }, 100, ""),
    st({ type: "draw", element: { id: "hk2", kind: "line", from: { x: 80, y: 310 }, to: { x: 240, y: 310 }, color: "white", width: 1.5 } }, 100, ""),
    st({ type: "draw", element: { id: "hk3", kind: "line", from: { x: 80, y: 350 }, to: { x: 240, y: 350 }, color: "white", width: 1.5 } }, 100, ""),
    st({ type: "draw", element: { id: "vk1", kind: "line", from: { x: 120, y: 230 }, to: { x: 120, y: 390 }, color: "white", width: 1 } }, 100, ""),
    st({ type: "draw", element: { id: "vk2", kind: "line", from: { x: 160, y: 230 }, to: { x: 160, y: 390 }, color: "white", width: 1 } }, 100, ""),
    st({ type: "draw", element: { id: "vk3", kind: "line", from: { x: 200, y: 230 }, to: { x: 200, y: 390 }, color: "white", width: 1 } }, 100, ""),
    st({ type: "draw", element: { id: "ball2", kind: "circle", center: { x: 160, y: 310 }, radius: 8, fill: "#f97316", stroke: "#92400e", opacity: 1 } },
      300, "バスケットボール"),
    st({ type: "draw", element: { id: "lbl-ac", kind: "text", pos: { x: 160, y: 218 }, content: "4 x 4 = 16", size: 15, color: "#2563eb", bold: true, align: "middle" } },
      700, "4メートルの辺の正方形：面積 = 16"),

    // ===== BC square =====
    st({ type: "move", to: { x: 460, y: 195 } }, 700,
      "斜辺 BC（5m）の正方形 — 一番大きいグラウンド"),
    st({ type: "draw", element: { id: "sqBC-bg", kind: "polygon", points: sqBC, fill: "#fef3c7", stroke: "#d97706", width: 2, opacity: 1 } },
      650, "5×5 = 25 の大きいコート"),
    st({ type: "draw", element: { id: "lbl-bc", kind: "text", pos: { x: 460, y: 190 }, content: "5 x 5 = 25", size: 13, color: "#d97706", bold: true } },
      700, ""),

    // ===== Calculation =====
    st({ type: "noop" }, 500, "3 つのコートの面積を足してみよう"),
    st({ type: "draw", element: { id: "c1", kind: "text", pos: { x: 548, y: 315 }, content: "9", size: 26, color: "#16a34a", bold: true } },
      500, "緑コート：9"),
    st({ type: "draw", element: { id: "c2", kind: "text", pos: { x: 538, y: 352 }, content: "+ 16", size: 26, color: "#2563eb", bold: true } },
      500, "青コート：16"),
    st({ type: "draw", element: { id: "c3", kind: "text", pos: { x: 534, y: 389 }, content: "= 25 OK", size: 22, color: "#d97706", bold: true } },
      950, "合計 25 = 斜辺の正方形 ─ 三平方の定理！"),
    st({ type: "draw", element: { id: "formula", kind: "text", pos: { x: 330, y: 155 }, content: "3² + 4² = 5²", size: 20, color: "#1d4ed8", bold: true, align: "middle" } },
      1000, "a² + b² = c² — グラウンドも宇宙も同じ法則！"),

    // ===== Real-world wrap =====
    st({ type: "draw", element: { id: "r1", kind: "text", pos: { x: 528, y: 438 }, content: "サッカー: コーナーの直角確認", size: 12, color: "#16a34a" } },
      700, "グラウンド整備で今でも使われている"),
    st({ type: "draw", element: { id: "r2", kind: "text", pos: { x: 528, y: 460 }, content: "大工: 壁・床の直角出し", size: 12, color: "#d97706" } },
      700, "大工さんも同じ原理で直角を確認する"),
    st({ type: "draw", element: { id: "r3", kind: "text", pos: { x: 528, y: 482 }, content: "ピラミッド: 4500年前から現役", size: 12, color: "#374151" } },
      1200, "世界最古の実用数学のひとつ ─ 今日も使われ続けている！"),
  ],
};

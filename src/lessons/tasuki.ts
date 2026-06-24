import type { Lesson } from "./types";

const W = 700;
const H = 520;

// Grid bounds
const GX1 = 165, GX2 = 435;
const GY1 = 160, GY2 = 380;
const GXM = 300, GYM = 270;

// Cell centers
const TL = { x: (GX1 + GXM) / 2, y: (GY1 + GYM) / 2 }; // (232, 215)
const TR = { x: (GXM + GX2) / 2, y: (GY1 + GYM) / 2 }; // (367, 215)
const BL = { x: (GX1 + GXM) / 2, y: (GYM + GY2) / 2 }; // (232, 325)
const BR = { x: (GXM + GX2) / 2, y: (GYM + GY2) / 2 }; // (367, 325)

const RX = 565; // right-side panel x

export const tasuki: Lesson = {
  id: "tasuki",
  title: "たすきがけ因数分解",
  subject: "中学数学",
  viewBox: { width: W, height: H },
  steps: [
    // ── 導入 ──
    {
      action: { type: "move", to: { x: W / 2, y: H / 2 } },
      duration: 600,
      narration: "たすきがけ因数分解、一緒にやってみましょう！",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "title",
          kind: "text",
          pos: { x: W / 2, y: 48 },
          content: "たすきがけ因数分解",
          size: 26,
          color: "#1e40af",
          bold: true,
          align: "middle",
        },
      },
      duration: 500,
      narration: "今日は「たすきがけ」をマスターします！",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "problem-label",
          kind: "text",
          pos: { x: W / 2, y: 92 },
          content: "問題：2x² + 7x + 3  を因数分解せよ",
          size: 21,
          color: "#374151",
          bold: true,
          align: "middle",
        },
      },
      duration: 700,
      narration: "問題は「2x² + 7x + 3」です。",
    },
    {
      action: { type: "move", to: { x: W / 2, y: 130 } },
      duration: 500,
      narration: "因数分解とは、この式を「かけ算の形」に直すことです。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "goal",
          kind: "text",
          pos: { x: W / 2, y: 130 },
          content: "（　x + 　）（　x + 　）の形にしたい！",
          size: 17,
          color: "#6b21a8",
          align: "middle",
        },
      },
      duration: 800,
      narration: "（□x + □）×（□x + □）の形に変えたいんです。でも、何を入れたらいいの？そこで「たすきがけ」を使います！",
    },

    // ── グリッドを描く ──
    {
      action: { type: "move", to: { x: GX1 + 20, y: GY1 - 20 } },
      duration: 700,
      narration: "まず表を作りましょう。2行2列のマス目です。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "grid-bg",
          kind: "rect",
          x: GX1,
          y: GY1,
          w: GX2 - GX1,
          h: GY2 - GY1,
          fill: "#f0f9ff",
          stroke: "#93c5fd",
          opacity: 1,
        },
      },
      duration: 400,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "grid-h",
          kind: "line",
          from: { x: GX1, y: GYM },
          to: { x: GX2, y: GYM },
          color: "#60a5fa",
          width: 2,
        },
      },
      duration: 500,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "grid-v",
          kind: "line",
          from: { x: GXM, y: GY1 },
          to: { x: GXM, y: GY2 },
          color: "#60a5fa",
          width: 2,
        },
      },
      duration: 500,
      narration: "マス目が完成！左側に「x²の係数」、右側に「定数」を書いていきます。",
    },

    // ── 列ラベル ──
    {
      action: {
        type: "draw",
        element: {
          id: "col-label-left",
          kind: "text",
          pos: { x: (GX1 + GXM) / 2, y: GY1 - 12 },
          content: "x²の係数を分解",
          size: 13,
          color: "#1d4ed8",
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
          id: "col-label-right",
          kind: "text",
          pos: { x: (GXM + GX2) / 2, y: GY1 - 12 },
          content: "定数を分解",
          size: 13,
          color: "#dc2626",
          align: "middle",
        },
      },
      duration: 400,
      narration: "",
    },

    // ── 左列：2 の因数分解 ──
    {
      action: { type: "move", to: { x: TL.x, y: TL.y } },
      duration: 600,
      narration: "x²の係数は「2」です。2 = 2 × 1 に分けられます。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "num-tl",
          kind: "text",
          pos: TL,
          content: "2",
          size: 40,
          color: "#1d4ed8",
          bold: true,
          align: "middle",
        },
      },
      duration: 500,
      narration: "上のマスに「2」を書きます。",
    },
    {
      action: { type: "move", to: { x: BL.x, y: BL.y } },
      duration: 500,
      narration: "下のマスに「1」を書きます。2 × 1 = 2 ですね。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "num-bl",
          kind: "text",
          pos: BL,
          content: "1",
          size: 40,
          color: "#1d4ed8",
          bold: true,
          align: "middle",
        },
      },
      duration: 500,
      narration: "左列完成。上が2、下が1です。",
    },

    // ── 右列：3 の因数分解 ──
    {
      action: { type: "move", to: { x: TR.x, y: TR.y } },
      duration: 600,
      narration: "次に定数「3」です。3 = 1 × 3 に分けられます。まず 1 を上に。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "num-tr",
          kind: "text",
          pos: TR,
          content: "1",
          size: 40,
          color: "#dc2626",
          bold: true,
          align: "middle",
        },
      },
      duration: 500,
      narration: "上のマスに「1」を書きます。",
    },
    {
      action: { type: "move", to: { x: BR.x, y: BR.y } },
      duration: 500,
      narration: "下のマスに「3」を書きます。1 × 3 = 3 ですね。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "num-br",
          kind: "text",
          pos: BR,
          content: "3",
          size: 40,
          color: "#dc2626",
          bold: true,
          align: "middle",
        },
      },
      duration: 500,
      narration: "右列完成。上が1、下が3です。",
    },

    // ── たすきを引く ──
    {
      action: { type: "move", to: { x: GXM, y: GYM } },
      duration: 600,
      narration: "いよいよ「たすきがけ」！対角線を引いて計算します。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "tasuki-label",
          kind: "text",
          pos: { x: GXM, y: GYM - 8 },
          content: "×",
          size: 32,
          color: "#f59e0b",
          bold: true,
          align: "middle",
        },
      },
      duration: 400,
      narration: "中央に × を書いて…",
    },

    // diagonal 1: TL → BR  (2 × 3)
    {
      action: {
        type: "draw",
        element: {
          id: "diag1",
          kind: "line",
          from: TL,
          to: BR,
          color: "#f97316",
          width: 3,
        },
      },
      duration: 700,
      narration: "まず左上「2」から右下「3」へ斜線を引きます！",
    },
    {
      action: { type: "move", to: { x: RX, y: 210 } },
      duration: 500,
      narration: "2 × 3 = 6 と計算します。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "calc1",
          kind: "text",
          pos: { x: RX, y: 215 },
          content: "2 × 3 = 6",
          size: 20,
          color: "#f97316",
          bold: true,
          align: "middle",
        },
      },
      duration: 600,
      narration: "2 かける 3 は 6！",
    },

    // diagonal 2: TR → BL  (1 × 1)
    {
      action: { type: "move", to: { x: GXM, y: GYM } },
      duration: 500,
      narration: "次に右上「1」から左下「1」へ斜線を引きます！",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "diag2",
          kind: "line",
          from: TR,
          to: BL,
          color: "#7c3aed",
          width: 3,
        },
      },
      duration: 700,
      narration: "右上「1」から左下「1」へ。",
    },
    {
      action: { type: "move", to: { x: RX, y: 265 } },
      duration: 500,
      narration: "1 × 1 = 1 と計算します。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "calc2",
          kind: "text",
          pos: { x: RX, y: 265 },
          content: "1 × 1 = 1",
          size: 20,
          color: "#7c3aed",
          bold: true,
          align: "middle",
        },
      },
      duration: 600,
      narration: "1 かける 1 は 1！",
    },

    // ── 合計チェック ──
    {
      action: { type: "move", to: { x: RX, y: 310 } },
      duration: 600,
      narration: "2つの結果を足します。6 + 1 = ?",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "calc-sum-line",
          kind: "line",
          from: { x: RX - 55, y: 280 },
          to: { x: RX + 55, y: 280 },
          color: "#374151",
          width: 1.5,
        },
      },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "calc-sum",
          kind: "text",
          pos: { x: RX, y: 310 },
          content: "6 + 1 = 7",
          size: 22,
          color: "#374151",
          bold: true,
          align: "middle",
        },
      },
      duration: 700,
      narration: "6 + 1 = 7 ！",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "check-label",
          kind: "text",
          pos: { x: RX, y: 345 },
          content: "問題の x の係数は？",
          size: 14,
          color: "#6b7280",
          align: "middle",
        },
      },
      duration: 500,
      narration: "この 7 は、問題の式「2x² + 7x + 3」の x の係数と同じ！",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "check-ok",
          kind: "text",
          pos: { x: RX, y: 375 },
          content: "7 = 7  ✓ 一致！",
          size: 20,
          color: "#16a34a",
          bold: true,
          align: "middle",
        },
      },
      duration: 700,
      narration: "7 と 7 が一致しました！このたすきがけは正解です！",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "check-highlight",
          kind: "highlight",
          center: { x: RX, y: 340 },
          radius: 70,
          color: "#86efac",
        },
      },
      duration: 500,
      narration: "",
    },

    // ── 答えを書く ──
    {
      action: { type: "move", to: { x: W / 2, y: 430 } },
      duration: 700,
      narration: "では答えを書きましょう！",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "answer-box",
          kind: "rect",
          x: 120,
          y: 410,
          w: 460,
          h: 80,
          fill: "#fef9c3",
          stroke: "#f59e0b",
          opacity: 1,
        },
      },
      duration: 400,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "answer-label",
          kind: "text",
          pos: { x: W / 2, y: 435 },
          content: "答え：",
          size: 17,
          color: "#374151",
          align: "middle",
        },
      },
      duration: 300,
      narration: "",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "answer",
          kind: "text",
          pos: { x: W / 2, y: 472 },
          content: "2x² + 7x + 3  =  ( 2x + 1 )( x + 3 )",
          size: 22,
          color: "#1e40af",
          bold: true,
          align: "middle",
        },
      },
      duration: 900,
      narration: "（2x + 1）×（x + 3）！ 左列の 2 と 1 が各カッコの x の係数、右列の 1 と 3 が定数になります。",
    },

    // ── 読み解き ──
    {
      action: { type: "move", to: { x: TL.x - 45, y: TL.y } },
      duration: 600,
      narration: "もう一度確認。左列の上「2」は最初のカッコの x の係数です。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "arrow-tl",
          kind: "text",
          pos: { x: GX1 - 15, y: TL.y },
          content: "→",
          size: 22,
          color: "#1d4ed8",
          align: "middle",
        },
      },
      duration: 400,
      narration: "2 → (2x + □)",
    },
    {
      action: { type: "move", to: { x: TR.x + 45, y: TR.y } },
      duration: 500,
      narration: "右列の上「1」は最初のカッコの定数です。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "arrow-tr",
          kind: "text",
          pos: { x: GX2 + 15, y: TR.y },
          content: "←",
          size: 22,
          color: "#dc2626",
          align: "middle",
        },
      },
      duration: 400,
      narration: "1 → (2x + 1) 完成！",
    },
    {
      action: { type: "move", to: { x: BL.x - 45, y: BL.y } },
      duration: 500,
      narration: "左列の下「1」は2番目のカッコの x の係数。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "arrow-bl",
          kind: "text",
          pos: { x: GX1 - 15, y: BL.y },
          content: "→",
          size: 22,
          color: "#1d4ed8",
          align: "middle",
        },
      },
      duration: 400,
      narration: "1 → (x + □)",
    },
    {
      action: { type: "move", to: { x: BR.x + 45, y: BR.y } },
      duration: 500,
      narration: "右列の下「3」は2番目のカッコの定数です。",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "arrow-br",
          kind: "text",
          pos: { x: GX2 + 15, y: BR.y },
          content: "←",
          size: 22,
          color: "#dc2626",
          align: "middle",
        },
      },
      duration: 400,
      narration: "3 → (x + 3) 完成！",
    },

    // ── まとめ ──
    {
      action: { type: "move", to: { x: W / 2, y: H - 35 } },
      duration: 700,
      narration: "まとめると…",
    },
    {
      action: {
        type: "draw",
        element: {
          id: "final-highlight",
          kind: "highlight",
          center: { x: W / 2, y: 455 },
          radius: 90,
          color: "#fbbf24",
        },
      },
      duration: 500,
      narration: "2x² + 7x + 3 = (2x + 1)(x + 3) です！たすきがけの「たすき」とは、この対角線のことでした。よくできました！",
    },
  ],
};

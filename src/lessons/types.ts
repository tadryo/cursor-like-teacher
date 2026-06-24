export interface Point {
  x: number;
  y: number;
}

export type DrawElement =
  | { id: string; kind: "line"; from: Point; to: Point; color?: string; width?: number }
  | { id: string; kind: "arc"; center: Point; radius: number; startAngle: number; endAngle: number; color?: string; width?: number }
  | { id: string; kind: "circle"; center: Point; radius: number; fill?: string; stroke?: string; width?: number; opacity?: number }
  | { id: string; kind: "rect"; x: number; y: number; w: number; h: number; fill?: string; stroke?: string; opacity?: number }
  | { id: string; kind: "polygon"; points: Point[]; fill?: string; stroke?: string; width?: number; opacity?: number }
  | { id: string; kind: "text"; pos: Point; content: string; size?: number; color?: string; bold?: boolean; align?: "start" | "middle" | "end" }
  | { id: string; kind: "highlight"; center: Point; radius: number; color?: string };

export type StepAction =
  | { type: "move"; to: Point }
  | { type: "draw"; element: DrawElement }
  | { type: "erase"; id: string }
  | { type: "click" }
  | { type: "noop" };

export interface Step {
  action: StepAction;
  duration: number;
  narration: string;
}

export interface Lesson {
  id: string;
  title: string;
  subject: string;
  viewBox: { width: number; height: number };
  steps: Step[];
}

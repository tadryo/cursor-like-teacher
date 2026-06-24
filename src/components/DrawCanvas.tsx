"use client";
import type { CursorPos } from "@/engine/useLessonEngine";
import type { DrawElement } from "@/lessons/types";

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const s = toRad(startDeg);
  const e = toRad(endDeg);
  const x1 = cx + r * Math.cos(s);
  const y1 = cy + r * Math.sin(s);
  const x2 = cx + r * Math.cos(e);
  const y2 = cy + r * Math.sin(e);
  const span = endDeg - startDeg;
  const largeArc = span > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

function RenderElement({ el }: { el: DrawElement }) {
  switch (el.kind) {
    case "line":
      return (
        <line
          x1={el.from.x} y1={el.from.y}
          x2={el.to.x} y2={el.to.y}
          stroke={el.color ?? "#374151"}
          strokeWidth={el.width ?? 2}
          strokeLinecap="round"
        />
      );
    case "arc": {
      const d = arcPath(el.center.x, el.center.y, el.radius, el.startAngle, el.endAngle);
      return <path d={d} fill={el.color ?? "#3b82f6"} opacity={0.7} />;
    }
    case "circle":
      return (
        <circle
          cx={el.center.x} cy={el.center.y} r={el.radius}
          fill={el.fill ?? "none"}
          stroke={el.stroke ?? "#374151"}
          strokeWidth={el.width ?? 2}
          opacity={el.opacity ?? 1}
        />
      );
    case "rect":
      return (
        <rect
          x={el.x} y={el.y} width={el.w} height={el.h}
          fill={el.fill ?? "none"}
          stroke={el.stroke ?? "#374151"}
          strokeWidth={1.5}
          opacity={el.opacity ?? 1}
        />
      );
    case "text":
      return (
        <text
          x={el.pos.x} y={el.pos.y}
          textAnchor={el.align ?? "start"}
          fontSize={el.size ?? 16}
          fill={el.color ?? "#111827"}
          fontWeight={el.bold ? "bold" : "normal"}
          fontFamily="system-ui, sans-serif"
        >
          {el.content}
        </text>
      );
    case "polygon":
      return (
        <polygon
          points={el.points.map(p => `${p.x},${p.y}`).join(" ")}
          fill={el.fill ?? "none"}
          stroke={el.stroke ?? "#374151"}
          strokeWidth={el.width ?? 2}
          opacity={el.opacity ?? 1}
          strokeLinejoin="round"
        />
      );
    case "highlight":
      return (
        <circle
          cx={el.center.x} cy={el.center.y} r={el.radius}
          fill={el.color ?? "#fbbf24"}
          opacity={0.35}
        />
      );
    default:
      return null;
  }
}

interface Props {
  viewBox: { width: number; height: number };
  elements: DrawElement[];
  cursor: CursorPos;
}

export default function DrawCanvas({ viewBox, elements, cursor }: Props) {
  return (
    <svg
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      className="w-full h-full"
      style={{ background: "#fafafa" }}
    >
      {/* grid lines */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width={viewBox.width} height={viewBox.height} fill="url(#grid)" />

      {/* drawn elements */}
      {elements.map((el) => (
        <RenderElement key={el.id} el={el} />
      ))}

      {/* virtual cursor */}
      <g transform={`translate(${cursor.x}, ${cursor.y})`}>
        {/* shadow */}
        <ellipse cx={6} cy={20} rx={8} ry={4} fill="rgba(0,0,0,0.15)" />
        {/* cursor pointer shape */}
        <path
          d="M 0 0 L 0 20 L 5 15 L 9 24 L 12 23 L 8 14 L 14 14 Z"
          fill="white"
          stroke="#1e293b"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

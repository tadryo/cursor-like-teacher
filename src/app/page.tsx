"use client";
import { useState } from "react";
import LessonPlayer from "@/components/LessonPlayer";
import { pythagorean, fractionAdd, tasuki, pythGeneral, pythMusic, pythSports, pythGame } from "@/lessons";
import type { Lesson } from "@/lessons";

const PYTH_SKINS: { lesson: Lesson; icon: string; label: string }[] = [
  { lesson: pythMusic,   icon: "🎵", label: "音楽"     },
  { lesson: pythSports,  icon: "⚽", label: "スポーツ" },
  { lesson: pythGame,    icon: "🎮", label: "ゲーム"   },
  { lesson: pythagorean, icon: "📐", label: "基本"     },
  { lesson: pythGeneral, icon: "✨", label: "発展"     },
];

const OTHER_LESSONS: Lesson[] = [tasuki, fractionAdd];

export default function Home() {
  const [selected, setSelected] = useState<Lesson>(pythMusic);
  const [playerKey, setPlayerKey] = useState(0);

  function selectLesson(lesson: Lesson) {
    setSelected(lesson);
    setPlayerKey((k) => k + 1);
  }

  const isPyth = PYTH_SKINS.some((s) => s.lesson.id === selected.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">算数・数学 カーソル先生</h1>
            <p className="text-xs text-gray-500">仮想カーソルが手順を見せてくれる学習ツール</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-6">

        {/* ── 三平方の定理スキン選択 ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">三平方の定理</span>
            <span className="text-xs text-gray-400">— 好きなテーマで学ぼう</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {PYTH_SKINS.map(({ lesson, icon, label }) => (
              <button
                key={lesson.id}
                onClick={() => selectLesson(lesson)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  selected.id === lesson.id
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
          {isPyth && (
            <p className="mt-2 text-xs text-gray-400">
              同じ数学を違う視点で ─ どのスキンが一番わかりやすい？
            </p>
          )}
        </div>

        {/* ── その他のレッスン ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">その他のレッスン</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {OTHER_LESSONS.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => selectLesson(lesson)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  selected.id === lesson.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {lesson.title}
              </button>
            ))}
          </div>
        </div>

        {/* ── Player ── */}
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">再生中</span>
            <span className="text-sm font-semibold text-gray-700">{selected.title}</span>
            <span className="ml-auto text-xs text-gray-400">{selected.subject}</span>
          </div>
          <LessonPlayer key={playerKey} lesson={selected} />
        </div>

        {/* ── Feature cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🖱️", title: "カーソルが案内", desc: "AIなし・事前定義座標でマウスが自動で動く" },
            { icon: "✏️", title: "リアルタイム描画", desc: "線・円弧・ハイライトをアニメーションで描画" },
            { icon: "🎨", title: "興味適応型スキン", desc: "同じ数学を好きなテーマで学べる" },
          ].map((item) => (
            <div key={item.title} className="bg-blue-50 rounded-2xl p-4 flex flex-col gap-2">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

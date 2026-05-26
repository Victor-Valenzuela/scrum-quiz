import { useState, useEffect } from "preact/hooks";
import Navbar from "./Navbar";

type Lang = "de" | "es" | "en";
type Theme = "dark" | "light";

function t(lang: Lang, texts: { de: string; es: string; en: string }): string {
  return texts[lang];
}

export default function Landing() {
  const [lang, setLang] = useState<Lang>("de");
  const [theme, setTheme] = useState<Theme>("dark");
  const [mode, setMode] = useState<10 | 40>(40);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div class="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 transition-colors">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <div class="flex items-center justify-center px-4 pt-5">
        <div class="text-center max-w-2xl">
          {/* Hero gradient blob */}
          <div class="relative mb-8">
            <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-3xl blur-3xl" />
            <div class="relative">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 mb-6">
                <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span class="text-sm font-medium text-indigo-700 dark:text-indigo-300">EXIN Certified</span>
              </div>
              <h1 class="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                Agile Scrum
                <span class="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent"> Foundation</span>
              </h1>
              <p class="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
                {t(lang, { es: "Examen de practica interactivo", de: "Interaktive Musterpruefung", en: "Interactive practice exam" })}
              </p>
              <p class="text-sm text-zinc-500 dark:text-zinc-500">
                {t(lang, { es: "40 preguntas · Orden aleatorio · Explicaciones detalladas", de: "40 Fragen · Zufaellige Reihenfolge · Detaillierte Erklaerungen", en: "40 questions · Random order · Detailed explanations" })}
              </p>
            </div>
          </div>

          {/* Stats cards */}
          <div class="grid grid-cols-3 gap-3 mb-10 max-w-md mx-auto">
            <div class="bg-white dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-300 dark:border-zinc-700/50 shadow-sm">
              <div class="text-2xl font-bold text-zinc-900 dark:text-white">{mode}</div>
              <div class="text-xs text-zinc-600 dark:text-zinc-400">{t(lang, { es: "Preguntas", de: "Fragen", en: "Questions" })}</div>
            </div>
            <div class="bg-white dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-300 dark:border-zinc-700/50 shadow-sm">
              <div class="text-2xl font-bold text-zinc-900 dark:text-white">65%</div>
              <div class="text-xs text-zinc-600 dark:text-zinc-400">{t(lang, { es: "Para aprobar", de: "Zum Bestehen", en: "To pass" })}</div>
            </div>
            <div class="bg-white dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-300 dark:border-zinc-700/50 shadow-sm">
              <div class="text-2xl font-bold text-zinc-900 dark:text-white">{mode === 40 ? "60'" : "15'"}</div>
              <div class="text-xs text-zinc-600 dark:text-zinc-400">{t(lang, { es: "Minutos", de: "Minuten", en: "Minutes" })}</div>
            </div>
          </div>

          {/* Mode toggle */}
          <div class="flex items-center justify-center gap-3 mb-6">
            <div class="flex items-center bg-zinc-200 dark:bg-zinc-800 rounded-full p-1">
              <button
                onClick={() => setMode(10)}
                class={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === 10
                    ? "bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-300"
                }`}
              >
                ⚡ {t(lang, { es: "Rapido (10)", de: "Schnell (10)", en: "Quick (10)" })}
              </button>
              <button
                onClick={() => setMode(40)}
                class={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === 40
                    ? "bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-300"
                }`}
              >
                📋 {t(lang, { es: "Completo (40)", de: "Vollstaendig (40)", en: "Full (40)" })}
              </button>
            </div>
          </div>

          {/* Start button */}
          <a
            href={`/quiz/${mode}`}
            class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3.5 px-8 rounded-xl text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5"
          >
            {t(lang, { es: "Comenzar Quiz", de: "Quiz starten", en: "Start Quiz" })}
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

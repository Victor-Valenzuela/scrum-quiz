import { useState, useMemo, useEffect } from "preact/hooks";
import { questions, type Question } from "../data/questions";
import Navbar from "./Navbar";

type Lang = "de" | "es" | "en";
type Theme = "dark" | "light";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function t(lang: Lang, texts: { de: string; es: string; en: string }): string {
  return texts[lang];
}

export default function Quiz({ mode }: { mode: 10 | 40 }) {
  const [lang, setLang] = useState<Lang>("de");
  const [theme, setTheme] = useState<Theme>("dark");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const shuffledQuestions = useMemo(() => {
    const shuffledQ = shuffle(questions).slice(0, mode);
    return shuffledQ.map((q) => ({ ...q, answers: shuffle(q.answers) }));
  }, []);

  const current: Question | undefined = shuffledQuestions[currentIndex];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleSelect = (letter: string) => {
    if (submitted) return;
    if (current?.multiSelect) {
      setSelected((prev) =>
        prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
      );
    } else {
      setSelected([letter]);
    }
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    setSubmitted(true);
    const correctLetters = current!.answers.filter((a) => a.correct).map((a) => a.letter);
    const isCorrect =
      selected.length === correctLetters.length &&
      selected.every((s) => correctLetters.includes(s));
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= shuffledQuestions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected([]);
      setSubmitted(false);
    }
  };

  // Results screen
  if (finished) {
    const passed = score >= Math.ceil(mode * 0.65);
    const percentage = Math.round((score / mode) * 100);
    return (
      <div class="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 transition-colors">
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
        <div class="flex items-center justify-center px-4 pt-24 pb-16">
          <div class="text-center max-w-lg">
            <div class={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
              passed ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-red-100 dark:bg-red-900/30"
            }`}>
              {passed ? (
                <svg class="w-12 h-12 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg class="w-12 h-12 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <h2 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              {passed
                ? t(lang, { es: "Aprobado!", de: "Bestanden!", en: "Passed!" })
                : t(lang, { es: "No aprobado", de: "Nicht bestanden", en: "Not passed" })}
            </h2>
            <p class="text-zinc-600 dark:text-zinc-400 mb-6">
              {t(lang, {
                es: `Obtuviste ${score} de ${mode} respuestas correctas (${percentage}%)`,
                de: `Sie haben ${score} von ${mode} Fragen richtig beantwortet (${percentage}%)`,
                en: `You got ${score} out of ${mode} correct answers (${percentage}%)`
              })}
            </p>
            <div class="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3 mb-8">
              <div
                class={`h-3 rounded-full transition-all ${passed ? "bg-emerald-500" : "bg-red-500"}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div class="flex items-center justify-center gap-4">
              <a
                href="/"
                class="inline-flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium py-3 px-6 rounded-xl transition-all"
              >
                {t(lang, { es: "Inicio", de: "Startseite", en: "Home" })}
              </a>
              <a
                href={`/quiz/${mode}`}
                class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {t(lang, { es: "Reiniciar", de: "Neustart", en: "Restart" })}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!current) return null;

  // Quiz screen
  return (
    <div class="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 transition-colors">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

      <div class="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Progress section */}
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {t(lang, { es: "Pregunta", de: "Frage", en: "Question" })} {currentIndex + 1}/{shuffledQuestions.length}
          </span>
          <span class="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
            </svg>
            {score} {t(lang, { es: "correctas", de: "richtig", en: "correct" })}
          </span>
        </div>

        {/* Progress bar */}
        <div class="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 mb-8">
          <div
            class="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question card */}
        <div class="bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 p-6 sm:p-8 shadow-sm">
          <div class="mb-6">
            {current.multiSelect && (
              <span class="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs font-medium text-amber-700 dark:text-amber-400 mb-3">
                {t(lang, { es: "Selecciona 2 respuestas", de: "2 Antworten auswaehlen", en: "Select 2 answers" })}
              </span>
            )}
            <p class="text-lg text-zinc-900 dark:text-zinc-100 leading-relaxed font-medium">
              {current.question[lang]}
            </p>
          </div>

          {/* Answers */}
          <div class="space-y-3">
            {current.answers.map((answer, idx) => {
              const displayLetter = String.fromCharCode(65 + idx);
              const isSelected = selected.includes(answer.letter);
              const isCorrect = answer.correct;

              let classes = "border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10";

              if (submitted) {
                if (isCorrect) {
                  classes = "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20";
                } else if (isSelected && !isCorrect) {
                  classes = "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20";
                } else {
                  classes = "border-zinc-200 dark:border-zinc-700/50 bg-zinc-50/50 dark:bg-zinc-800/30 opacity-60";
                }
              } else if (isSelected) {
                classes = "border-indigo-400 dark:border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 ring-2 ring-indigo-500/20";
              }

              return (
                <div key={answer.letter}>
                  <button
                    onClick={() => handleSelect(answer.letter)}
                    disabled={submitted}
                    class={`w-full text-left p-4 rounded-xl border transition-all ${classes} ${submitted ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div class="flex items-start gap-3">
                      <span class={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-semibold ${
                        submitted && isCorrect
                          ? "bg-emerald-500 text-white"
                          : submitted && isSelected && !isCorrect
                          ? "bg-red-500 text-white"
                          : isSelected
                          ? "bg-indigo-500 text-white"
                          : "bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                      }`}>
                        {displayLetter}
                      </span>
                      <span class="text-zinc-800 dark:text-zinc-200 pt-0.5">{answer.text[lang]}</span>
                    </div>
                  </button>
                  {submitted && (isSelected || isCorrect) && (
                    <div class={`mt-2 ml-10 p-3 rounded-lg text-sm ${
                      isCorrect
                        ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50"
                        : "bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/50"
                    }`}>
                      {answer.explanation[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div class="mt-8 flex justify-end">
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={selected.length === 0}
                class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-300 dark:disabled:bg-zinc-700 disabled:cursor-not-allowed text-white disabled:text-zinc-500 font-medium py-2.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                {t(lang, { es: "Verificar", de: "Pruefen", en: "Check" })}
              </button>
            ) : (
              <button
                onClick={handleNext}
                class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium py-2.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                {currentIndex + 1 >= shuffledQuestions.length
                  ? t(lang, { es: "Ver resultado", de: "Ergebnis anzeigen", en: "See results" })
                  : t(lang, { es: "Siguiente", de: "Weiter", en: "Next" })}
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

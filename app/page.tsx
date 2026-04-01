"use client";

import { mockQuestions } from "@/store/questions";
import { useQuizStore } from "@/store/useQuizStore";
import { useEffect, useState, useCallback } from "react";

export default function QuizApp() {
  const {
    questions,
    activeQuestionIndex,
    userAnswers,
    isQuizFinished,
    isWrongAnswersMode,
    wrongQuestions,
    setQuestions,
    answerQuestion,
    nextQuestion,
    prevQuestion,
    finishQuiz,
    restartQuiz,
    retryWrongAnswers,
    shuffleQuestions,
  } = useQuizStore();

  const [mounted, setMounted] = useState(false);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    setQuestions(mockQuestions);
    setMounted(true);
  }, [setQuestions]);

  const currentQuestionsList = isWrongAnswersMode ? wrongQuestions : questions;
  const currentQuestion = currentQuestionsList[activeQuestionIndex];
  const isLastQuestion =
    activeQuestionIndex === currentQuestionsList.length - 1;
  const hasAnswered = currentQuestion
    ? !!userAnswers[currentQuestion.id]
    : false;

  const totalAnswered = Object.keys(userAnswers).length;
  const correctAnswersCount = questions.filter(
    (q) => userAnswers[q.id] === q.correctAnswer,
  ).length;
  const progressPercentage =
    currentQuestionsList.length > 0
      ? ((activeQuestionIndex + 1) / currentQuestionsList.length) * 100
      : 0;

  const handleFakeAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsEasterEggActive(true);
    }, 2500);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "ö") {
        setIsEasterEggActive((prev) => !prev);
        return;
      }

      if (isEasterEggActive) return;

      if (isQuizFinished || !currentQuestion) return;
      if (e.key === "ArrowRight" && hasAnswered) {
        isLastQuestion ? finishQuiz() : nextQuestion();
      } else if (e.key === "ArrowLeft" && activeQuestionIndex > 0) {
        prevQuestion();
      }
      if (["1", "2", "3", "4", "5"].includes(e.key) && !hasAnswered) {
        const optionIndex = parseInt(e.key) - 1;
        const selectedOption = currentQuestion.options[optionIndex];
        if (selectedOption) answerQuestion(currentQuestion.id, selectedOption);
      }
    },
    [
      isEasterEggActive,
      isQuizFinished,
      currentQuestion,
      hasAnswered,
      isLastQuestion,
      finishQuiz,
      nextQuestion,
      prevQuestion,
      activeQuestionIndex,
      answerQuestion,
    ],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const easterEggOverlay = isEasterEggActive && (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 overflow-hidden backdrop-blur-3xl animate-in fade-in duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15)_0%,transparent_60%)] animate-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
        <h1 className="text-[clamp(1.5rem,4dvh,3rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 mb-[clamp(1rem,3dvh,2rem)] animate-bounce tracking-[0.2em] text-center">
          GİZLİ BÖLÜM BULUNDU!
        </h1>

        <div className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden border-[4px] sm:border-[6px] border-fuchsia-500/50 shadow-[0_0_80px_rgba(217,70,239,0.4)] relative">
          <video
            autoPlay
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/easteregg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none mix-blend-overlay"></div>
        </div>

        {/* === YENİ: MOBİL İÇİN GERİ DÖNÜŞ BUTONU VE AÇIKLAMA === */}
        <div className="mt-[clamp(1.5rem,4dvh,3rem)] flex flex-col items-center gap-4">
          <p className="hidden sm:block text-[clamp(0.8rem,1.8dvh,1rem)] text-cyan-400/80 font-mono tracking-widest animate-pulse text-center">
            Geri dönmek için tekrar [ Ö ] tuşuna bas
          </p>
          <p className="block sm:hidden text-[clamp(0.8rem,1.8dvh,1rem)] text-cyan-400/80 font-mono tracking-widest animate-pulse text-center">
            1 NİSAN ŞAKASI
          </p>
          <button
            onClick={() => setIsEasterEggActive(false)}
            className="px-6 py-3 bg-fuchsia-600/20 hover:bg-fuchsia-600/40 text-fuchsia-300 font-bold tracking-widest uppercase rounded-xl border-2 border-fuchsia-500/50 shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all active:scale-95 flex items-center gap-2 backdrop-blur-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            SİSTEME GERİ DÖN
          </button>
        </div>
      </div>
    </div>
  );

  if (!mounted || questions.length === 0) {
    return (
      <div className="h-[100dvh] w-full flex items-center justify-center bg-[#050505]">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
        </div>
      </div>
    );
  }

  if (isQuizFinished) {
    const currentListWrongCount = currentQuestionsList.filter(
      (q) => userAnswers[q.id] !== q.correctAnswer,
    ).length;
    const currentListCorrectCount =
      currentQuestionsList.length - currentListWrongCount;
    const isPerfect = currentListWrongCount === 0;

    return (
      <div className="h-[100dvh] w-full bg-[#030303] text-slate-200 flex flex-col items-center justify-center p-4 overflow-hidden relative">
        {easterEggOverlay}

        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] opacity-20 blur-[120px] pointer-events-none transition-colors duration-1000 ${isPerfect ? "bg-[radial-gradient(circle,rgba(16,185,129,0.4)_0%,transparent_60%)]" : "bg-[radial-gradient(circle,rgba(244,63,94,0.4)_0%,transparent_60%)]"}`}
        ></div>

        <div className="w-full max-w-md z-10 flex flex-col gap-[clamp(1rem,2dvh,1.5rem)]">
          <div
            className={`w-full aspect-[16/9] rounded-[2rem] overflow-hidden border-4 relative shrink-0 transition-shadow duration-700 ${isPerfect ? "border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.25)]" : "border-rose-500/40 shadow-[0_0_40px_rgba(244,63,94,0.25)]"}`}
          >
            {isPerfect ? (
              <video
                autoPlay
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              >
                <source src="/hiyar.mp4" type="video/mp4" />
              </video>
            ) : (
              <video
                autoPlay
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              >
                <source src="/gulme.mp4" type="video/mp4" />
              </video>
            )}
            <div
              className={`absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none z-10 ${isPerfect ? "bg-emerald-500" : "bg-rose-500"}`}
            ></div>
          </div>

          <div className="text-center space-y-1 shrink-0">
            <h1 className="text-[clamp(2rem,4dvh,2.5rem)] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter leading-tight">
              {isPerfect ? "BRAVO! KUSURSUZ!" : "FULLEYEMEDİN..."}
            </h1>
            <p className="text-[clamp(0.85rem,1.8dvh,1rem)] font-medium text-slate-400">
              {isPerfect
                ? "Hıyar yemeyi hak ettin, Şaban seninle gurur duyuyor!"
                : "Şaban senin bu duruma gülüyor, tekrar denemelisin!"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="bg-white/[0.03] border border-emerald-500/20 rounded-3xl p-[clamp(1rem,2dvh,1.5rem)] text-center backdrop-blur-md">
              <span className="text-[clamp(1.8rem,4dvh,2.25rem)] font-black text-emerald-400 block leading-none mb-1">
                {currentListCorrectCount}
              </span>
              <span className="text-[10px] font-bold text-emerald-500/70 tracking-widest uppercase">
                Doğru
              </span>
            </div>
            <div className="bg-white/[0.03] border border-rose-500/20 rounded-3xl p-[clamp(1rem,2dvh,1.5rem)] text-center backdrop-blur-md">
              <span className="text-[clamp(1.8rem,4dvh,2.25rem)] font-black text-rose-400 block leading-none mb-1">
                {currentListWrongCount}
              </span>
              <span className="text-[10px] font-bold text-rose-500/70 tracking-widest uppercase">
                Yanlış
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(0.5rem,1.2dvh,0.75rem)] shrink-0 mt-2">
            {currentListWrongCount > 0 && (
              <button
                onClick={retryWrongAnswers}
                className="w-full py-[clamp(0.85rem,2.2dvh,1rem)] bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-2xl transition-all active:scale-[0.98] shadow-[0_0_25px_rgba(225,29,72,0.3)] flex items-center justify-center gap-2"
              >
                Sadece Yanlışları Çöz
              </button>
            )}
            <button
              onClick={restartQuiz}
              className="w-full py-[clamp(0.85rem,2.2dvh,1rem)] bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold rounded-2xl border border-white/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Sistemi Sıfırla
            </button>
          </div>
        </div>
      </div>
    );
  }

  const qLen = currentQuestion?.questionText.length || 0;
  let qTextSize =
    "text-[clamp(1.1rem,2.8dvh,1.75rem)] mb-[clamp(1rem,3dvh,2.5rem)]";
  if (qLen > 250) {
    qTextSize =
      "text-[clamp(0.9rem,1.8dvh,1.1rem)] mb-[clamp(0.5rem,1.5dvh,1.5rem)] leading-snug";
  } else if (qLen > 120) {
    qTextSize =
      "text-[clamp(1rem,2.2dvh,1.35rem)] mb-[clamp(0.75rem,2dvh,2rem)] leading-tight";
  }

  return (
    <div className="h-[100dvh] w-full bg-[#050505] text-slate-200 flex flex-col overflow-hidden relative selection:bg-indigo-500/30">
      {easterEggOverlay}

      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div
          className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[40vh] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="w-full max-w-3xl mx-auto px-4 pt-4 sm:pt-6 pb-2 flex items-center justify-between shrink-0 z-10">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border ${isWrongAnswersMode ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"}`}
          >
            {isWrongAnswersMode ? "Hata Modu" : "Aktif Test"}
          </span>

          <button
            onClick={handleFakeAnalyze}
            disabled={isAnalyzing}
            className={`px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border transition-all flex items-center gap-1.5 duration-300 ${
              isAnalyzing
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 cursor-wait animate-pulse"
                : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20 hover:scale-105 active:scale-95"
            }`}
          >
            {isAnalyzing ? (
              <>
                <svg
                  className="w-[14px] h-[14px] animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Analiz...
              </>
            ) : (
              <>
                <svg
                  className="w-[14px] h-[14px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Analiz Et
              </>
            )}
          </button>

          {!isWrongAnswersMode && activeQuestionIndex === 0 && (
            <button
              onClick={shuffleQuestions}
              className="px-2.5 py-1 text-[clamp(10px,1.2dvh,12px)] font-bold tracking-wider uppercase rounded-lg border bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 hover:bg-fuchsia-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 animate-in fade-in slide-in-from-left-2 duration-300"
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Karıştır
            </button>
          )}
        </div>
        <div className="text-[clamp(12px,1.5dvh,14px)] font-semibold text-slate-400">
          <span className="text-white">{activeQuestionIndex + 1}</span> /{" "}
          {currentQuestionsList.length}
        </div>
      </div>

      <div className="flex-1 min-h-0 w-full max-w-3xl mx-auto flex flex-col px-4 pb-4 sm:px-6 z-10">
        <div className="flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-[clamp(1rem,3dvh,2.5rem)] flex flex-col shadow-2xl relative overflow-hidden">
          <div className="flex-1 flex flex-col justify-center overflow-y-auto overscroll-contain pr-1 -mr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
            {currentQuestion && (
              <>
                <div className="shrink-0">
                  <h2
                    className={`font-semibold text-slate-100 tracking-tight transition-all ${qTextSize}`}
                  >
                    {currentQuestion.questionText}
                  </h2>
                </div>
                <div className="flex flex-col gap-[clamp(0.4rem,1.2dvh,0.8rem)]">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected =
                      userAnswers[currentQuestion.id] === option;
                    const isCorrectAnswer =
                      option === currentQuestion.correctAnswer;
                    let baseStyle =
                      "border-white/5 bg-white/[0.03] text-slate-300 hover:border-indigo-500/30 hover:bg-indigo-500/10";
                    let icon = null;

                    if (hasAnswered) {
                      if (isCorrectAnswer) {
                        baseStyle =
                          "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 z-10 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.15)]";
                        icon = (
                          <svg
                            className="w-[clamp(1.2rem,2.5dvh,1.5rem)] h-[clamp(1.2rem,2.5dvh,1.5rem)] text-emerald-400 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        );
                      } else if (isSelected && !isCorrectAnswer) {
                        baseStyle =
                          "border-rose-500/50 bg-rose-500/10 text-rose-300 opacity-90";
                        icon = (
                          <svg
                            className="w-[clamp(1.2rem,2.5dvh,1.5rem)] h-[clamp(1.2rem,2.5dvh,1.5rem)] text-rose-400 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        );
                      } else {
                        baseStyle =
                          "border-transparent bg-white/[0.01] text-slate-600 opacity-30 grayscale";
                      }
                    }

                    const optLen = option.length;
                    let optTextSize =
                      "text-[clamp(0.85rem,2.2dvh,1.1rem)] py-[clamp(0.75rem,2dvh,1.25rem)]";
                    if (optLen > 80) {
                      optTextSize =
                        "text-[clamp(0.75rem,1.6dvh,0.9rem)] py-[clamp(0.5rem,1.5dvh,1rem)] leading-snug";
                    } else if (optLen > 40) {
                      optTextSize =
                        "text-[clamp(0.8rem,1.9dvh,1rem)] py-[clamp(0.6rem,1.8dvh,1.1rem)] leading-snug";
                    }

                    return (
                      <button
                        key={index}
                        disabled={hasAnswered}
                        onClick={() =>
                          answerQuestion(currentQuestion.id, option)
                        }
                        className={`group w-full flex items-center justify-between px-[clamp(0.75rem,2dvh,1.25rem)] rounded-[1rem] sm:rounded-[1.25rem] border-2 transition-all duration-300 outline-none text-left shrink-0 ${baseStyle} ${!hasAnswered && "active:scale-[0.98]"}`}
                      >
                        <span
                          className={`font-medium pr-4 break-words ${optTextSize}`}
                        >
                          {option}
                        </span>
                        {icon && (
                          <span className="animate-in zoom-in duration-300 shrink-0 pl-2">
                            {icon}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="shrink-0 pt-4 pb-2 flex items-center justify-between gap-4">
          <button
            onClick={prevQuestion}
            disabled={activeQuestionIndex === 0}
            className="w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] flex items-center justify-center shrink-0 bg-white/[0.05] rounded-full text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-20 transition-all border border-white/5 active:scale-95"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {isLastQuestion ? (
            <button
              onClick={finishQuiz}
              disabled={!hasAnswered}
              className="flex-1 h-[3.5rem] sm:h-[4rem] flex items-center justify-center bg-indigo-600 text-white text-[clamp(14px,2dvh,16px)] font-bold rounded-full hover:bg-indigo-500 disabled:opacity-20 transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/20 tracking-wide"
            >
              TARAMAYI BİTİR
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!hasAnswered}
              className="flex-1 h-[3.5rem] sm:h-[4rem] flex items-center justify-center gap-2 bg-white text-black text-[clamp(14px,2dvh,16px)] font-bold rounded-full hover:bg-slate-200 disabled:bg-white/10 disabled:text-white/30 transition-all active:scale-[0.98] tracking-wide"
            >
              SONRAKİ
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

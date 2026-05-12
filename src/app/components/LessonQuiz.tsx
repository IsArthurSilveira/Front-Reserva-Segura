import { ArrowLeft, Heart, Clock, CheckCircle2, XCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface LessonQuizProps {
  onBack: () => void;
  onComplete: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function LessonQuiz({ onBack, onComplete }: LessonQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(20);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Qual o principal objetivo da reserva de emergência?",
      options: [
        "Investir em ações de alto risco",
        "Cobrir despesas imprevistas",
        "Comprar bens de luxo",
        "Viajar nas férias"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Quantos meses de despesas deve ter uma reserva de emergência?",
      options: [
        "1 a 2 meses",
        "3 a 6 meses",
        "12 meses",
        "Não é necessário"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Qual é a melhor opção para investir a reserva de emergência?",
      options: [
        "Ações de empresas",
        "Criptomoedas",
        "Tesouro Selic ou CDB com liquidez diária",
        "Imóveis"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Quando usar a reserva de emergência?",
      options: [
        "Para compras no Black Friday",
        "Apenas em situações imprevistas e urgentes",
        "Para investir em oportunidades",
        "Sempre que quiser"
      ],
      correctAnswer: 1
    }
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleTimeout();
    }
  }, [timeLeft, showResult]);

  const handleTimeout = () => {
    setLives(lives - 1);
    if (lives - 1 <= 0) {
      alert("Você perdeu todas as vidas! Tente novamente.");
      onBack();
    } else {
      nextQuestion();
    }
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === currentQ.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (!correct) {
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        setTimeout(() => {
          alert("Você perdeu todas as vidas! Tente novamente.");
          onBack();
        }, 1500);
      }
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1 && (correct || lives > 1)) {
        nextQuestion();
      } else if (currentQuestion === questions.length - 1 && correct) {
        onComplete();
      }
    }, 1500);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(20);
  };

  return (
    <div className="h-full overflow-auto bg-[#f3f4f6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#88a983] to-[#3fa8a2] px-4 py-4 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-lg font-bold text-white">Avaliação Final</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-gray-200">
        {/* Lives */}
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className={`w-7 h-7 ${i < lives ? "text-red-500 fill-red-500" : "text-gray-300"}`}
            />
          ))}
        </div>

        {/* Timer */}
        <div className="bg-white/80 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
          <Clock className="w-5 h-5 text-[#618c78]" />
          <span className="text-base font-bold text-[#101828]">{timeLeft}s</span>
        </div>
      </div>

      <div className="p-4 md:p-8 max-w-2xl mx-auto">
        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Progress */}
          <div className="mb-4">
            <p className="text-sm text-[#6a7282] mb-2">Questão {currentQuestion + 1} de {questions.length}</p>
            <div className="w-full h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#88a983] to-[#3fa8a2] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-xl font-bold text-[#101828] mb-6">{currentQ.question}</h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQ.correctAnswer;
              const shouldShowCorrect = showResult && isCorrectAnswer;
              const shouldShowWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => !showResult && setSelectedAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center gap-3 ${
                    shouldShowCorrect
                      ? "border-green-500 bg-green-50"
                      : shouldShowWrong
                      ? "border-red-500 bg-red-50"
                      : isSelected
                      ? "border-[#618c78] bg-[#e0f2e9]"
                      : "border-[#e5e7eb] hover:border-[#618c78] hover:bg-gray-50"
                  } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      shouldShowCorrect
                        ? "border-green-500 bg-green-500"
                        : shouldShowWrong
                        ? "border-red-500 bg-red-500"
                        : isSelected
                        ? "border-[#618c78] bg-[#618c78]"
                        : "border-[#d1d5dc]"
                    }`}
                  >
                    {shouldShowCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                    {shouldShowWrong && <XCircle className="w-4 h-4 text-white" />}
                    {isSelected && !showResult && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    shouldShowCorrect ? "text-green-700" :
                    shouldShowWrong ? "text-red-700" :
                    "text-[#101828]"
                  }`}>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={selectedAnswer === null || showResult}
            className={`w-full py-4 rounded-2xl font-bold text-base transition-all ${
              selectedAnswer !== null && !showResult
                ? "bg-gradient-to-r from-[#88a983] to-[#3fa8a2] text-white shadow-lg hover:shadow-xl"
                : "bg-[#d1d5dc] text-[#6a7282] cursor-not-allowed"
            }`}
          >
            Confirmar Resposta
          </button>
        </div>

        {/* Result Feedback */}
        {showResult && (
          <div className={`mt-4 p-4 rounded-2xl ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>
            <p className={`text-center font-semibold ${isCorrect ? "text-green-700" : "text-red-700"}`}>
              {isCorrect ? "🎉 Correto! Parabéns!" : "❌ Resposta incorreta. Continue tentando!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

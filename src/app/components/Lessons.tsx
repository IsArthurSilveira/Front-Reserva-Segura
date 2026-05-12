import { BookOpen, Play, Shield, BarChart3, PiggyBank, TrendingUp } from "lucide-react";
import { useState } from "react";
import LessonsList from "./LessonsList";
import LessonDetail from "./LessonDetail";
import LessonQuiz from "./LessonQuiz";

interface LessonsProps {
  onBack?: () => void;
}

type LessonView = "home" | "list" | "detail" | "quiz" | "complete";

export default function Lessons({ onBack }: LessonsProps) {
  const [currentView, setCurrentView] = useState<LessonView>("home");
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const featuredLessons = [
    {
      id: "reserva-emergencia",
      title: "Reserva de Emergência",
      description: "Aprenda a criar uma reserva para imprevistos",
      icon: Shield,
      color: "bg-[#618c78]",
      progress: 65
    },
    {
      id: "planejamento-orcamentario",
      title: "Planejamento Orçamentário",
      description: "Organize suas finanças mensais",
      icon: BarChart3,
      color: "bg-[#3fa8a2]",
      progress: 0
    },
    {
      id: "nocoes-investimento",
      title: "Noções de Investimento",
      description: "Introdução ao mundo dos investimentos",
      icon: TrendingUp,
      color: "bg-[#88a983]",
      progress: 0
    }
  ];

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
    setCurrentView("detail");
  };

  const handleCompleteQuiz = () => {
    setCurrentView("complete");
    setTimeout(() => {
      setCurrentView("home");
      setSelectedLesson(null);
    }, 3000);
  };

  if (currentView === "list") {
    return (
      <LessonsList
        onBack={() => setCurrentView("home")}
        onSelectLesson={handleSelectLesson}
      />
    );
  }

  if (currentView === "detail" && selectedLesson) {
    return (
      <LessonDetail
        lessonId={selectedLesson}
        onBack={() => setCurrentView("list")}
        onStartQuiz={() => setCurrentView("quiz")}
      />
    );
  }

  if (currentView === "quiz") {
    return (
      <LessonQuiz
        onBack={() => setCurrentView("detail")}
        onComplete={handleCompleteQuiz}
      />
    );
  }

  if (currentView === "complete") {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-[#88a983] to-[#3fa8a2] p-8">
        <div className="text-center">
          <div className="text-8xl mb-4">🎉</div>
          <h1 className="text-4xl font-bold text-white mb-3">Parabéns!</h1>
          <p className="text-xl text-white/90 mb-2">Você completou a lição!</p>
          <p className="text-lg text-white/80">+300 XP conquistados</p>
        </div>
      </div>
    );
  }

  // Home View
  return (
    <div className="h-full overflow-auto bg-[#f9fafb]">
      {/* Header - Mobile */}
      <div className="md:hidden px-4 py-6">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-2xl font-bold text-[#101828]">Lições</h1>
          <button className="px-4 py-2 bg-[#618c78] text-white rounded-full text-sm font-semibold">
            Ir para lista
          </button>
        </div>
        <p className="text-sm text-[#6a7282]">Continue aprendendo sobre educação financeira</p>
      </div>

      {/* Header - Desktop */}
      <div className="hidden md:block px-8 py-8">
        <h1 className="text-4xl font-bold text-[#101828] mb-2">Trilhas de Aprendizado</h1>
        <p className="text-lg text-[#6a7282]">Desenvolva suas habilidades financeiras com nossos cursos</p>
      </div>

      <div className="px-4 md:px-8 pb-20 md:pb-8">
        {/* Featured Banner */}
        <div
          className="rounded-3xl p-6 md:p-8 mb-6 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgb(97, 140, 120) 0%, rgb(63, 168, 162) 100%)" }}
        >
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Encontre uma lição que<br />você quer aprender
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-4">
              Aprenda no seu ritmo com vídeos curtos e práticos
            </p>
            <button
              onClick={() => setCurrentView("list")}
              className="bg-white text-[#618c78] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition-shadow"
            >
              Começar Agora
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20">
            <BookOpen className="w-32 h-32 md:w-40 md:h-40 text-white" />
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#101828]">Todas as Lições 🎓</h2>
          <button
            onClick={() => setCurrentView("list")}
            className="text-sm font-semibold text-[#618c78] hover:underline"
          >
            + Veja todas as lições
          </button>
        </div>

        {/* Featured Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Card Header */}
              <div className={`${lesson.color} p-6 relative`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <lesson.icon className="w-6 h-6 text-white" />
                  </div>
                  {lesson.progress > 0 && (
                    <span className="px-3 py-1 bg-white/90 text-[#618c78] text-xs font-bold rounded-full">
                      {lesson.progress}%
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{lesson.title}</h3>
                <p className="text-sm text-white/80 mb-4">{lesson.description}</p>

                {/* Progress Bar */}
                {lesson.progress > 0 && (
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${lesson.progress}%` }}
                    />
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="p-4">
                <button
                  onClick={() => handleSelectLesson(lesson.id)}
                  className="w-full bg-[#618c78] text-white py-3 rounded-2xl font-semibold text-sm hover:bg-[#4a7862] transition-colors flex items-center justify-center gap-2"
                >
                  {lesson.progress > 0 ? (
                    <>
                      <Play className="w-4 h-4" fill="white" />
                      <span>Continuar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" fill="white" />
                      <span>Começar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-[#f0f9ff] to-[#e0f2e9] rounded-3xl p-6 border border-[#618c78]/20">
          <h3 className="text-lg font-bold text-[#101828] mb-2 flex items-center gap-2">
            💡 Dica de Estudo
          </h3>
          <p className="text-sm text-[#4a5565]">
            Dedique pelo menos 15 minutos por dia para seus estudos. A consistência é mais importante que a quantidade!
          </p>
        </div>
      </div>
    </div>
  );
}

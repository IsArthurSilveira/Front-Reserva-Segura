import { ArrowLeft, Shield, BarChart3, PiggyBank, TrendingUp, Play } from "lucide-react";
import { useState } from "react";

interface LessonsListProps {
  onBack: () => void;
  onSelectLesson: (lessonId: string) => void;
}

export default function LessonsList({ onBack, onSelectLesson }: LessonsListProps) {
  const [activeFilter, setActiveFilter] = useState("todas");

  const lessons = [
    {
      id: "reserva-emergencia",
      title: "Reserva de Emergência",
      icon: Shield,
      modules: 6,
      duration: 45,
      description: "Aprenda a criar e manter uma reserva financeira para imprevistos",
      xp: 300,
      level: "Básico",
      color: "bg-[#618c78]"
    },
    {
      id: "planejamento-orcamentario",
      title: "Planejamento Orçamentário",
      icon: BarChart3,
      modules: 8,
      duration: 60,
      description: "Domine técnicas para organizar suas finanças mensais",
      xp: 400,
      level: "Básico",
      color: "bg-[#3fa8a2]"
    },
    {
      id: "como-economizar",
      title: "Como Economizar Dinheiro",
      icon: PiggyBank,
      modules: 5,
      duration: 30,
      description: "Estratégias práticas para guardar dinheiro todo mês",
      xp: 250,
      level: "Básico",
      color: "bg-[#88a983]"
    },
    {
      id: "nocoes-investimento",
      title: "Noções de Investimento",
      icon: TrendingUp,
      modules: 10,
      duration: 90,
      description: "Introdução ao mundo dos investimentos e como começar",
      xp: 500,
      level: "Intermediário",
      color: "bg-[#5bb49b]"
    }
  ];

  return (
    <div className="h-full overflow-auto bg-white">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <h1 className="text-xl font-bold text-[#101828]">Lista de Lições</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block px-8 py-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-[#101828]" />
          </button>
          <h1 className="text-3xl font-bold text-[#101828]">Trilhas de Aprendizado</h1>
        </div>
      </div>

      <div className="p-4 md:p-8">
        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {["Todas", "Básico", "Intermediário", "Avançado"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeFilter === filter.toLowerCase()
                  ? "bg-[#618c78] text-white"
                  : "bg-white text-[#6a7282] border border-gray-200 hover:border-[#618c78]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-[#101828] mb-4">Fundamentos Financeiros</h2>

        {/* Lessons Grid */}
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`${lesson.color} rounded-2xl p-4 flex items-center justify-center shrink-0`}>
                  <lesson.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[#101828]">{lesson.title}</h3>
                    <span className="px-3 py-1 bg-[#e0f2e9] text-[#618c78] text-xs font-semibold rounded-full whitespace-nowrap">
                      {lesson.level}
                    </span>
                  </div>

                  <p className="text-sm text-[#6a7282] mb-3">
                    {lesson.modules} módulos • {lesson.duration} min
                  </p>

                  <p className="text-sm text-[#4a5565] mb-4">{lesson.description}</p>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#5bb49b]">💎</span>
                      <span className="font-semibold text-[#618c78]">+{lesson.xp} XP</span>
                    </div>
                    <button
                      onClick={() => onSelectLesson(lesson.id)}
                      className="px-6 py-2 bg-[#618c78] text-white rounded-full font-semibold text-sm hover:bg-[#4a7862] transition-colors"
                    >
                      Começar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investments Section */}
        <h2 className="text-2xl font-bold text-[#101828] mt-8 mb-4">Investimentos</h2>
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">Conclua os fundamentos básicos para desbloquear</p>
        </div>
      </div>
    </div>
  );
}

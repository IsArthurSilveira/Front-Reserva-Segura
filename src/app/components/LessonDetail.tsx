import { ArrowLeft, Play, Volume2, Settings, CheckCircle2, Trophy } from "lucide-react";
import { useState } from "react";

interface LessonDetailProps {
  lessonId: string;
  onBack: () => void;
  onStartQuiz: () => void;
}

export default function LessonDetail({ lessonId, onBack, onStartQuiz }: LessonDetailProps) {
  const [activeTab, setActiveTab] = useState<"videos" | "description">("videos");
  const [currentVideo, setCurrentVideo] = useState(0);

  const lessonData = {
    "reserva-emergencia": {
      title: "Reserva de Emergência",
      videos: [
        { id: 1, title: "Introdução", duration: "06:25 / 17:41", completed: true },
        { id: 2, title: "Por que ter uma reserva?", duration: "10:00 / 10:20", completed: true },
        { id: 3, title: "Quanto guardar mensalmente", duration: "10:00 / 10:20", completed: false },
        { id: 4, title: "Onde investir sua reserva", duration: "15:20 / 15:20", completed: false }
      ]
    }
  };

  const lesson = lessonData[lessonId as keyof typeof lessonData] || lessonData["reserva-emergencia"];

  return (
    <div className="h-full overflow-auto bg-[#f9fafb]">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <h1 className="text-lg font-bold text-[#101828]">{lesson.title}</h1>
        </div>
      </div>

      <div className="p-4 md:p-8 max-w-4xl mx-auto">
        {/* Video Player */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
          {/* Video Area */}
          <div className="relative aspect-video" style={{ background: "linear-gradient(161deg, rgb(136, 169, 131) 8%, rgb(63, 168, 162) 92%)" }}>
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 314 194" fill="none">
                <path d="M0 0h314v194H0z" fill="white" />
              </svg>
            </div>

            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all">
              <Play className="w-8 h-8 text-[#618c78] ml-1" fill="currentColor" />
            </button>
          </div>

          {/* Video Controls */}
          <div className="bg-[#618c78] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-white/10 rounded-lg">
                <Play className="w-5 h-5 text-white" fill="white" />
              </button>
              <span className="text-sm font-medium text-white">06:25 / 17:45</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg">
                <Volume2 className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg">
                <Settings className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex-1 py-3 px-4 rounded-full font-semibold text-sm transition-all ${
              activeTab === "videos"
                ? "bg-gradient-to-r from-[#86a783] to-[#88a983] text-white shadow-lg"
                : "bg-white text-[#6a7282] shadow-sm hover:shadow"
            }`}
          >
            Lista de Vídeos
          </button>
          <button
            onClick={() => setActiveTab("description")}
            className={`flex-1 py-3 px-4 rounded-full font-semibold text-sm transition-all ${
              activeTab === "description"
                ? "bg-gradient-to-r from-[#86a783] to-[#88a983] text-white shadow-lg"
                : "bg-white text-[#6a7282] shadow-sm hover:shadow"
            }`}
          >
            Descrição
          </button>
        </div>

        {/* Video List */}
        {activeTab === "videos" && (
          <div className="space-y-3 mb-6">
            {lesson.videos.map((video, index) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 flex items-center gap-4"
              >
                {/* Icon or Number */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    video.completed
                      ? "bg-gradient-to-br from-[#88a983] to-[#3fa8a2]"
                      : "bg-[#f3f4f6]"
                  }`}
                >
                  {video.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-sm font-semibold text-[#4a5565]">{video.id}</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#101828] mb-1">{video.title}</h3>
                  <p className="text-xs text-[#6a7282]">{video.duration}</p>
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setCurrentVideo(index)}
                  className="w-10 h-10 bg-gradient-to-br from-[#7bb1f1] to-[#5a9de5] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                >
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Description Tab */}
        {activeTab === "description" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-[#101828] mb-3">Sobre esta lição</h3>
            <p className="text-[#4a5565] mb-4">
              Aprenda a criar e manter uma reserva de emergência eficiente. Nesta lição, você vai entender
              a importância de ter um fundo para imprevistos, quanto guardar mensalmente e onde investir
              esse dinheiro para mantê-lo seguro e acessível.
            </p>
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-[#101828] mb-2">O que você vai aprender:</h4>
              <ul className="space-y-2 text-sm text-[#4a5565]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#618c78] mt-0.5 shrink-0" />
                  <span>Como calcular o valor ideal para sua reserva de emergência</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#618c78] mt-0.5 shrink-0" />
                  <span>Estratégias para poupar mensalmente de forma consistente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#618c78] mt-0.5 shrink-0" />
                  <span>Melhores opções de investimento de baixo risco</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Start Quiz Button */}
        <button
          onClick={onStartQuiz}
          className="w-full bg-gradient-to-r from-[#c18c00] to-[#f1dd7b] text-white rounded-2xl py-4 flex items-center justify-center gap-3 font-bold shadow-lg hover:shadow-xl transition-all"
        >
          <Trophy className="w-7 h-7" />
          <span>Iniciar Avaliação</span>
        </button>
      </div>
    </div>
  );
}

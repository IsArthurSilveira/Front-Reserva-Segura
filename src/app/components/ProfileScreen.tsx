import { X, Settings, UserPlus, QrCode, Flame, Flag, Gem, Zap, Lock, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import SettingsMenu from "./SettingsMenu";

interface ProfileScreenProps {
  onClose: () => void;
}

export default function ProfileScreen({ onClose }: ProfileScreenProps) {
  const [scrollY, setScrollY] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollY(scrollRef.current.scrollTop);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const showBadges = scrollY > 100;

  const badges2026 = [
    { id: 1, name: "Janeiro", emoji: "🎅", unlocked: true },
    { id: 2, name: "Fevereiro", emoji: "🦖", unlocked: true, special: true },
    { id: 3, name: "Março", emoji: "🦁", unlocked: true },
    { id: 4, name: "Abril", emoji: "🐰", unlocked: false },
    { id: 5, name: "Maio", emoji: "🌸", unlocked: false },
    { id: 6, name: "Junho", emoji: "☀️", unlocked: false },
    { id: 7, name: "Julho", emoji: "🏖️", unlocked: false },
    { id: 8, name: "Agosto", emoji: "🌻", unlocked: false },
    { id: 9, name: "Setembro", emoji: "🍂", unlocked: false },
    { id: 10, name: "Outubro", emoji: "🎃", unlocked: false },
    { id: 11, name: "Novembro", emoji: "🦃", unlocked: false },
    { id: 12, name: "Dezembro", emoji: "🎄", unlocked: false }
  ];

  const badges2025 = [
    { id: 1, name: "Iniciante", emoji: "🎯", unlocked: true, special: true },
    { id: 2, name: "Economizador", emoji: "🦝", unlocked: true },
    { id: 3, name: "Investidor", emoji: "🦦", unlocked: true }
  ];

  if (showSettings) {
    return <SettingsMenu onClose={() => setShowSettings(false)} />;
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden">
      <div ref={scrollRef} className="h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-b from-[#e9d5ff] to-[#e9d5ff]/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-6 h-6 text-[#101828]" />
            </button>
            <h1 className="text-lg font-bold text-[#101828]">João Silva</h1>
            <button onClick={() => setShowSettings(true)} className="p-2 hover:bg-white/20 rounded-lg">
              <Settings className="w-6 h-6 text-[#101828]" />
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-gradient-to-b from-[#e9d5ff] to-white px-4 pb-6">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#d8b4fe] to-[#c084fc] flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-7xl">👤</div>
            </div>
          </div>

          {/* Username & Join Date */}
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-[#6a7282] uppercase tracking-wide">
              @JOAOSILVA7 • AQUI DESDE 2025
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl mb-1">🇧🇷</div>
              <p className="text-2xl font-bold text-[#101828]">1</p>
              <p className="text-sm text-[#6a7282]">Cursos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#101828]">1</p>
              <p className="text-sm text-[#6a7282]">Segue</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#101828]">3</p>
              <p className="text-sm text-[#6a7282]">Seguidores</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-white border-2 border-gray-300 text-[#101828] py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50">
              <UserPlus className="w-5 h-5" />
              ADICIONAR AMIGOS
            </button>
            <button className="bg-white border-2 border-gray-300 p-3 rounded-2xl hover:bg-gray-50">
              <QrCode className="w-6 h-6 text-[#101828]" />
            </button>
          </div>

          {/* Complete Profile Card */}
          <div className="bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-3xl p-5 mb-6 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#101828] mb-1">
                  Termine o seu perfil!
                </h3>
                <p className="text-sm text-[#4a5565] mb-4">FALTA 1 PASSO</p>
                <button className="bg-[#3b82f6] text-white py-3 px-6 rounded-2xl font-bold hover:bg-[#2563eb] transition-colors">
                  COMPLETAR PERFIL
                </button>
              </div>
              <div className="text-6xl ml-2">🦖</div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-[#9ca3af] uppercase tracking-wide mb-4">
              VISÃO GERAL
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="text-xl font-bold text-[#101828]">340 dias</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Flag className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-xl font-bold text-[#101828]">13</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Gem className="w-6 h-6 text-cyan-500" />
                <div>
                  <p className="text-xl font-bold text-[#101828]">Safira</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                <div>
                  <p className="text-xl font-bold text-[#101828]">9351 XP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {!showBadges && (
            <div className="flex justify-center py-4 animate-bounce">
              <div className="flex flex-col items-center gap-1 text-[#6a7282]">
                <ChevronDown className="w-6 h-6" />
                <p className="text-xs font-semibold">Arraste para ver medalhas</p>
              </div>
            </div>
          )}
        </div>

        {/* Badges Section */}
        <div className="px-4 pb-20">
          {/* 2026 Badges */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#101828] mb-4">Medalhas de 2026</h3>
            <div className="grid grid-cols-3 gap-4">
              {badges2026.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-2 transition-all ${
                      badge.unlocked
                        ? badge.special
                          ? "bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg scale-110"
                          : "bg-gray-100"
                        : "bg-gray-200 opacity-50"
                    }`}
                  >
                    {badge.unlocked ? (
                      badge.emoji
                    ) : (
                      <Lock className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <p className="text-xs text-center text-[#6a7282] font-medium">
                    {badge.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2025 Badges */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#101828] mb-4">Medalhas de 2025</h3>
            <div className="grid grid-cols-3 gap-4">
              {badges2025.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-2 ${
                      badge.special
                        ? "bg-gradient-to-br from-pink-300 to-pink-500 shadow-lg scale-110"
                        : "bg-gray-100"
                    }`}
                  >
                    {badge.emoji}
                  </div>
                  <p className="text-xs text-center text-[#6a7282] font-medium">
                    {badge.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="bg-gradient-to-r from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-6 border-2 border-[#86efac]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-[#101828]">Conquistas</h3>
              <span className="text-3xl">🏆</span>
            </div>
            <p className="text-[#4a5565] mb-4">
              Você já conquistou <span className="font-bold text-[#16a34a]">6 medalhas</span> de um total de 15!
            </p>
            <div className="w-full h-3 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4ade80] to-[#22c55e] rounded-full"
                style={{ width: "40%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

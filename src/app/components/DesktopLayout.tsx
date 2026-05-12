import { Home, Trophy, Gift, Target, Store, Flame } from "lucide-react";
import { ReactNode, useState } from "react";
import ProfileScreen from "./ProfileScreen";
import { CoinIcon, XPIcon } from "./icons/GameIcons";

interface DesktopLayoutProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  children: ReactNode;
}

export default function DesktopLayout({ currentTab, onTabChange, children }: DesktopLayoutProps) {
  const [showProfile, setShowProfile] = useState(false);
  const totalSaved = 26650;
  const monthlyGoal = 2800;

  return (
    <div className="hidden md:flex h-screen flex-col bg-[#f8f9fb]">
      {/* Profile Screen Overlay */}
      {showProfile && <ProfileScreen onClose={() => setShowProfile(false)} />}

      {/* Desktop Header */}
      <header className="bg-white border-b border-[#eaecf0] px-10 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-2xl"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(97, 140, 120) 0%, rgb(63, 168, 162) 100%)" }}
            >
              🦖
            </div>
            <h1 className="text-xl font-bold text-[#101828] tracking-tight">Reserva Segura</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onTabChange("inicio")}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors ${
                currentTab === "inicio"
                  ? "bg-white shadow-sm text-[#6a7282]"
                  : "text-[#6a7282] hover:bg-gray-50"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onTabChange("ligas")}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors ${
                currentTab === "ligas"
                  ? "bg-[#f0f4f2] text-[#618c78]"
                  : "text-[#6a7282] hover:bg-gray-50"
              }`}
            >
              Ligas
            </button>
            <button
              onClick={() => onTabChange("licoes")}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors ${
                currentTab === "licoes"
                  ? "bg-[#f0f4f2] text-[#618c78]"
                  : "text-[#6a7282] hover:bg-gray-50"
              }`}
            >
              Lições
            </button>
            <button
              onClick={() => onTabChange("caixinhas")}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors ${
                currentTab === "caixinhas"
                  ? "bg-[#f0f4f2] text-[#618c78]"
                  : "text-[#6a7282] hover:bg-gray-50"
              }`}
            >
              Caixinhas
            </button>
            <button
              onClick={() => onTabChange("loja")}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors ${
                currentTab === "loja"
                  ? "bg-[#f0f4f2] text-[#618c78]"
                  : "text-[#6a7282] hover:bg-gray-50"
              }`}
            >
              Loja
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <div className="bg-[#618c78] rounded-full px-4 py-2 flex items-center gap-2">
              <CoinIcon size={20} />
              <span className="text-sm font-bold text-white">1850</span>
            </div>
            <button
              onClick={() => setShowProfile(true)}
              className="relative hover:opacity-80 transition-opacity"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold border-2 border-white shadow-md"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 50%, rgb(63, 168, 162) 100%)" }}
              >
                JS
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#618c78] rounded-full flex items-center justify-center text-white text-xs font-bold border border-white">
                12
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-white border-r border-[#eaecf0] w-80 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Profile Card */}
          <button
            onClick={() => setShowProfile(true)}
            className="w-full border border-[#eaecf0] rounded-2xl shadow-sm overflow-hidden mb-5 hover:shadow-md transition-shadow text-left"
          >
            <div
              className="h-20"
              style={{ backgroundImage: "linear-gradient(162.446deg, rgb(97, 140, 120) 0%, rgb(63, 168, 162) 100%)" }}
            />
            <div className="bg-white px-5 pb-5">
              <div className="relative -mt-8 mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl border-4 border-white shadow-lg"
                  style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 50%, rgb(63, 168, 162) 100%)" }}
                >
                  JS
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#618c78] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                  12
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#101828] mb-1">João Silva</h3>
              <p className="text-sm text-[#6a7282] mb-4">Aspirante Nível 08</p>

              {/* XP Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <XPIcon size={16} />
                    <span className="font-semibold text-[#4a5565]">2450 / 3000 XP</span>
                  </div>
                  <span className="font-bold text-[#618c78]">81%</span>
                </div>
                <div className="w-full h-2.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#86a783] to-[#5bb49b] rounded-full" style={{ width: "81%" }} />
                </div>
              </div>
            </div>
          </button>

          {/* Stats Label */}
          <h4 className="text-xs font-bold text-[#101828] uppercase tracking-wide opacity-50 mb-4">
            Estatísticas
          </h4>

          {/* Streak Card */}
          <div
            className="rounded-2xl p-5 mb-4"
            style={{ backgroundImage: "linear-gradient(170.174deg, rgb(97, 140, 120) 8.5335%, rgb(123, 241, 168) 91.467%)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-white/85 mb-1">Sequência atual</p>
                <p className="text-2xl font-bold text-white">7 dias</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/70 mb-1">Recorde</p>
                <p className="text-base font-bold text-white">14 dias</p>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div
            className="rounded-2xl p-5 mb-5"
            style={{ backgroundImage: "linear-gradient(171.743deg, rgb(193, 140, 0) 25.12%, rgb(241, 221, 123) 91.467%)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-white/85 mb-1">Conquistas</p>
                <p className="text-2xl font-bold text-white">23</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/70 mb-1">Próxima</p>
                <p className="text-base font-bold text-white">#25</p>
              </div>
            </div>
          </div>

          {/* Monthly Summary */}
          <div className="bg-white border border-[#eaecf0] rounded-2xl shadow-sm p-5">
            <h4 className="text-sm font-bold text-[#101828] mb-4">Resumo Mensal</h4>
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6a7282]">Total poupado</span>
                <span className="text-sm font-bold text-[#101828]">R$ {totalSaved.toLocaleString("pt-BR")}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6a7282]">Meta do mês</span>
                <span className="text-sm font-bold text-[#618c78]">R$ {monthlyGoal.toLocaleString("pt-BR")}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6a7282]">Missões completas</span>
                <span className="text-sm font-bold text-[#101828]">2 / 3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6a7282]">Moedas acumuladas</span>
                <span className="text-sm font-bold text-[#bb4d00]">1.850</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

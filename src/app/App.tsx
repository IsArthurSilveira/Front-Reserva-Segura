import { Home, Trophy, Gift, Target, Store, Flame, BookOpen, Wallet, Clock } from "lucide-react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lessons from "./components/Lessons";
import Boxes from "./components/Boxes";
import ProfileScreen from "./components/ProfileScreen";
import AuthScreen from "./components/AuthScreen";
import Leagues from "./components/Leagues";
import Shop from "./components/Shop";
import DesktopLayout from "./components/DesktopLayout";
import { CoinIcon, XPIcon } from "./components/icons/GameIcons";

// Import SVG paths
import svgPaths from "../imports/TelaInicial/svg-6b8uzu4x17";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3, imgGroup4, imgGroup5 } from "../imports/TelaInicial/svg-kj047";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentTab, setCurrentTab] = useState("inicio");
  const [showProfile, setShowProfile] = useState(false);

  // Show auth screen if not authenticated
  if (!isAuthenticated) {
    return <AuthScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  // Desktop Layout
  const renderDesktopContent = () => {
    if (currentTab === "licoes") {
      return <Lessons onBack={() => setCurrentTab("inicio")} />;
    }
    if (currentTab === "caixinhas") {
      return <Boxes onBack={() => setCurrentTab("inicio")} />;
    }
    if (currentTab === "ligas") {
      return <Leagues onBack={() => setCurrentTab("inicio")} />;
    }
    if (currentTab === "loja") {
      return <Shop onBack={() => setCurrentTab("inicio")} />;
    }
    return <HomeContent setCurrentTab={setCurrentTab} setShowProfile={setShowProfile} />;
  };

  return (
    <>
      {/* Desktop Version */}
      <DesktopLayout currentTab={currentTab} onTabChange={setCurrentTab}>
        {renderDesktopContent()}
      </DesktopLayout>

      {/* Mobile Version */}
      <div className="md:hidden size-full">
        <MobileApp
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          showProfile={showProfile}
          setShowProfile={setShowProfile}
        />
      </div>
    </>
  );
}

// Mobile App Component
function MobileApp({
  currentTab,
  setCurrentTab,
  showProfile,
  setShowProfile
}: {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  showProfile: boolean;
  setShowProfile: (show: boolean) => void;
}) {
  // If shop tab is active, show Shop component
  if (currentTab === "loja") {
    return (
      <div className="size-full bg-white overflow-hidden">
        {showProfile && <ProfileScreen onClose={() => setShowProfile(false)} />}
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-hidden">
            <Shop onBack={() => setCurrentTab("inicio")} />
          </div>
          <div className="bg-white border-t border-gray-200">
            <div className="flex items-center justify-around py-2">
              <NavButton icon={<Home />} label="Início" active={currentTab === "inicio"} onClick={() => setCurrentTab("inicio")} />
              <NavButton icon={<Trophy />} label="Ligas" active={currentTab === "ligas"} onClick={() => setCurrentTab("ligas")} />
              <NavButton icon={<Store />} label="Caixinhas" active={currentTab === "caixinhas"} onClick={() => setCurrentTab("caixinhas")} />
              <NavButton icon={<Target />} label="Lições" active={currentTab === "licoes"} onClick={() => setCurrentTab("licoes")} />
              <NavButton icon={<Gift />} label="Loja" active={currentTab === "loja"} onClick={() => setCurrentTab("loja")} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If leagues tab is active
  if (currentTab === "ligas") {
    return (
      <div className="size-full bg-white overflow-hidden">
        {showProfile && <ProfileScreen onClose={() => setShowProfile(false)} />}
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-hidden">
            <Leagues onBack={() => setCurrentTab("inicio")} />
          </div>
          <div className="bg-white border-t border-gray-200">
            <div className="flex items-center justify-around py-2">
              <NavButton icon={<Home />} label="Início" active={currentTab === "inicio"} onClick={() => setCurrentTab("inicio")} />
              <NavButton icon={<Trophy />} label="Ligas" active={currentTab === "ligas"} onClick={() => setCurrentTab("ligas")} />
              <NavButton icon={<Store />} label="Caixinhas" active={currentTab === "caixinhas"} onClick={() => setCurrentTab("caixinhas")} />
              <NavButton icon={<Target />} label="Lições" active={currentTab === "licoes"} onClick={() => setCurrentTab("licoes")} />
              <NavButton icon={<Gift />} label="Loja" active={currentTab === "loja"} onClick={() => setCurrentTab("loja")} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If lessons tab is active
  if (currentTab === "licoes") {
    return (
      <div className="size-full flex flex-col">
        <div className="flex-1 overflow-hidden">
          <Lessons onBack={() => setCurrentTab("inicio")} />
        </div>
        <div className="bg-white border-t border-gray-200">
          <div className="flex items-center justify-around py-2">
            <NavButton icon={<Home />} label="Início" active={currentTab === "inicio"} onClick={() => setCurrentTab("inicio")} />
            <NavButton icon={<Trophy />} label="Ligas" active={currentTab === "ligas"} onClick={() => setCurrentTab("ligas")} />
            <NavButton icon={<Store />} label="Caixinhas" active={currentTab === "caixinhas"} onClick={() => setCurrentTab("caixinhas")} />
            <NavButton icon={<Target />} label="Lições" active={currentTab === "licoes"} onClick={() => setCurrentTab("licoes")} />
            <NavButton icon={<Gift />} label="Loja" active={currentTab === "loja"} onClick={() => setCurrentTab("loja")} />
          </div>
        </div>
      </div>
    );
  }

  // If boxes tab is active
  if (currentTab === "caixinhas") {
    return (
      <div className="size-full flex flex-col">
        <div className="flex-1 overflow-hidden">
          <Boxes onBack={() => setCurrentTab("inicio")} />
        </div>
        <div className="bg-white border-t border-gray-200">
          <div className="flex items-center justify-around py-2">
            <NavButton icon={<Home />} label="Início" active={currentTab === "inicio"} onClick={() => setCurrentTab("inicio")} />
            <NavButton icon={<Trophy />} label="Ligas" active={currentTab === "ligas"} onClick={() => setCurrentTab("ligas")} />
            <NavButton icon={<Store />} label="Caixinhas" active={currentTab === "caixinhas"} onClick={() => setCurrentTab("caixinhas")} />
            <NavButton icon={<Target />} label="Lições" active={currentTab === "licoes"} onClick={() => setCurrentTab("licoes")} />
            <NavButton icon={<Gift />} label="Loja" active={currentTab === "loja"} onClick={() => setCurrentTab("loja")} />
          </div>
        </div>
      </div>
    );
  }

  // Home screen
  return (
    <HomeContent setCurrentTab={setCurrentTab} setShowProfile={setShowProfile} />
  );
}

// Home Content Component (used by both mobile and desktop)
function HomeContent({
  setCurrentTab,
  setShowProfile
}: {
  setCurrentTab: (tab: string) => void;
  setShowProfile?: (show: boolean) => void;
}) {
  return (
    <div className="size-full bg-gray-50 overflow-auto">
      {/* Mobile Status Bar - only on mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white">
        <p className="text-sm font-semibold text-[#1e2939]">9:41</p>
        <div className="flex items-center gap-1">
          <div className="w-6 h-3 border-[1.25px] border-[#1e2939] rounded-md relative">
            <div className="absolute inset-[3px] bg-[#1e2939] rounded-sm" />
          </div>
        </div>
      </div>

      {/* Header - only on mobile */}
      <div className="md:hidden bg-white px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowProfile?.(true)}
            className="relative hover:opacity-80 transition-opacity"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-normal border-[2.5px] border-white shadow-lg" style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 50%, rgb(63, 168, 162) 100%)" }}>
              JS
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#618c78] rounded-full flex items-center justify-center text-white text-xs font-bold border-[1.25px] border-white">
              12
            </div>
          </button>
          <div>
            <h1 className="text-xl font-bold text-[#101828]">João Silva</h1>
            <p className="text-xs text-[#6a7282]">Aspirante Nível 08</p>
          </div>
        </div>
        <div className="bg-[#618c78] rounded-full px-3 py-2 flex items-center gap-2">
          <CoinIcon size={20} className="filter brightness-0 invert" />
          <span className="text-base font-bold text-white">1850</span>
        </div>
      </div>

      {/* XP Progress - only on mobile */}
      <div className="md:hidden bg-white px-4 pb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <XPIcon size={18} />
            <span className="text-sm font-semibold text-[#4a5565]">2450 / 3000 XP</span>
          </div>
          <span className="text-sm font-bold text-[#618c78]">81%</span>
        </div>
        <div className="w-full h-2.5 bg-[#e5e7eb] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#86a783] to-[#5bb49b] rounded-full" style={{ width: "81%" }} />
        </div>
      </div>

      {/* Desktop: Add padding for content */}
      <div className="md:p-8">
        {/* Achievement Cards */}
        <div className="px-4 md:px-0 py-4 flex gap-3">
          <div className="flex-1 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 md:hidden" style={{ backgroundImage: "linear-gradient(170deg, rgb(97, 140, 120) 8.5%, rgb(123, 241, 168) 91.5%)" }}>
            <Flame className="w-8 h-8 text-white" strokeWidth={2} />
            <div className="text-center">
              <p className="text-xs text-white opacity-85">Sequência</p>
              <p className="text-base font-bold text-white">7 dias</p>
            </div>
          </div>
          <div className="flex-1 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 md:hidden" style={{ backgroundImage: "linear-gradient(170deg, rgb(218, 165, 32) 0%, rgb(255, 215, 0) 100%)" }}>
            <Trophy className="w-8 h-8 text-white" strokeWidth={2} />
            <div className="text-center">
              <p className="text-xs text-white opacity-85">Conquistas</p>
              <p className="text-base font-bold text-white">23</p>
            </div>
          </div>
        </div>

        {/* Main Boxes */}
        <div className="px-4 md:px-0 py-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-[#101828]">Principais Caixinhas</h2>
            <button onClick={() => setCurrentTab("caixinhas")} className="text-sm font-semibold text-[#618c78]">Ver todas</button>
          </div>

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            className="boxes-carousel"
          >
            {/* Caixinha 1: Reserva de Emergência */}
            <div className="px-1">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #5bb49b 0%, #3fa8a2 100%)" }}>
                    <svg className="w-6 h-6 text-[#daa520]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#daa520] rounded-full flex items-center justify-center">
                      <span className="text-[10px]">💰</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#101828] mb-1">Reserva de Emergência</h3>
                    <p className="text-sm text-[#6a7282] mb-2">Meta: R$ 10.000</p>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl font-bold text-[#101828]">R$ 6.800</span>
                      <span className="text-sm font-bold text-[#618c78]">68%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#5bb49b] to-[#3fa8a2] rounded-full" style={{ width: "68%" }} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#6a7282]">💰 Rendimento:</span>
                    <span className="text-sm font-bold text-[#618c78]">R$ 420,30</span>
                  </div>
                  <button className="text-xs font-semibold text-[#618c78]">Ver detalhes →</button>
                </div>
              </div>
            </div>

            {/* Caixinha 2: Viagem */}
            <div className="px-1">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)" }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#f97316] rounded-full flex items-center justify-center">
                      <span className="text-[10px]">✈️</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#101828] mb-1">Viagem Europa</h3>
                    <p className="text-sm text-[#6a7282] mb-2">Meta: R$ 15.000</p>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl font-bold text-[#101828]">R$ 4.200</span>
                      <span className="text-sm font-bold text-[#f59e0b]">28%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] rounded-full" style={{ width: "28%" }} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#6a7282]">💰 Rendimento:</span>
                    <span className="text-sm font-bold text-[#f59e0b]">R$ 185,20</span>
                  </div>
                  <button className="text-xs font-semibold text-[#f59e0b]">Ver detalhes →</button>
                </div>
              </div>
            </div>

            {/* Caixinha 3: Carro Novo */}
            <div className="px-1">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#2563eb] rounded-full flex items-center justify-center">
                      <span className="text-[10px]">🚗</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#101828] mb-1">Carro Novo</h3>
                    <p className="text-sm text-[#6a7282] mb-2">Meta: R$ 50.000</p>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl font-bold text-[#101828]">R$ 8.500</span>
                      <span className="text-sm font-bold text-[#3b82f6]">17%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full" style={{ width: "17%" }} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#6a7282]">💰 Rendimento:</span>
                    <span className="text-sm font-bold text-[#3b82f6]">R$ 312,50</span>
                  </div>
                  <button className="text-xs font-semibold text-[#3b82f6]">Ver detalhes →</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* Missions Section */}
        <div className="px-4 md:px-0 py-4">
          <h2 className="text-xl font-bold text-[#101828] mb-3">Missões Diárias</h2>
          <div className="space-y-3">
            <MissionCard
              icon={BookOpen}
              title="Complete 1 lição"
              progress={0}
              total={1}
              reward={50}
            />
            <MissionCard
              icon={Wallet}
              title="Adicione R$ 50 a uma caixinha"
              progress={1}
              total={1}
              reward={30}
              completed
            />
            <MissionCard
              icon={Clock}
              title="Pratique por 10 minutos"
              progress={7}
              total={10}
              reward={40}
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation - only on mobile */}
      <div className="md:hidden bg-white border-t border-gray-200">
        <div className="flex items-center justify-around py-2">
          <NavButton icon={<Home />} label="Início" active onClick={() => setCurrentTab("inicio")} />
          <NavButton icon={<Trophy />} label="Ligas" active={false} onClick={() => setCurrentTab("ligas")} />
          <NavButton icon={<Store />} label="Caixinhas" active={false} onClick={() => setCurrentTab("caixinhas")} />
          <NavButton icon={<Target />} label="Lições" active={false} onClick={() => setCurrentTab("licoes")} />
          <NavButton icon={<Gift />} label="Loja" active={false} onClick={() => setCurrentTab("loja")} />
        </div>
      </div>
    </div>
  );
}

// Mission Card Component
function MissionCard({
  icon: Icon,
  title,
  progress,
  total,
  reward,
  completed = false
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  progress: number;
  total: number;
  reward: number;
  completed?: boolean;
}) {
  const percentage = (progress / total) * 100;

  return (
    <div className={`bg-white rounded-2xl p-4 border ${completed ? "border-[#618c78]" : "border-gray-200"}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-[#618c78]/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#618c78]" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-[#101828]">{title}</h3>
          <p className="text-xs text-[#6a7282]">
            {completed ? "Completa!" : `${progress}/${total} concluído`}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <CoinIcon size={16} />
          <span className="text-sm font-bold text-[#f59e0b]">{reward}</span>
        </div>
      </div>
      {!completed && (
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#618c78] rounded-full transition-all" style={{ width: `${percentage}%` }} />
        </div>
      )}
      {completed && (
        <div className="w-full bg-[#618c78]/10 text-[#618c78] text-center py-2 rounded-xl text-sm font-bold">
          ✓ Missão Completa
        </div>
      )}
    </div>
  );
}

// Nav Button Component
function NavButton({
  icon,
  label,
  active,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 min-w-[60px] py-1"
    >
      <div className={active ? "text-[#618c78]" : "text-[#9ca3af]"}>
        {icon}
      </div>
      <span className={`text-xs ${active ? "text-[#618c78] font-semibold" : "text-[#9ca3af]"}`}>
        {label}
      </span>
    </button>
  );
}


import { ArrowLeft, HelpCircle, Wallet, Target, BarChart3, Settings, Plane, Home, GraduationCap, Heart, ShoppingBag, Shield, Laptop, Bell, TrendingUp, Download, Lock, ChevronRight } from "lucide-react";
import { useState } from "react";
import BoxDetail from "./BoxDetail";

interface BoxesProps {
  onBack?: () => void;
}

interface Box {
  id: string;
  title: string;
  icon: any;
  target: number;
  current: number;
  color: string;
  category: string;
  startDate: string;
  monthlyGoal: number;
  earnings: number;
}

export default function Boxes({ onBack }: BoxesProps) {
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);
  const [activeView, setActiveView] = useState("caixinhas");

  const boxes: Box[] = [
    {
      id: "1",
      title: "Viagem para Europa",
      icon: Plane,
      target: 5000,
      current: 3200,
      color: "bg-[#5bb49b]",
      category: "lazer",
      startDate: "Jan/25",
      monthlyGoal: 450,
      earnings: 285.50
    },
    {
      id: "2",
      title: "Reserva de Emergência",
      icon: Shield,
      target: 10000,
      current: 6800,
      color: "bg-[#618c78]",
      category: "essencial",
      startDate: "Nov/24",
      monthlyGoal: 500,
      earnings: 420.30
    },
    {
      id: "3",
      title: "Novo Notebook",
      icon: Laptop,
      target: 5000,
      current: 3200,
      color: "bg-[#3fa8a2]",
      category: "compras",
      startDate: "Fev/25",
      monthlyGoal: 400,
      earnings: 180.00
    },
    {
      id: "4",
      title: "Curso de Inglês",
      icon: GraduationCap,
      target: 2500,
      current: 1200,
      color: "bg-[#88a983]",
      category: "educacao",
      startDate: "Mar/25",
      monthlyGoal: 300,
      earnings: 85.00
    },
    {
      id: "5",
      title: "Casa Própria",
      icon: Home,
      target: 50000,
      current: 12000,
      color: "bg-[#7bb1f1]",
      category: "essencial",
      startDate: "Jan/24",
      monthlyGoal: 1000,
      earnings: 1200.00
    },
    {
      id: "6",
      title: "Presente Aniversário",
      icon: ShoppingBag,
      target: 800,
      current: 450,
      color: "bg-[#c18c00]",
      category: "lazer",
      startDate: "Abr/25",
      monthlyGoal: 150,
      earnings: 15.00
    }
  ];

  const viewOptions = [
    { id: "caixinhas", label: "Minhas Caixinhas", icon: Wallet },
    { id: "metas", label: "Metas", icon: Target },
    { id: "analises", label: "Análises", icon: BarChart3 },
    { id: "config", label: "Configurações", icon: Settings }
  ];

  const totalSaved = boxes.reduce((sum, box) => sum + box.current, 0);
  const totalEarnings = boxes.reduce((sum, box) => sum + box.earnings, 0);

  if (selectedBox) {
    return <BoxDetail box={selectedBox} onBack={() => setSelectedBox(null)} />;
  }

  return (
    <div className="h-full overflow-auto bg-white md:bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-[#101828]" />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-[#101828]">Caixinhas</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <HelpCircle className="w-5 h-5 text-[#6a7282]" />
          </button>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto">
        {/* Total Banner */}
        <div
          className="mx-4 md:mx-8 mt-4 md:mt-6 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ background: "linear-gradient(127deg, rgb(97, 140, 120) 26%, rgb(123, 241, 168) 113%)" }}
        >
          {/* Mascot Image */}
          <div className="absolute left-4 bottom-0 w-24 h-24 opacity-90">
            <div className="relative w-full h-full">
              {/* Simple mascot illustration */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#3fa8a2] rounded-full opacity-30" />
              <div className="absolute bottom-2 left-2 text-5xl">🦖</div>
            </div>
          </div>

          <div className="ml-24 relative z-10">
            <p className="text-base text-white/90 mb-2">Total guardado</p>
            <p className="text-3xl font-bold text-white mb-3">
              R$ {totalSaved.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-white/90">
              Suas caixinhas já renderam{" "}
              <span className="font-bold">
                R$ {totalEarnings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </p>
          </div>
        </div>

        {/* View Options */}
        <div className="px-4 md:px-8 mt-6 mb-4">
          <div className="flex gap-4 md:gap-6 justify-center">
            {viewOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setActiveView(option.id)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeView === option.id
                        ? "bg-[#618c78] shadow-lg scale-110"
                        : "bg-[#f4f4f4] hover:bg-[#e5e7eb] hover:scale-105"
                    }`}
                  >
                    <OptionIcon
                      className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                        activeView === option.id ? "text-white" : "text-[#6a7282]"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs font-semibold text-center max-w-[70px] transition-colors ${
                      activeView === option.id
                        ? "text-[#618c78]"
                        : "text-[#6a7282]"
                    }`}
                  >
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Based on Active View */}
        {activeView === "caixinhas" && (
          <div className="px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {boxes.map((box) => {
                const progress = (box.current / box.target) * 100;
                const BoxIcon = box.icon;

                return (
                  <button
                    key={box.id}
                    onClick={() => setSelectedBox(box)}
                    className="bg-white border border-gray-200 rounded-3xl p-4 md:p-5 hover:shadow-xl hover:scale-105 hover:border-[#618c78]/30 transition-all duration-300 text-left"
                  >
                    {/* Icon & Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`${box.color} w-12 h-12 rounded-2xl flex items-center justify-center shrink-0`}>
                        <BoxIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-[#101828] line-clamp-2 mb-1">
                          {box.title}
                        </h3>
                        <p className="text-xs text-[#6a7282]">
                          Meta: R$ {box.target.toLocaleString("pt-BR")}
                        </p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg font-bold text-[#101828]">
                          R$ {box.current.toLocaleString("pt-BR")}
                        </span>
                        <span className="text-sm font-bold text-[#618c78]">
                          {Math.round(progress)}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${box.color} rounded-full transition-all`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Earnings */}
                    <p className="text-xs text-[#618c78]">
                      💰 Rendeu R$ {box.earnings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activeView === "metas" && (
          <div className="px-4">
            {/* Monthly Goal Card */}
            <div className="bg-gradient-to-br from-[#618c78] to-[#5bb49b] rounded-3xl p-5 mb-4 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-white/80 mb-1">Meta Mensal</p>
                  <p className="text-3xl font-bold">R$ 2.800</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
              </div>
              <div className="mb-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-white/90">R$ 1.850 economizados</span>
                  <span className="font-bold">66%</span>
                </div>
                <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: "66%" }} />
                </div>
              </div>
              <p className="text-xs text-white/80">Faltam R$ 950 para atingir sua meta</p>
            </div>

            {/* Goals by Box */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#101828] mb-3">Metas por Caixinha</h3>
              <div className="space-y-3">
                {boxes.map((box) => {
                  const progress = (box.current / box.target) * 100;
                  const BoxIcon = box.icon;
                  const remaining = box.target - box.current;
                  const monthsRemaining = Math.ceil(remaining / box.monthlyGoal);

                  return (
                    <div key={box.id} className="bg-white border border-gray-200 rounded-2xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`${box.color} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>
                          <BoxIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-[#101828]">{box.title}</h4>
                          <p className="text-xs text-[#6a7282]">
                            {monthsRemaining <= 0 ? "Meta atingida!" : `${monthsRemaining} meses restantes`}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#6a7282]">Meta mensal: R$ {box.monthlyGoal.toLocaleString("pt-BR")}</span>
                          <span className="font-bold text-[#618c78]">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${box.color} rounded-full transition-all`}
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="text-3xl">💡</div>
                <div>
                  <h4 className="text-sm font-bold text-[#101828] mb-1">Dica de Meta</h4>
                  <p className="text-xs text-[#6a7282]">
                    Você está economizando bem! Continue assim e atingirá todas as suas metas em {Math.ceil(totalSaved / 2800)} meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === "analises" && (
          <div className="px-4">
            {/* Balance Section */}
            <div className="text-center mb-6">
              <p className="text-sm text-[#a2a2a7] mb-2">Total Economizado</p>
              <p className="text-3xl font-bold text-[#101828] mb-6">
                R$ {totalSaved.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>

              {/* Simple Chart */}
              <div className="relative h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 335 130" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="0" x2="0" y2="130" stroke="#f4f4f4" strokeWidth="1.5" />
                  <line x1="60" y1="0" x2="60" y2="90" stroke="#f4f4f4" strokeWidth="1.5" />
                  <line x1="120" y1="0" x2="120" y2="110" stroke="#f4f4f4" strokeWidth="1.5" />
                  <line x1="180" y1="0" x2="180" y2="40" stroke="#f4f4f4" strokeWidth="1.5" />
                  <line x1="240" y1="0" x2="240" y2="95" stroke="#f4f4f4" strokeWidth="1.5" />
                  <line x1="300" y1="0" x2="300" y2="50" stroke="#f4f4f4" strokeWidth="1.5" />

                  {/* Gradient Area */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#618c78" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#618c78" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 80 Q 40 60, 70 70 Q 100 80, 130 50 Q 160 20, 190 30 Q 220 40, 250 60 Q 280 80, 310 40"
                    fill="url(#chartGradient)"
                    stroke="none"
                  />

                  {/* Line Chart */}
                  <path
                    d="M 10 80 Q 40 60, 70 70 Q 100 80, 130 50 Q 160 20, 190 30 Q 220 40, 250 60 Q 280 80, 310 40"
                    fill="none"
                    stroke="#618c78"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Dot on peak */}
                  <circle cx="190" cy="30" r="8" fill="#618c78" />
                  <circle cx="190" cy="30" r="4" fill="white" />
                </svg>
              </div>

              {/* Month Selector */}
              <div className="flex gap-3 justify-center mb-6">
                {["Out", "Nov", "Dez", "Jan", "Fev", "Mar"].map((month, index) => (
                  <button
                    key={month}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      index === 3
                        ? "bg-[#618c78] text-white"
                        : "text-[#a2a2a7]"
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Section */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-[#101828]">Atividade Recente</h3>
                <button className="text-sm text-[#a2a2a7] font-medium">Ver Tudo</button>
              </div>

              <div className="space-y-3">
                {boxes.slice(0, 4).map((box) => {
                  const BoxIcon = box.icon;
                  return (
                    <div key={box.id} className="flex items-center gap-3">
                      <div className={`${box.color} w-10 h-10 rounded-2xl flex items-center justify-center shrink-0`}>
                        <BoxIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[#101828]">{box.title}</p>
                        <p className="text-xs text-[#a2a2a7]">Economia</p>
                      </div>
                      <p className="text-sm font-semibold text-[#618c78]">
                        + R$ {box.monthlyGoal.toLocaleString("pt-BR")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeView === "config" && (
          <div className="px-4">
            {/* Notifications Section */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#6a7282] uppercase tracking-wide mb-3">
                Notificações
              </h3>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-[#101828]">Lembretes de Economia</p>
                      <p className="text-xs text-[#6a7282]">Receba notificações diárias</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-[#618c78] rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </button>
                <div className="h-px bg-gray-200" />
                <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-[#101828]">Alertas de Metas</p>
                      <p className="text-xs text-[#6a7282]">Quando atingir uma meta</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-[#618c78] rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </button>
              </div>
            </div>

            {/* Savings Settings */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#6a7282] uppercase tracking-wide mb-3">
                Economia
              </h3>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-[#101828]">Taxa de Rendimento</p>
                      <p className="text-xs text-[#6a7282]">Configure a taxa de juros</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#6a7282]" />
                </button>
                <div className="h-px bg-gray-200" />
                <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-[#101828]">Depósitos Automáticos</p>
                      <p className="text-xs text-[#6a7282]">Configure valores mensais</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#6a7282]" />
                </button>
              </div>
            </div>

            {/* Data & Privacy */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#6a7282] uppercase tracking-wide mb-3">
                Dados e Privacidade
              </h3>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                      <Download className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-[#101828]">Exportar Dados</p>
                      <p className="text-xs text-[#6a7282]">Baixe seus relatórios</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#6a7282]" />
                </button>
                <div className="h-px bg-gray-200" />
                <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <Lock className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-[#101828]">Privacidade</p>
                      <p className="text-xs text-[#6a7282]">Gerencie suas preferências</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#6a7282]" />
                </button>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="text-2xl">ℹ️</div>
                <div>
                  <h4 className="text-sm font-bold text-[#101828] mb-1">Sobre as Caixinhas</h4>
                  <p className="text-xs text-[#6a7282] mb-2">
                    Versão 1.0.0 - Suas economias estão seguras e protegidas.
                  </p>
                  <button className="text-xs text-[#618c78] font-semibold">
                    Ver Termos de Uso
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add New Box - Only on Caixinhas view */}
        {activeView === "caixinhas" && (
          <div className="px-4 mt-6">
            <button className="w-full bg-gradient-to-r from-[#88a983] to-[#3fa8a2] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all">
              + Criar Nova Caixinha
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

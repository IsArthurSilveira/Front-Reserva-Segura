import { ArrowLeft, Star, Sparkles, Shield, Crown, Zap, Award, Palette, Rocket, TrendingUp, Gem, Moon, Utensils, Music, Video, Smartphone, BookOpen, ShoppingBag, Medal, Wand2, Gift } from "lucide-react";
import { useState } from "react";
import { CoinIcon } from "./icons/GameIcons";

interface ShopProps {
  onBack: () => void;
}

export default function Shop({ onBack }: ShopProps) {
  const [activeFilter, setActiveFilter] = useState("todos");

  const shopItems = [
    {
      id: 1,
      name: "Badge Mestre",
      description: "Badge exclusiva de mestre financeiro",
      icon: Crown,
      price: 500,
      category: "badge",
      featured: true,
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      id: 2,
      name: "Ícone Diamante",
      description: "Ícone de perfil premium diamante",
      icon: Gem,
      price: 800,
      category: "icone",
      featured: true,
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      id: 3,
      name: "Amazon Gift Card R$ 50",
      description: "Vale compra de R$ 50 para Amazon",
      icon: Star,
      price: 1000,
      category: "giftcard",
      featured: false,
      gradient: "from-orange-400 to-orange-600"
    },
    {
      id: 4,
      name: "Netflix 1 Mês",
      description: "Assinatura Netflix por 1 mês",
      icon: Video,
      price: 800,
      category: "giftcard",
      featured: false,
      gradient: "from-red-500 to-red-700"
    },
    {
      id: 5,
      name: "Tema Noturno",
      description: "Tema escuro premium para o app",
      icon: Moon,
      price: 300,
      category: "tema",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      name: "Badge Investidor",
      description: "Badge especial de investidor",
      icon: TrendingUp,
      price: 600,
      category: "badge",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 7,
      name: "Spotify Premium 3 Meses",
      description: "Assinatura Spotify Premium por 3 meses",
      icon: Music,
      price: 1500,
      category: "giftcard",
      gradient: "from-green-500 to-green-700"
    },
    {
      id: 8,
      name: "Ícone Foguete",
      description: "Ícone de perfil foguete espacial",
      icon: Rocket,
      price: 400,
      category: "icone",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      id: 9,
      name: "Google Play R$ 50",
      description: "Crédito de R$ 50 para Google Play",
      icon: Smartphone,
      price: 1000,
      category: "giftcard",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 10,
      name: "Badge Poupador",
      description: "Badge de poupador exemplar",
      icon: Award,
      price: 450,
      category: "badge",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      id: 11,
      name: "Tema Arco-íris",
      description: "Tema colorido vibrante",
      icon: Palette,
      price: 350,
      category: "tema",
      gradient: "from-pink-400 via-purple-400 to-blue-400"
    },
    {
      id: 12,
      name: "Vale iFood R$ 30",
      description: "Crédito de R$ 30 para iFood",
      icon: Utensils,
      price: 600,
      category: "giftcard",
      gradient: "from-red-400 to-red-600"
    },
    {
      id: 13,
      name: "Proteção de Sequência",
      description: "Protege sua sequência por 7 dias",
      icon: Shield,
      price: 200,
      category: "recurso",
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      id: 14,
      name: "XP Duplicado",
      description: "Ganhe XP em dobro por 24h",
      icon: Zap,
      price: 250,
      category: "recurso",
      gradient: "from-yellow-400 to-orange-600"
    },
    {
      id: 15,
      name: "Ícone Livro",
      description: "Ícone de perfil estudioso",
      icon: BookOpen,
      price: 500,
      category: "icone",
      gradient: "from-blue-500 to-indigo-700"
    }
  ];

  const filteredItems = activeFilter === "todos"
    ? shopItems
    : shopItems.filter(item => item.category === activeFilter);

  const featuredItems = shopItems.filter(item => item.featured);

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center gap-3 max-w-7xl mx-auto">
          <button onClick={onBack} className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-[#101828]">Loja</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Balance Card */}
          <div className="p-4 md:p-8">
            <div className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/90 mb-1">Suas Moedas</p>
                <div className="flex items-center gap-3">
                  <CoinIcon size={40} className="drop-shadow-md" />
                  <span className="text-4xl font-bold text-white">2450</span>
                </div>
              </div>
              <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Star className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 md:px-8 mb-4">
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 md:justify-center">
            <button
              onClick={() => setActiveFilter("todos")}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-colors flex items-center gap-2 ${
                activeFilter === "todos"
                  ? "bg-[#618c78] text-white"
                  : "bg-white text-[#6a7282] border border-gray-200"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Todos
            </button>
            <button
              onClick={() => setActiveFilter("badge")}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-colors flex items-center gap-2 ${
                activeFilter === "badge"
                  ? "bg-[#618c78] text-white"
                  : "bg-white text-[#6a7282] border border-gray-200"
              }`}
            >
              <Medal className="w-4 h-4" />
              Badges
            </button>
            <button
              onClick={() => setActiveFilter("icone")}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-colors flex items-center gap-2 ${
                activeFilter === "icone"
                  ? "bg-[#618c78] text-white"
                  : "bg-white text-[#6a7282] border border-gray-200"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Ícones
            </button>
            <button
              onClick={() => setActiveFilter("giftcard")}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-colors flex items-center gap-2 ${
                activeFilter === "giftcard"
                  ? "bg-[#618c78] text-white"
                  : "bg-white text-[#6a7282] border border-gray-200"
              }`}
            >
              <Gift className="w-4 h-4" />
              Gift Cards
            </button>
            <button
              onClick={() => setActiveFilter("tema")}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-colors flex items-center gap-2 ${
                activeFilter === "tema"
                  ? "bg-[#618c78] text-white"
                  : "bg-white text-[#6a7282] border border-gray-200"
              }`}
            >
              <Palette className="w-4 h-4" />
              Temas
            </button>
            <button
              onClick={() => setActiveFilter("recurso")}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-colors flex items-center gap-2 ${
                activeFilter === "recurso"
                  ? "bg-[#618c78] text-white"
                  : "bg-white text-[#6a7282] border border-gray-200"
              }`}
            >
              <Wand2 className="w-4 h-4" />
              Recursos
            </button>
          </div>
        </div>

        {/* Featured Section */}
        {activeFilter === "todos" && featuredItems.length > 0 && (
          <div className="px-4 md:px-8 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#f59e0b]" />
              <h2 className="text-lg md:text-xl font-bold text-[#101828]">Destaques</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {featuredItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 hover:border-[#f59e0b]/30 transition-all duration-300 cursor-pointer">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 shadow-md`}>
                      <ItemIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-[#101828] mb-1">{item.name}</h3>
                    <p className="text-xs text-[#6a7282] mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-1.5 text-[#f59e0b]">
                      <CoinIcon size={16} />
                      <span className="text-sm font-bold">{item.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Items Section */}
        <div className="px-4 md:px-8 pb-20">
          <h2 className="text-lg md:text-xl font-bold text-[#101828] mb-3">
            {activeFilter === "todos" ? "Todos os Itens" : "Itens Filtrados"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 hover:border-[#f59e0b]/30 transition-all duration-300 cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 shadow-md`}>
                    <ItemIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#101828] mb-1">{item.name}</h3>
                  <p className="text-xs text-[#6a7282] mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-1.5 text-[#f59e0b]">
                    <CoinIcon size={16} />
                    <span className="text-sm font-bold">{item.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

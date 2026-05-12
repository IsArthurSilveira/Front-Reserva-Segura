import { ArrowLeft } from "lucide-react";

interface LeaguesProps {
  onBack: () => void;
}

export default function Leagues({ onBack }: LeaguesProps) {
  const avatarColors = [
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-orange-400 to-orange-600",
    "from-pink-400 to-pink-600",
    "from-teal-400 to-teal-600",
    "from-indigo-400 to-indigo-600",
    "from-red-400 to-red-600",
    "from-yellow-400 to-yellow-600"
  ];

  const leagueData = [
    { id: 1, name: "Maria Santos", xp: 53, zone: "promotion", color: 0 },
    { id: 2, name: "Pedro Costa", xp: 45, zone: "promotion", color: 1 },
    { id: 3, name: "João Silva", xp: 36, zone: "promotion", color: 2, isCurrentUser: true },
    { id: 4, name: "Ana Oliveira", xp: 27, zone: "promotion", color: 3 },
    { id: 5, name: "Carlos Souza", xp: 23, zone: "promotion", color: 4 },
    { id: 6, name: "Juliana Lima", xp: 20, zone: "promotion", color: 5 },
    { id: 7, name: "Rafael Alves", xp: 15, zone: "promotion", color: 6 },
    { id: 8, name: "Camila Rodrigues", xp: 14, zone: "promotion", color: 7 },
    { id: 9, name: "Lucas Ferreira", xp: 13, zone: "promotion", color: 0 },
    { id: 10, name: "Beatriz Martins", xp: 10, zone: "promotion", color: 1 },
    { id: 11, name: "Felipe Pereira", xp: 10, color: 2 },
    { id: 12, name: "Larissa Ribeiro", xp: 10, color: 3 },
    { id: 13, name: "Gabriel Carvalho", xp: 9, color: 4 },
    { id: 14, name: "Amanda Gomes", xp: 8, color: 5 },
    { id: 15, name: "Bruno Dias", xp: 10, color: 6 },
    { id: 16, name: "Fernanda Castro", xp: 10, color: 7 },
    { id: 17, name: "Thiago Araújo", xp: 8, color: 0 },
    { id: 18, name: "Patricia Rocha", xp: 7, color: 1 },
    { id: 19, name: "Diego Barbosa", xp: 7, color: 2 },
    { id: 20, name: "Renata Mendes", xp: 7, color: 3 },
    { id: 21, name: "Rodrigo Pinto", xp: 10, color: 4 },
    { id: 22, name: "Isabela Teixeira", xp: 5, color: 5 },
    { id: 23, name: "Marcelo Cardoso", xp: 10, color: 6 },
    { id: 24, name: "demotion-start", xp: 0, isDivider: true },
    { id: 25, name: "Aline Moreira", xp: 14, zone: "demotion", color: 7 },
    { id: 26, name: "Gustavo Freitas", xp: 14, zone: "demotion", color: 0 },
    { id: 27, name: "Daniela Cunha", xp: 14, zone: "demotion", color: 1 },
    { id: 28, name: "Paulo Melo", xp: 5, zone: "demotion", color: 2 },
    { id: 29, name: "Tatiana Nunes", xp: 5, zone: "demotion", color: 3 },
    { id: 30, name: "Ricardo Monteiro", xp: 10, zone: "demotion", color: 4 },
    { id: 31, name: "Vanessa Correia", xp: 0, zone: "demotion", color: 5 }
  ];

  return (
    <div className="h-full bg-white md:bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center gap-3 max-w-5xl mx-auto">
          <button onClick={onBack} className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-[#101828]">Ligas</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto md:bg-white md:my-6 md:rounded-3xl md:shadow-sm md:border md:border-gray-200">
          {/* League Badges */}
          <div className="flex items-center justify-center gap-2 md:gap-3 px-4 py-4 md:py-6 bg-gray-50 md:bg-white md:rounded-t-3xl">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 flex items-center justify-center text-white opacity-40">
            🥉
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-300 flex items-center justify-center text-white opacity-60">
            🥈
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-3xl shadow-lg border-4 border-white">
            🥇
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white opacity-40">
            💎
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white opacity-40">
            👑
          </div>
        </div>

        {/* League Info */}
        <div className="px-4 py-4 bg-white">
          <h2 className="text-center text-lg font-bold text-[#101828] mb-1">Liga Ouro</h2>
          <p className="text-center text-sm text-[#6a7282] mb-1">Top 10 promovidos para próxima liga</p>
          <p className="text-center text-sm font-bold text-[#f59e0b]">1 dia restante</p>
        </div>

          {/* Rankings List */}
          <div className="px-4 md:px-6 pb-4 md:pb-6">
          {leagueData.map((user, index) => {
            if (user.isDivider) {
              return (
                <div key={user.id} className="flex items-center justify-center py-3 my-2">
                  <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-red-600 rounded-full" />
                    <span className="text-xs font-bold uppercase">Demotion Zone</span>
                  </div>
                </div>
              );
            }

            const isPromotionZone = user.zone === "promotion";
            const isDemotionZone = user.zone === "demotion";

            return (
              <div key={user.id}>
                {index === 0 && (
                  <div className="flex items-center justify-center py-2 mb-2">
                    <div className="flex items-center gap-2 bg-[#618c78]/10 text-[#618c78] px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-[#618c78] rounded-full" />
                      <span className="text-xs font-bold uppercase">Promotion Zone</span>
                    </div>
                  </div>
                )}
                <div
                  className={`flex items-center gap-3 py-3 px-3 rounded-xl mb-2 transition-all duration-200 ${
                    user.isCurrentUser
                      ? "bg-[#618c78]/10 border-2 border-[#618c78] shadow-md scale-105"
                      : isPromotionZone
                      ? "bg-[#618c78]/5 hover:bg-[#618c78]/10"
                      : isDemotionZone
                      ? "bg-red-50/30 hover:bg-red-50/50"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="text-sm font-bold text-[#6a7282] w-6 text-right">
                    {index + 1}
                  </span>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[user.color || 0]} flex items-center justify-center text-xl`}>
                    {user.avatar}
                  </div>
                  <span className="flex-1 text-sm font-semibold text-[#101828]">
                    {user.name}
                  </span>
                  <span className="text-sm font-bold text-[#6a7282]">{user.xp} XP</span>
                </div>
              </div>
            );
          })}
          </div>

          {/* Bottom League Icons */}
          <div className="flex items-center justify-center gap-4 md:gap-6 px-4 py-6 mt-4 md:rounded-b-3xl">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 flex items-center justify-center text-2xl md:text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer">
                🏠
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-400 flex items-center justify-center text-2xl md:text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer">
                🏆
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-2xl md:text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer">
                🦁
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center text-2xl md:text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer">
                🎪
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-2xl md:text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer">
                👑
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft, User, CreditCard, Wallet, Bell, MessageCircle, MapPin, Settings, ChevronRight, UserPen } from "lucide-react";
import { useState } from "react";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";

interface SettingsMenuProps {
  onClose: () => void;
}

export default function SettingsMenu({ onClose }: SettingsMenuProps) {
  const [currentView, setCurrentView] = useState<"menu" | "edit" | "password">("menu");

  const menuItems = [
    {
      id: "personal-info",
      icon: User,
      label: "Informações Pessoais",
      onClick: () => setCurrentView("edit")
    },
    {
      id: "payment-methods",
      icon: CreditCard,
      label: "Métodos de Pagamento",
      onClick: () => alert("Métodos de Pagamento em desenvolvimento")
    },
    {
      id: "banks",
      icon: Wallet,
      label: "Bancos e Cartões",
      onClick: () => alert("Bancos e Cartões em desenvolvimento")
    },
    {
      id: "notifications",
      icon: Bell,
      label: "Notificações",
      badge: 2,
      onClick: () => alert("Notificações em desenvolvimento")
    },
    {
      id: "support",
      icon: MessageCircle,
      label: "Suporte",
      onClick: () => alert("Suporte em desenvolvimento")
    },
    {
      id: "address",
      icon: MapPin,
      label: "Endereço",
      onClick: () => alert("Endereço em desenvolvimento")
    },
    {
      id: "settings",
      icon: Settings,
      label: "Configurações",
      onClick: () => setCurrentView("password")
    }
  ];

  if (currentView === "edit") {
    return <EditProfile onBack={() => setCurrentView("menu")} />;
  }

  if (currentView === "password") {
    return <ChangePassword onBack={() => setCurrentView("menu")} />;
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5 text-[#101828]" />
            </button>
            <h1 className="text-xl font-bold text-[#101828]">Usuário</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <UserPen className="w-5 h-5 text-[#6a7282]" />
          </button>
        </div>
      </div>

      <div className="p-4 pb-20">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-8 py-4">
          <div className="w-18 h-18 rounded-full flex items-center justify-center text-white text-2xl border-4 border-white shadow-lg" style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 50%, rgb(63, 168, 162) 100%)" }}>
            JS
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#101828]">João Silva</h2>
            <p className="text-sm text-[#7e848d]">Aspirante Nível 08</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-0">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.id}>
                <button
                  onClick={item.onClick}
                  className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#a2a2a7]" />
                    <span className="text-sm text-[#1e1e2d]">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <div className="w-5 h-5 bg-[#618c78] rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-semibold">{item.badge}</span>
                      </div>
                    )}
                    <ChevronRight className="w-5 h-5 text-[#7e848d]" />
                  </div>
                </button>
                {index < menuItems.length - 1 && (
                  <div className="h-px bg-[#f4f4f4]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="mt-8">
          <button className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-100 transition-colors">
            Sair da Conta
          </button>
        </div>
      </div>
    </div>
  );
}

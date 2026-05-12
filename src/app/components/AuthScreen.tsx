import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import imgDinosaur from "../../imports/TelaEntrarDesktop/6c9468368cc2baf3fccf383eb020a4c273a1c528.png";

interface AuthScreenProps {
  onLogin: () => void;
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <>
      {/* Mobile Version */}
      <div
        className="md:hidden fixed inset-0 overflow-auto"
        style={{
          background: "linear-gradient(180deg, rgb(149, 179, 135) 0%, rgb(97, 140, 120) 50%, rgb(202, 217, 150) 100%)"
        }}
      >
        <div className="min-h-full flex flex-col animate-in fade-in duration-500">
          {/* Top Section with Branding */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-8">
            {/* Logo/Mascot */}
            <div className="mb-8 animate-in zoom-in duration-700 delay-100">
              <div className="text-9xl drop-shadow-lg">🦖</div>
            </div>

            {/* App Name */}
            <h1 className="text-3xl font-bold text-white mb-2 animate-in slide-in-from-bottom duration-500 delay-300">
              Reserva Segura
            </h1>
            <p className="text-lg text-white/90 text-center animate-in slide-in-from-bottom duration-500 delay-500">
              Prepare-se para o futuro
            </p>
          </div>

          {/* Bottom Card */}
          <div className="bg-white rounded-t-[32px] px-6 py-8 shadow-2xl">
            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-8 bg-gray-100 rounded-2xl p-1">
              <button
                onClick={() => setMode("login")}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                  mode === "login"
                    ? "bg-[#618c78] text-white shadow-md"
                    : "text-[#6a7282] hover:text-[#101828]"
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                  mode === "signup"
                    ? "bg-[#618c78] text-white shadow-md"
                    : "text-[#6a7282] hover:text-[#101828]"
                }`}
              >
                Cadastrar
              </button>
            </div>

            {/* Static Form Display */}
            <div className="space-y-5">
              {mode === "signup" && (
                <div>
                  <label className="text-sm text-[#6a7282] mb-2 block">Nome Completo</label>
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#618c78]/10 rounded-xl">
                    <User className="w-5 h-5 text-[#618c78]" />
                    <span className="flex-1 text-sm text-[#9ca3af]">João Silva</span>
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm text-[#6a7282] mb-2 block">Email</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-[#618c78]/10 rounded-xl">
                  <Mail className="w-5 h-5 text-[#618c78]" />
                  <span className="flex-1 text-sm text-[#9ca3af]">joaosilva@gmail.com</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-[#6a7282] mb-2 block">Senha</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-[#618c78]/10 rounded-xl">
                  <Lock className="w-5 h-5 text-[#618c78]" />
                  <span className="flex-1 text-sm text-[#9ca3af]">••••••••</span>
                </div>
              </div>

              {mode === "login" && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-[#618c78] hover:text-[#4a7862] font-semibold"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
              )}

              <button
                onClick={onLogin}
                className="w-full bg-[#618c78] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#4a7862] transition-colors mt-6"
              >
                {mode === "login" ? "Entrar" : "Criar Conta"}
              </button>
            </div>

            {mode === "signup" && (
              <p className="text-xs text-[#6a7282] text-center mt-6">
                Ao criar uma conta, você concorda com nossos{" "}
                <button className="text-[#618c78] font-semibold">Termos de Uso</button>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex fixed inset-0 items-center justify-center bg-gray-100">
        <div className="w-full max-w-6xl h-[691px] flex rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Side - Hero Section */}
          <div
            className="flex-1 relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(-53.1381deg, rgb(149, 179, 135) 30.847%, rgb(97, 140, 120) 61.173%, rgb(202, 217, 150) 91.499%)"
            }}
          >
            <div className="absolute left-12 top-34">
              <h1 className="text-[32px] font-semibold text-white mb-16">Reserva Segura</h1>
              <h2 className="text-[56px] font-bold text-white leading-[64px] mb-6">
                Prepare-se para<br />o futuro
              </h2>
              <p className="text-[24px] text-white/90 leading-[31px] max-w-md">
                Aprenda a criar cofrinhos personalizados e alcance seus objetivos financeiros<br />com facilidade.
              </p>
            </div>

            {/* Dinosaur Image */}
            <div className="absolute left-[150px] bottom-[10px] w-[287px] h-[273px] flex items-center justify-center">
              <div className="transform rotate-180 scale-y-[-1]">
                <img
                  src={imgDinosaur}
                  alt="Dinosaur mascot"
                  className="w-[895px] h-[895px] object-contain"
                  style={{ marginTop: "-215px", marginLeft: "-35px" }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-[560px] bg-white rounded-l-[76px] flex items-center justify-center px-16">
            <div className="w-full max-w-md">
              {/* Toggle Buttons */}
              <div className="flex gap-2 mb-12">
                <button
                  onClick={() => setMode("login")}
                  className={`flex-1 py-3 rounded-2xl font-semibold text-[16px] transition-all ${
                    mode === "login"
                      ? "bg-[#618c78] text-white"
                      : "bg-[#f3f4f6] text-[#4a5565]"
                  }`}
                >
                  Entrar
                </button>
                <button
                  onClick={() => setMode("signup")}
                  className={`flex-1 py-3 rounded-2xl font-semibold text-[16px] transition-all ${
                    mode === "signup"
                      ? "bg-[#618c78] text-white"
                      : "bg-[#f3f4f6] text-[#4a5565]"
                  }`}
                >
                  Cadastrar
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {mode === "signup" && (
                  <div>
                    <label className="block text-sm font-semibold text-[#364153] mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <User className="w-5 h-5 text-[#99A1AF]" />
                      </div>
                      <div className="w-full h-14 bg-[rgba(97,140,120,0.32)] rounded-2xl pl-14 pr-4 flex items-center">
                        <span className="text-[16px] text-[rgba(10,10,10,0.5)]">João Silva</span>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-[#364153] mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-[#99A1AF]" />
                    </div>
                    <div className="w-full h-14 bg-[rgba(97,140,120,0.32)] rounded-2xl pl-14 pr-4 flex items-center">
                      <span className="text-[16px] text-[rgba(10,10,10,0.5)]">seu.email@exemplo.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#364153] mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Lock className="w-5 h-5 text-[#99A1AF]" />
                    </div>
                    <div className="w-full h-14 bg-[rgba(97,140,120,0.32)] rounded-2xl pl-14 pr-4 flex items-center">
                      <span className="text-[16px] text-[rgba(10,10,10,0.5)]">••••••••</span>
                    </div>
                  </div>
                </div>

                {mode === "login" && (
                  <div className="flex justify-center">
                    <button className="text-sm font-semibold text-[#096]">
                      Esqueceu a senha?
                    </button>
                  </div>
                )}

                <button
                  onClick={onLogin}
                  className="w-full h-14 bg-[#618c78] text-white rounded-2xl font-semibold text-[16px] hover:bg-[#4a7862] transition-colors"
                >
                  {mode === "login" ? "Entrar" : "Criar Conta"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

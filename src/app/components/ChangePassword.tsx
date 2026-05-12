import { ArrowLeft, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface ChangePasswordProps {
  onBack: () => void;
}

export default function ChangePassword({ onBack }: ChangePasswordProps) {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <h1 className="text-xl font-bold text-[#101828]">Mudar Senha</h1>
        </div>
      </div>

      <div className="p-4 pb-20">
        {/* Form Fields */}
        <div className="space-y-6 mt-8">
          {/* Senha Atual */}
          <div>
            <label className="text-sm text-[#a2a2a7] mb-3 block">Senha Atual</label>
            <div className="flex items-center gap-3 pb-3 border-b border-[#f4f4f4]">
              <Lock className="w-5 h-5 text-[#a2a2a7]" />
              <input
                type={showPassword.current ? "text" : "password"}
                placeholder="••••••••"
                className="flex-1 text-sm text-[#1e1e2d] outline-none"
              />
              <button
                onClick={() => setShowPassword(prev => ({ ...prev, current: !prev.current }))}
                className="text-[#a2a2a7] hover:text-[#1e1e2d]"
              >
                {showPassword.current ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Nova Senha */}
          <div>
            <label className="text-sm text-[#a2a2a7] mb-3 block">Nova Senha</label>
            <div className="flex items-center gap-3 pb-3 border-b border-[#f4f4f4]">
              <Lock className="w-5 h-5 text-[#a2a2a7]" />
              <input
                type={showPassword.new ? "text" : "password"}
                placeholder="••••••••"
                className="flex-1 text-sm text-[#1e1e2d] outline-none"
              />
              <button
                onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                className="text-[#a2a2a7] hover:text-[#1e1e2d]"
              >
                {showPassword.new ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirmar Nova Senha */}
          <div>
            <label className="text-sm text-[#a2a2a7] mb-3 block">Confirmar Nova Senha</label>
            <div className="flex items-center gap-3 pb-3 border-b border-[#f4f4f4]">
              <Lock className="w-5 h-5 text-[#a2a2a7]" />
              <input
                type={showPassword.confirm ? "text" : "password"}
                placeholder="••••••••"
                className="flex-1 text-sm text-[#1e1e2d] outline-none"
              />
              <button
                onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
                className="text-[#a2a2a7] hover:text-[#1e1e2d]"
              >
                {showPassword.confirm ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-xs text-[#a2a2a7]">
            As duas senhas devem ser iguais
          </p>
        </div>

        {/* Password Requirements */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-4 border border-blue-100">
          <h3 className="text-sm font-bold text-[#101828] mb-3">Requisitos da senha:</h3>
          <ul className="space-y-2 text-xs text-[#4a5565]">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#618c78] rounded-full" />
              Mínimo de 8 caracteres
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#618c78] rounded-full" />
              Pelo menos uma letra maiúscula
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#618c78] rounded-full" />
              Pelo menos um número
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button className="w-full bg-[#618c78] text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-[#4a7862] transition-colors">
            Mudar Senha
          </button>
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft, User, Mail, Phone } from "lucide-react";

interface EditProfileProps {
  onBack: () => void;
}

export default function EditProfile({ onBack }: EditProfileProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <h1 className="text-xl font-bold text-[#101828]">Editar Perfil</h1>
        </div>
      </div>

      <div className="p-4 pb-20">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-8 py-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl border-4 border-white shadow-lg mb-4" style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 50%, rgb(63, 168, 162) 100%)" }}>
            JS
          </div>
          <h2 className="text-xl font-bold text-[#101828] mb-1">João Silva</h2>
          <p className="text-sm text-[#7e848d]">Aspirante Nível 08</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Nome Completo */}
          <div>
            <label className="text-sm text-[#a2a2a7] mb-2 block">Nome Completo</label>
            <div className="flex items-center gap-3 pb-3 border-b border-[#f4f4f4]">
              <User className="w-5 h-5 text-[#a2a2a7]" />
              <input
                type="text"
                defaultValue="João Silva"
                className="flex-1 text-sm text-[#1e1e2d] outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-[#a2a2a7] mb-2 block">Endereço de Email</label>
            <div className="flex items-center gap-3 pb-3 border-b border-[#f4f4f4]">
              <Mail className="w-5 h-5 text-[#a2a2a7]" />
              <input
                type="email"
                defaultValue="joaosilva@gmail.com"
                className="flex-1 text-sm text-[#1e1e2d] outline-none lowercase"
              />
            </div>
          </div>

          {/* Telefone */}
          <div>
            <label className="text-sm text-[#a2a2a7] mb-2 block">Número de Telefone</label>
            <div className="flex items-center gap-3 pb-3 border-b border-[#f4f4f4]">
              <Phone className="w-5 h-5 text-[#a2a2a7]" />
              <input
                type="tel"
                defaultValue="(81) 90000 - 0000"
                className="flex-1 text-sm text-[#1e1e2d] outline-none"
              />
            </div>
          </div>

          {/* Data de Nascimento */}
          <div>
            <label className="text-sm text-[#7e848d] mb-3 block">Data de Nascimento</label>
            <div className="grid grid-cols-3 gap-4">
              <div className="pb-3 border-b border-[#f4f4f4]">
                <input
                  type="text"
                  defaultValue="28"
                  placeholder="Dia"
                  className="w-full text-sm text-[#1e1e2d] outline-none text-center"
                />
              </div>
              <div className="pb-3 border-b border-[#f4f4f4]">
                <input
                  type="text"
                  defaultValue="Setembro"
                  placeholder="Mês"
                  className="w-full text-sm text-[#1e1e2d] outline-none text-center capitalize"
                />
              </div>
              <div className="pb-3 border-b border-[#f4f4f4]">
                <input
                  type="text"
                  defaultValue="1997"
                  placeholder="Ano"
                  className="w-full text-sm text-[#1e1e2d] outline-none text-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Join Date */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#a2a2a7]">Entrou 20 de Janeiro de 2026</p>
        </div>

        {/* Save Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <button className="w-full bg-gradient-to-r from-[#88a983] to-[#3fa8a2] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all">
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
}

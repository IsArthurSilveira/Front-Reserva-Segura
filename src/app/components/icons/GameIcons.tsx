// Ícones padronizados do jogo

interface IconProps {
  className?: string;
  size?: number;
}

// Ícone de Moedas (consistente em todo o app)
export function CoinIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="9" fill="#F59E0B" />
      <circle cx="12" cy="12" r="6" fill="#FBBF24" />
      <path
        d="M12 8V16M8 12H16"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Ícone de XP (consistente em todo o app)
export function XPIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
        fill="#618C78"
        stroke="#618C78"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

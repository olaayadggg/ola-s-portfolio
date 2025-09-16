export const CursorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-8 h-8"
  >
    <defs>
      <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <circle cx="128" cy="128" r="120" fill="url(#cursorGrad)" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fontSize="110"
      fontWeight="bold"
      fill="white"
    >
      C
    </text>
  </svg>
);
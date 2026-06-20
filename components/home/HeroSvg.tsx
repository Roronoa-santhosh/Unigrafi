function HeroSvg({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative  ${className}`}>
      <svg
        viewBox="0 0 480 420"
        className="w-full h-auto"
        role="img"
        aria-label="Wall of framed poster art"
      >
        <rect width="480" height="420" rx="20" fill="#161616" />

        {/* Poster 1 */}
        <g transform="translate(30, 40)">
          <rect
            width="120"
            height="160"
            rx="6"
            fill="#0d0d0d"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="10"
            width="100"
            height="140"
            fill="#E87C2E"
            opacity="0.15"
          />
          <circle cx="60" cy="65" r="28" fill="#E87C2E" opacity="0.6" />
          <rect
            x="25"
            y="105"
            width="70"
            height="6"
            rx="3"
            fill="#E87C2E"
            opacity="0.8"
          />
          <rect x="35" y="118" width="50" height="4" rx="2" fill="#666" />
        </g>

        {/* Poster 2 */}
        <g transform="translate(170, 40)">
          <rect
            width="130"
            height="90"
            rx="6"
            fill="#0d0d0d"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          <rect x="10" y="10" width="110" height="70" fill="#3a3a3a" />
          <path
            d="M 20 60 L 50 30 L 75 50 L 110 20"
            stroke="#E87C2E"
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          />
        </g>

        {/* Poster 3 */}
        <g transform="translate(320, 30)">
          <rect
            width="110"
            height="110"
            rx="6"
            fill="#0d0d0d"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          <rect x="10" y="10" width="90" height="90" fill="#222" />
          <rect
            x="25"
            y="25"
            width="60"
            height="60"
            rx="30"
            fill="none"
            stroke="#E87C2E"
            strokeWidth="3"
            opacity="0.7"
          />
        </g>

        {/* Poster 4 */}
        <g transform="translate(170, 150)">
          <rect
            width="95"
            height="130"
            rx="6"
            fill="#0d0d0d"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          <rect x="8" y="8" width="79" height="114" fill="#262626" />
          <rect
            x="20"
            y="20"
            width="55"
            height="8"
            rx="4"
            fill="#E87C2E"
            opacity="0.9"
          />
          <rect x="20" y="36" width="40" height="6" rx="3" fill="#555" />
          <rect
            x="20"
            y="95"
            width="55"
            height="20"
            rx="4"
            fill="none"
            stroke="#E87C2E"
            strokeWidth="2"
            opacity="0.5"
          />
        </g>

        {/* Poster 5 */}
        <g transform="translate(285, 150)">
          <rect
            width="145"
            height="180"
            rx="6"
            fill="#0d0d0d"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          <rect x="10" y="10" width="125" height="160" fill="#1f1f1f" />
          <polygon
            points="72,30 110,90 95,150 50,150 35,90"
            fill="#E87C2E"
            opacity="0.5"
          />
          <circle cx="72" cy="90" r="10" fill="#E87C2E" />
        </g>

        {/* Poster 6 */}
        <g transform="translate(30, 220)">
          <rect
            width="120"
            height="100"
            rx="6"
            fill="#0d0d0d"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          <rect x="10" y="10" width="100" height="80" fill="#2c2c2c" />
          <rect
            x="20"
            y="60"
            width="80"
            height="20"
            fill="#E87C2E"
            opacity="0.6"
          />
          <rect
            x="20"
            y="20"
            width="50"
            height="30"
            fill="none"
            stroke="#888"
            strokeWidth="2"
          />
        </g>

        <rect x="20" y="395" width="440" height="2" fill="#222" />
      </svg>
    </div>
  );
}

export default HeroSvg;
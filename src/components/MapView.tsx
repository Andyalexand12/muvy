"use client";

export default function MapView() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-200">
      {/* SVG fake map - street grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 390 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background */}
        <rect width="390" height="600" fill="#e8ecef" />

        {/* Blocks */}
        <rect x="0" y="0" width="100" height="90" fill="#f1f3f5" rx="2" />
        <rect x="120" y="0" width="130" height="90" fill="#f1f3f5" rx="2" />
        <rect x="270" y="0" width="120" height="90" fill="#f1f3f5" rx="2" />

        <rect x="0" y="110" width="80" height="110" fill="#f1f3f5" rx="2" />
        <rect x="100" y="110" width="100" height="110" fill="#f1f3f5" rx="2" />
        <rect x="220" y="110" width="90" height="110" fill="#f1f3f5" rx="2" />
        <rect x="330" y="110" width="60" height="110" fill="#f1f3f5" rx="2" />

        <rect x="0" y="240" width="110" height="100" fill="#f1f3f5" rx="2" />
        <rect x="130" y="240" width="80" height="100" fill="#f1f3f5" rx="2" />
        <rect x="230" y="240" width="100" height="100" fill="#f1f3f5" rx="2" />
        <rect x="350" y="240" width="40" height="100" fill="#f1f3f5" rx="2" />

        <rect x="0" y="360" width="90" height="120" fill="#f1f3f5" rx="2" />
        <rect x="110" y="360" width="120" height="120" fill="#f1f3f5" rx="2" />
        <rect x="250" y="360" width="80" height="120" fill="#f1f3f5" rx="2" />
        <rect x="350" y="360" width="40" height="120" fill="#f1f3f5" rx="2" />

        <rect x="0" y="500" width="140" height="100" fill="#f1f3f5" rx="2" />
        <rect x="160" y="500" width="100" height="100" fill="#f1f3f5" rx="2" />
        <rect x="280" y="500" width="110" height="100" fill="#f1f3f5" rx="2" />

        {/* Main roads (wider, light) */}
        <rect x="0" y="95" width="390" height="16" fill="#ffffff" />
        <rect x="0" y="225" width="390" height="16" fill="#ffffff" />
        <rect x="0" y="345" width="390" height="16" fill="#ffffff" />
        <rect x="0" y="485" width="390" height="16" fill="#ffffff" />

        <rect x="100" y="0" width="22" height="600" fill="#ffffff" />
        <rect x="215" y="0" width="18" height="600" fill="#ffffff" />
        <rect x="330" y="0" width="22" height="600" fill="#ffffff" />

        {/* Road lines (dashes) */}
        {[0, 50, 100, 150, 200, 250, 300, 350].map((x) => (
          <rect key={x} x={x} y="102" width="30" height="2" fill="#d1d5db" />
        ))}
        {[0, 50, 100, 150, 200, 250, 300, 350].map((x) => (
          <rect key={x} x={x} y="232" width="30" height="2" fill="#d1d5db" />
        ))}

        {/* Green areas */}
        <rect x="140" y="120" width="70" height="80" fill="#bbf7d0" rx="4" />
        <rect x="10" y="380" width="70" height="60" fill="#bbf7d0" rx="4" />
        <circle cx="175" cy="160" r="15" fill="#86efac" />
        <circle cx="155" cy="175" r="10" fill="#86efac" />
        <circle cx="195" cy="170" r="12" fill="#86efac" />

        {/* Water */}
        <path d="M0 490 Q50 480 100 490 Q150 500 200 490 Q250 480 300 490 L300 510 L0 510Z" fill="#bfdbfe" />

        {/* Buildings */}
        <rect x="15" y="115" width="60" height="55" fill="#e2e8f0" rx="2" />
        <rect x="135" y="115" width="75" height="55" fill="#e2e8f0" rx="2" />
        <rect x="340" y="115" width="45" height="55" fill="#e2e8f0" rx="2" />

        {/* Special building - orange */}
        <rect x="240" y="120" width="75" height="60" fill="#fed7aa" rx="2" />
        <rect x="255" y="110" width="50" height="12" fill="#fb923c" rx="2" />

        {/* User pin */}
        <circle cx="195" cy="300" r="18" fill="#f97316" opacity="0.2" />
        <circle cx="195" cy="300" r="10" fill="#f97316" opacity="0.5" />
        <circle cx="195" cy="300" r="5" fill="#f97316" />
        <circle cx="195" cy="300" r="2" fill="white" />

        {/* Destination pin */}
        <path d="M280 200 C280 186 268 176 256 176 C244 176 232 186 232 200 C232 218 256 236 256 236 C256 236 280 218 280 200Z" fill="#ef4444" />
        <circle cx="256" cy="198" r="7" fill="white" />

        {/* Nearby moto drivers */}
        <g transform="translate(140, 260)">
          <circle r="14" fill="white" stroke="#f97316" strokeWidth="2" />
          <text fontSize="12" textAnchor="middle" dominantBaseline="middle">🏍️</text>
        </g>
        <g transform="translate(250, 330)">
          <circle r="14" fill="white" stroke="#f97316" strokeWidth="2" />
          <text fontSize="12" textAnchor="middle" dominantBaseline="middle">🏍️</text>
        </g>
        <g transform="translate(120, 200)">
          <circle r="14" fill="white" stroke="#f97316" strokeWidth="2" />
          <text fontSize="12" textAnchor="middle" dominantBaseline="middle">🏍️</text>
        </g>

        {/* Route line */}
        <path
          d="M195 300 L220 270 L250 250 L260 230 L256 210 L256 200"
          stroke="#f97316"
          strokeWidth="3"
          fill="none"
          strokeDasharray="6 3"
          strokeLinecap="round"
        />

        {/* Compass */}
        <circle cx="355" cy="180" r="18" fill="white" opacity="0.9" />
        <text x="355" y="185" fontSize="11" textAnchor="middle" fill="#374151" fontWeight="bold">N</text>
        <path d="M355 167 L358 178 L355 175 L352 178Z" fill="#ef4444" />
      </svg>

      {/* Scale bar overlay */}
      <div className="absolute bottom-48 left-4 bg-white/90 rounded-lg px-2 py-1 flex items-center gap-1 shadow">
        <div className="w-8 h-0.5 bg-gray-600" />
        <span className="text-xs text-gray-600">200m</span>
      </div>
    </div>
  );
}

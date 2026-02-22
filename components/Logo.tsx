"use client";

interface LogoProps {
  size?: number;
  textSize?: string;
  dark?: boolean;
}

// Bone shape as a small SVG path, used 8 times around the ring
function BonePath({
  x,
  y,
  angle,
  scale = 1,
  dark = false,
}: {
  x: number;
  y: number;
  angle: number;
  scale?: number;
  dark?: boolean;
}) {
  const color = dark ? "#F7F3EC" : "#0A0A0A";
  return (
    <g transform={`translate(${x},${y}) rotate(${angle}) scale(${scale})`}>
      {/* Bone: two knobby ends connected by a shaft */}
      <circle cx="-7" cy="0" r="2.8" fill={color} />
      <circle cx="-7" cy="0" r="2.8" fill={color} transform="translate(0,-3) scale(0.6,0.5)" />
      <circle cx="-7" cy="0" r="2.8" fill={color} transform="translate(0,3) scale(0.6,0.5)" />
      <rect x="-7" y="-1.2" width="14" height="2.4" rx="1.2" fill={color} />
      <circle cx="7" cy="0" r="2.8" fill={color} />
      <circle cx="7" cy="0" r="2.8" fill={color} transform="translate(0,-3) scale(0.6,0.5)" />
      <circle cx="7" cy="0" r="2.8" fill={color} transform="translate(0,3) scale(0.6,0.5)" />
    </g>
  );
}

export default function Logo({ size = 110, textSize = "text-xl", dark = false }: LogoProps) {
  const r = size * 0.42; // ring radius
  const cx = size / 2;
  const cy = size / 2;
  const boneCount = 8;
  const textColor = dark ? "text-[#F7F3EC]" : "text-[#0A0A0A]";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Rotating bone ring */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 logo-ring"
        aria-hidden="true"
      >
        {Array.from({ length: boneCount }).map((_, i) => {
          const angle = (360 / boneCount) * i;
          const rad = (angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy + r * Math.sin(rad);
          return (
            <BonePath
              key={i}
              x={x}
              y={y}
              angle={angle + 90}
              scale={size / 220}
              dark={dark}
            />
          );
        })}
      </svg>

      {/* KLYSHI text */}
      <span
        className={`relative z-10 font-handwritten font-bold leading-none select-none ${textSize} ${textColor}`}
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        KLYSHI
      </span>
    </div>
  );
}

import React from 'react';

export interface LogoProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  variant?: 'default' | 'light' | 'dark';
}

export function LogoIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-label="Karunya Sugalaya Logo Icon"
    >
      <title>Karunya Sugalaya</title>
      {/* Top Orange Polygon */}
      <path d="M13 16 L75 31 L13 31 Z" fill="#FF5B1B" />
      {/* Left Purple/Indigo Polygon */}
      <path d="M13 31 L27 84 L42 73 Z" fill="#422884" />
      {/* Right Emerald Green Polygon */}
      <path d="M42 73 L75 31 L87 38 Z" fill="#1AA862" />
    </svg>
  );
}

export default function Logo({
  className = '',
  iconClassName = 'h-11 sm:h-12 w-auto shrink-0',
  showText = true,
  variant = 'default',
}: LogoProps) {
  const titleColor =
    variant === 'light'
      ? 'text-white'
      : variant === 'dark'
      ? 'text-[#0F172A]'
      : 'text-[#0F172A]';

  const subtitleColor =
    variant === 'light'
      ? 'text-[#06B6D4]'
      : variant === 'dark'
      ? 'text-[#0D5C75]'
      : 'text-[#0D5C75]';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon className={iconClassName} />
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`text-lg sm:text-2xl font-extrabold tracking-tight leading-none ${titleColor}`}
          >
            Karunya Sugalaya
          </span>
          <span
            className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1 ${subtitleColor}`}
          >
            Diabetes Care &amp; Research Centre
          </span>
        </div>
      )}
    </div>
  );
}

import { Calendar } from 'lucide-react';

const CAL_URL = "https://cal.com/creavibes/decouverte";

interface CTAButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CTAButton({ className = "", size = "md" }: CTAButtonProps) {
  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-6 py-3.5 md:px-8 md:py-4 text-base",
    lg: "px-8 py-4 md:px-10 md:py-5 text-lg",
  };

  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-[#0ea5e9]/25 hover:shadow-xl hover:shadow-[#0ea5e9]/30 hover:-translate-y-0.5 ${sizes[size]} ${className}`}
    >
      <Calendar className="w-5 h-5" />
      Prendre RDV en visio
    </a>
  );
}

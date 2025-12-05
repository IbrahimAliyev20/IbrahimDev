import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface QuickLinkCardProps {
  href: string;
  gradientClasses: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  textColorClass: string;
  backgroundImage?: string; 
}

export function QuickLinkCard({
  href,
  gradientClasses,
  icon,
  title,
  description,
  cta,
  textColorClass,
  backgroundImage
}: QuickLinkCardProps) {
  return (
    <div>
      <Link href={href}>
        <div
          className={`p-10 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${gradientClasses} bg-cover bg-center`}
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
          }}
        >
          <div className="text-4xl mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className={`${textColorClass} mb-4`}>{description}</p>
          <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
            {cta} <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  )
}

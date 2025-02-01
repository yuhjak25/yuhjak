import { ReactNode } from 'react'

interface IconsButtonProps {
  href: string
  icon: ReactNode
  altText: string
}
const IconsButton = ({ href, icon, altText }: IconsButtonProps) => {
  const defaultAltText = altText || 'Icono del botón'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={defaultAltText}
      className="text-white border-1 border-zinc-700 p-2 mr-4  hover:border-orange-500 transition-colors duration-300 ease-in"
      type="button">
      {icon}
    </a>
  )
}

export default IconsButton

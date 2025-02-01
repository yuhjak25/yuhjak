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
      aria-label={defaultAltText}>
      {icon}
    </a>
  )
}

export default IconsButton

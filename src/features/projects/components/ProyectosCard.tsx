interface ProyectosCardProps {
  title: string
  description: string
  imgSrc: string
  altText: string
  gitLink: string
}

const ProyectosCard = ({
  title,
  description,
  imgSrc,
  altText,
  gitLink,
}: ProyectosCardProps) => {
  return (
    <div>
      <img
        className="cursor-zoom-in text-zinc-700 transform transition-transform ease-in duration-300 hover:scale-200"
        src={imgSrc}
        alt={altText}
        loading="lazy"
        role="img"
        aria-label={altText}
      />
      <h4 className="text-orange-500 text-1xl font-bold">{title}</h4>
      <p className="text-zinc-200 pb-2">
        {description}
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver el repositorio de ${title}`}
          title={`Accede al repositorio de ${title} en GitHub`}
          className="flex items-center text-zinc-600 text-sm hover:underline hover:decoration-dotted hover:text-zinc-200 transition-colors duration-300 ease-in">
          Repositorio{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right ml-1">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </p>
    </div>
  )
}

export default ProyectosCard

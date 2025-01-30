const Header = () => {
  return (
    <div>
      <div className="flex items-center pb-4 pt-10">
        <h1 className="text-3xl text-orange-500 font-bold pr-2">Unai</h1>
        <span className="text-1xl font-semibold text-zinc-600 hover:text-zinc-200 transition-colors duration-300 ease-in-out">
          ～ @yuhjak25
        </span>
      </div>
      <article>
        <h1 className="text-white text-5xl font-extrabold">
          Estudiando Desarrollo de Aplicaciones Web
        </h1>
        <p className="text-gray-200 pt-4">
          Apasionado por aprender y crear aplicaciones web innovadoras. Enfocado
          en mejorar continuamente mis habilidades y construir soluciones
          digitales impactantes. De Madrid, España 🇪🇸.
        </p>
      </article>
      <section>
        <p className="text-orange-400 animate-pulse pb-0.5">
          • Estudiando, no disponible.
        </p>
        <div className="flex items-center pt-0.5">
          <button className="text-white border-2 border-zinc-700 rounded-xl p-2 mr-2 hover:border-orange-500 transition-colors duration-300 ease-in-out">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yuhjakcontact@gmail.com&su=Contacto"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-orange-500 icon icon-tabler icons-tabler-outline icon-tabler-mail-forward">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                <path d="M3 6l9 6l9 -6" />
                <path d="M15 18h6" />
                <path d="M18 15l3 3l-3 3" />
              </svg>
            </a>
          </button>
          <button className="text-white border-2 border-zinc-700 rounded-xl p-2 mr-2 hover:border-orange-500 transition-colors duration-300 ease-in-out">
            <a href="https://github.com/yuhjak25" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-orange-500 icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Header

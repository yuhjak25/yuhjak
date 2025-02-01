import yuhjakNewLogo from '../../assets/Logo-yuhjak-nuevo.svg'

const SobreMi = () => {
  return (
    <div>
      <section className="pt-20">
        <h3 className="text-white text-3xl font-bold">Sobre mí</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-200">
            Hola, soy Unai, aunque muchos me conocen como yuhjak. Actualmente
            estoy{' '}
            <span className="text-orange-400">
              cursando módulos para convertirme en desarrollador web
            </span>
            , una profesión que me apasiona y me entretiene. Mi objetivo es
            adquirir las habilidades necesarias para trabajar en el ámbito del
            desarrollo web y seguir creciendo profesionalmente.
          </p>
          <img
            src={yuhjakNewLogo}
            alt="Logo de Yuhjak, nombre de usuario de Unai"
            className="size-50 ml-4 sm:ml-0 sm:mt-0 mt-4"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}

export default SobreMi

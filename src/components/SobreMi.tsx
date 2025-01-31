import yuhjakNewLogo from '../assets/Logo-yuhjak-nuevo.svg'

const SobreMi = () => {
  return (
    <div>
      <section className="pt-20">
        <h3 className="text-white text-3xl font-bold">Sobre mí</h3>
        <div className="flex items-center justify-center">
          <p className="text-gray-200 ">
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
            alt="Logo de yuhjak"
            className="size-50 rounded-2xl ml-4"
          />
        </div>
      </section>
    </div>
  )
}

export default SobreMi

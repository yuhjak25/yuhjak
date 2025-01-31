import { quantum } from 'ldrs'
import Header from './components/Header'
import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'
import Footer from './components/Footer'

quantum.register()
const App = () => {
  return (
    <>
      <div className="relative h-full w-full bg-black overflow-hidden">
        <section className="mx-auto max-w-[696px] p-6 pb-12 relative z-10">
          <Header />
          <Proyectos />
          <SobreMi />
          <Footer />
        </section>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] sm:bg-[size:8px_14px] md:bg-[size:16px_28px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] sm:h-[600px] sm:w-[600px] md:h-[800px] md:w-[800px]"></div>
      </div>
    </>
  )
}

export default App

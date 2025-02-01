import Astro from '../../assets/icons/Astro'
import Bun from '../../assets/icons/Bun'
import Expressjs from '../../assets/icons/Ex'
import JavaScript from '../../assets/icons/JS'
import MongoDB from '../../assets/icons/MongoDB'
import Nodejs from '../../assets/icons/Node'
import Python from '../../assets/icons/Python'
import ReactIcon from '../../assets/icons/ReactIcon'
import Redux from '../../assets/icons/Redux'
import PostgreSQL from '../../assets/icons/SQL'
import TypeScript from '../../assets/icons/Typescript'
import Vite from '../../assets/icons/Vite'

const skills = [
  { Icon: ReactIcon, name: 'React' },
  { Icon: Redux, name: 'Redux' },
  { Icon: Vite, name: 'Vite' },
  { Icon: TypeScript, name: 'TypeScript' },
  { Icon: JavaScript, name: 'JavaScript' },
  { Icon: Nodejs, name: 'Node.js' },
  { Icon: Expressjs, name: 'Express.js' },
  { Icon: Bun, name: 'Bun' },
  { Icon: MongoDB, name: 'MongoDB' },
]

const learning = [{ Icon: Python, name: 'Python' }]
const wannaLearn = [
  { Icon: PostgreSQL, name: 'PostgreSQL' },
  { Icon: Astro, name: 'Astro' },
]

const Skills = () => {
  return (
    <article className="pt-15">
      <h3 className="text-white text-3xl font-bold">Skill</h3>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-white">
        <div className="p-4 border-2 border-zinc-700">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map(({ Icon, name }, index) => (
              <div key={index} className="flex flex-col items-center">
                <Icon
                  aria-label={`${name} icon`}
                  className="w-10 h-10 text-zinc-600"
                />
                <span className="text-sm mt-1">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-3 border-2 border-zinc-700">
            <h2 className="text-lg font-semibold">Learning</h2>
            <div className="flex gap-3 mt-2">
              {learning.map(({ Icon, name }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon aria-label={`${name} icon`} className="w-7 h-7" />
                  <span className="text-sm mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 border-2 border-zinc-700">
            <h2 className="text-lg font-semibold">Wanna Learn</h2>
            <div className="flex gap-3 mt-2">
              {wannaLearn.map(({ Icon, name }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon aria-label={`${name} icon`} className="w-7 h-7" />
                  <span className="text-sm mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </article>
  )
}

export default Skills

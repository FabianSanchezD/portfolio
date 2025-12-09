import Image from "next/image";
import Link from "next/link";

const projects = [
  {"title": "Drop-In",
   "description": "Drop in on study sessions or casual meetups for students. Create and join impromptu reunions around campus.",
   "github": "https://github.com/FabianSanchezD/dropin",
   "techstack":["Vite + React", "Supabase", "Tailwind CSS"],
   "website": "https://dropin-alpha.vercel.app/",
   "imagesrc": "/projects/dropin.jpeg"
  },
  {
    "title" : "Kleo Protocol",
    "description" : "Kleo is a DeFi lending/borrowing protocol based around trust and math, not collateral. The idea is to prevent shark loans, all thanks to Polkadot Passet Hub and ink! contracts (development still active, in collaboration with Santiago Villareal).",
    "github": "https://github.com/Kleo-Protocol",
    "techstack": ["Polkadot Passet Hub", "ink!", "Rust"],
    "website": "https://kleo-dapp-2-icw7kjymn.vercel.app/",
    "imagesrc": "/projects/kleo.png"
  },
  {
    "title" : "Neko Protocol",
    "description" : "Neko is a DeFi lending/borrowing protocol and liquidity layer for RWAs on Stellar. We're bringing real-world assets to Stellar DeFi, making them cool and accessible (development still active, in collaboration with Santiago Villareal and Matias Aguilar).",
    "github": "https://github.com/Neko-Protocol",
    "techstack": ["Stellar", "React", "Soroban"],
    "website": "https://nekoprotocol.xyz",
    "imagesrc": "/projects/neko.png"
  }
]

const ProjectSection = () => {
  return (
    <div id="projects" className="flex flex-col gap-6 items-center">
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-6 shadow-lg rounded-2xl bg-gray-800 p-6 max-w-4xl w-full">
          <div className="md:w-1/2 justify-center flex items-center">
            <Image
              src={project.imagesrc}
              alt={project.title}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <Link 
                href={project.github} 
                className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                GitHub
              </Link>
              <Link 
                href={project.website} 
                className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Demo
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectSection
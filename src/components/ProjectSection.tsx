import Image from "next/image";
import Link from "next/link";

const projects = [
  {"title": "Drop-In",
   "description": "Drop in on study sessions or casual meetups for students. Create and join impromptu reunions around campus.",
   "github": "https://github.com/FabianSanchezD/dropin",
   "techstack":["Vite + React", "Supabase", "Tailwind CSS"],
   "website": "https://dropin-alpha.vercel.app/",
   "imagesrc": "/projects/dropin.png"
  },
]

const ProjectSection = () => {
  return (
    <div id="projects" className="flex flex-col gap-6 items-center">
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-6 shadow-lg rounded-2xl bg-gray-800 p-6 max-w-4xl w-full">
          <div className="md:w-1/2">
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
      <div className="shadow-lg rounded-2xl bg-gray-800 p-4 max-w-4xl w-full text-center font-bold text-2xl">More soon!</div>
    </div>
  )
}

export default ProjectSection
import Link from 'next/link'
import Image from 'next/image'

const experiences = [
    {
        "title": "Aleph Hackathon",
        "description": "Winners of 2nd Place in the Aleph Hackathon (Filecoin Track). We built a DApp that added transparency to government tenders and bidding. All official documents were stored on-chain with Filecoin, and all processes were posible with Ethereum Smart Contracts.",
        "date": "August 2025",
        "link": "https://github.com/Althara-Labs/althara-dapp",
        "image": "/experiences/aleph-winners.jpeg",
    },
]

const ExperiencesSection = () => {
  return (
    <div id="experiences" className="flex flex-col gap-6 items-center">
      <h1 className="text-5xl font-bold text-center">Experiences</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-6 shadow-lg rounded-2xl bg-gray-600 p-6 max-w-4xl w-full">
          <div className="md:w-1/2">
            <Image
              src={experience.image}
              alt={experience.title}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-white">{experience.title}</h2>
            <p className="text-gray-300 leading-relaxed">{experience.description}</p>
            <div className="flex mt-auto">
              <Link 
                href={experience.link} 
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Link
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperiencesSection
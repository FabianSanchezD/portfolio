import Link from 'next/link'
import Image from 'next/image'

const experiences = [
    {
        "title": "Aleph Hackathon",
        "description": "Winners of 2nd Place in the Aleph Hackathon (LATAM's biggest hackathon) in the Filecoin Track. We built a DApp that added transparency to government tenders and bidding. All processes were posible with Ethereum Smart Contracts and Filecoin.",
        "date": "August 2025",
        "link": "https://github.com/Althara-Labs/althara-dapp",
        "image": "/experiences/aleph-winners.jpeg",
    },
    {
      "title":"Meridian 2025 Participation",
      "description": "Participated in HackMeridian and Meridian 2025, hosted by Stellar in Rio de Janeiro, Brazil. We built a DApp and infrastructure for DApps to facilitate the identity process for web3 users on Stellar. I networked with other builders from around the world.",
      "date": "September 2025",
      "link": "https://www.linkedin.com/posts/fabian-sanchez-d_last-week-i-was-honored-to-attend-meridian-activity-7376079520782577664-x7IA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEOBTqgBi42tA73lkUp72sxwJdY3u3CmxhU",
      "image":"/experiences/meridian2025.avif"
    }
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
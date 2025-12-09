import Link from 'next/link'
import Image from 'next/image'

const experiences = [
    {
        "title": "Aleph Hackathon 2025",
        "description": "Winners of 2nd Place in the Aleph Hackathon (LATAM's biggest hackathon) in the Filecoin Track. We built a DApp that added transparency to government tenders and bidding called Althara Pacta. All processes were posible with Ethereum Smart Contracts and Filecoin.",
        "date": "August 2025",
        "link": "https://github.com/Althara-Labs/althara-dapp",
        "image": "/experiences/aleph-winners.jpeg",
    },
    {
      "title":"Meridian 2025 Participation",
      "description": "Participated in HackMeridian and Meridian 2025, hosted by Stellar in Rio de Janeiro, Brazil. We built a DApp and infrastructure for DApps to facilitate the identity process for web3 users on Stellar called Veridion. I networked with other builders from around the world.",
      "date": "September 2025",
      "link": "https://www.linkedin.com/posts/fabian-sanchez-d_last-week-i-was-honored-to-attend-meridian-activity-7376079520782577664-x7IA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEOBTqgBi42tA73lkUp72sxwJdY3u3CmxhU",
      "image":"/experiences/meridian2025.png"
    },
    {
      "title" : "Sub0 Symbiosis Event + Hackathon 2025",
      "description" : "Winners of the Sub0 Symbiosis Hackathon (Polkadot Main Track) in Argentina. We built Kleo, a DeFi lending/borrowing protocol based around trust and math, not collateral. The idea is to prevent shark loans, all thanks to Polkadot Passet Hub and ink! contracts (idea still in development). Also, met a ton of great people in the Polkadot ecosystem.",
      "date" : "November 2025",
      "link": "https://github.com/Kleo-Protocol",
      "image" : "/experiences/kleo-protocol.png"
    },
    {
      "title" : "Stellar Week + Hackathon 2025",
      "description" : "Winners of 3rd Place and Innovation Award in the Stellar Hack+ 2025 hosted in Buenos Aires, Argentina. We built a DeFi lending/borrowing protocol and liquidity layer for RWAs called Neko. RWAs are meant to be cool, so we're doing it. Also, participated in the workshops and networked with tons of people on Stellar.",
      "date" : "November 2025",
      "link": "https://github.com/Neko-Protocol",
      "image" : "/experiences/neko-protocol.png"
    }
]

const ExperiencesSection = () => {
  return (
    <div id="experiences" className="flex flex-col gap-6 items-center">
      <h1 className="text-5xl font-bold text-center">Experiences</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-6 shadow-lg rounded-2xl bg-gray-600 p-6 max-w-4xl w-full">
          <div className="md:w-1/2 justify-center flex items-center">
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
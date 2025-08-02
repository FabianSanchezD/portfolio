import Image from "next/image"

const AboutSection = () => {
  return (
    <div className="flex lg:flex-row gap-5 flex-col items-center">
        <div className="font-sans text-center max-w-2xl">
            <h1 className="text-6xl font-bold pb-1">Hello there!</h1>
            <h1 className="text-6xl font-bold">I'm Fabián Sánchez.</h1>
            <h2 className="text-3xl pt-1 pb-2">Full-Stack Developer</h2>
            <p className="text-xl pb-1">I am a Computer Science (Ing. Sistemas) student at TEC, Costa Rica! I really enjoy programming and I have created projects with multiple technologies and stacks.</p>
            <p className="text-xl pb-2.5">Also, I am interested in multiple fields such as front-end and back-end development, blockchain and AI. One of my core skills is communication.</p>
            <p className="text-xl italic text-amber-50">We suffer more in imagination than in reality. - Seneca</p>

        </div>
        <div>
            <Image
            src="/myself.jpg"
            alt="Image of Fabián Sánchez"
            className="rounded-xl"
            width={370}
            height={370}
            />
        </div>
    </div>
  )
}

export default AboutSection
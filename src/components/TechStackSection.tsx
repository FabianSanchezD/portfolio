import Image from "next/image"

const TechStackSection = () => {
  return (
    <div className="flex flex-col gap-3 text-3xl font-semibold items-center text-center ">
        <h1 className="text-5xl font-bold">Tech Stack</h1>
        <h2>Frontend</h2>
        <div className="flex flex-rows gap-3">
            <Image
            src="/logos/typescript_logo.png"
            alt="Logo of TypeScript"
            width={50}
            height={50}
            />
            <Image
            src="/logos/javascript_logo.png"
            alt="Logo of Javascript"
            width={50}
            height={50}
            />
            <Image
            src="/logos/nextjs_logo.png"
            alt="Logo of Next.js"
            width={50}
            height={50}
            />
            <Image
            src="/logos/react_logo.png"
            alt="Logo of React"
            width={50}
            height={50}
            />
            <Image
            src="/logos/tailwindcss_logo.png"
            alt="Logo of TailwindCSS"
            width={50}
            height={50}
            className="object-contain"
            />
        </div>
        <h2>Backend</h2>
        <div className="flex flex-rows gap-3">
            <Image
            src="/logos/nodejs_logo.webp"
            alt="Logo of Node.js"
            width={50}
            height={50}
            />
            <Image
            src="/logos/expressjs_logo.png"
            alt="Logo of Express"
            width={50}
            height={50}
            />
            <Image
            src="/logos/python_logo.webp"
            alt="Logo of Python"
            width={50}
            height={50}
            />
            <Image
            src="/logos/fastapi_logo.png"
            alt="Logo of FastAPI"
            width={50}
            height={50}
            />
        </div>
        <h2>Tools & DBs</h2>
        <div className="flex flex-rows gap-3">
            <Image
            src="/logos/git_logo.png"
            alt="Logo of Git"
            width={50}
            height={50}
            />
            <Image
            src="/logos/github_logo.svg"
            alt="Logo of Github"
            width={50}
            height={50}
            />
            <Image
            src="/logos/supabase_logo.png"
            alt="Logo of Supabase (also backend)"
            width={50}
            height={50}
            />
            <Image
            src="/logos/vercel_logo.svg"
            alt="Logo of Vercel"
            width={50}
            height={50}
            />
        </div>
    </div>
  )
}

export default TechStackSection
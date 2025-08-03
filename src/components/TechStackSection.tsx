import * as motion from "motion/react-client"

const TechStackSection = () => {
    const imageStyle = {
    width: 50,
    height: 50,
    borderRadius: 0,
    cursor: "pointer",
    objectFit: "cover" as const,
  }

    const imageStyleTailwind = {
    width: 50,
    height: 50,
    borderRadius: 0,
    cursor: "pointer",
    objectFit: "contain" as const,
  }

  return (
    <div className="flex flex-col gap-3 text-3xl font-semibold items-center text-center py-6">
        <h1 className="text-5xl font-bold">Tech Stack</h1>
        <h2>Frontend</h2>
        <div className="flex flex-rows gap-3">
          <motion.img
            src="/logos/typescript_logo.png"
            alt="Logo of TypeScript"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/javascript_logo.png"
            alt="Logo of Javascript"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/nextjs_logo.png"
            alt="Logo of Next.js"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/react_logo.png"
            alt="Logo of React"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/tailwindcss_logo.png"
            alt="Logo of TailwindCSS"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyleTailwind}
          />
        </div>
        <h2>Backend</h2>
        <div className="flex flex-rows gap-3">
          <motion.img
            src="/logos/nodejs_logo.webp"
            alt="Logo of Node.js"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/expressjs_logo.png"
            alt="Logo of Express"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/python_logo.webp"
            alt="Logo of Python"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/fastapi_logo.png"
            alt="Logo of FastAPI"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
        </div>
        <h2>Tools & DBs</h2>
        <div className="flex flex-rows gap-3">
          <motion.img
            src="/logos/git_logo.png"
            alt="Logo of Git"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/github_logo.svg"
            alt="Logo of Github"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/supabase_logo.png"
            alt="Logo of Supabase (also backend)"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
          <motion.img
            src="/logos/vercel_logo.svg"
            alt="Logo of Vercel"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={imageStyle}
          />
        </div>
    </div>
  )
}

export default TechStackSection
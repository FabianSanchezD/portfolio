import Link from "next/link"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center font-sans">
        <h1 className="text-6xl font-bold text-gray-500 mb-4">404</h1>
        <h2 className="text-xl text-gray-500">Not found! Go back <Link href='/' className="text-blue-500 hover:text-blue-700">home</Link>.</h2>
    </div>
  )
}

export default NotFound
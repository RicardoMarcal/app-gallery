import Link from "next/link"

function Header() {
  return (
    <div className="border-b py-5 w-full">
        <Link href='/'>
            <h1 className="text-6xl font-bold text-blue-900 cursor-pointer">App Gallery</h1>
        </Link>
        <p className="mt-3 text-2xl">by Ricardo Marçal</p>
    </div>
  )
}

export default Header
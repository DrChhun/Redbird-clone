import Link from "next/link"

function Home() {
  return (
    <div className="text-center py-56">
      <Link className="text-3xl font-bold" href="/home">👉🏻 HOME PAGE 👈🏻</Link>
    </div>
  )
}

export default Home
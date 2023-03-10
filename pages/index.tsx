import Link from "next/link"

function Home() {
  return (
    <div className="text-center">
      <h1>List components</h1>
      <Link href="/card">card</Link><br />
      <Link href="/heading">heading</Link><br />
      <Link href="/button">button</Link><br />
      <Link href="/learn">Learn</Link><br />
      <Link href="/hero">Hero</Link><br />
      <Link href="/navigation">navigation</Link>
    </div>
  )
}

export default Home
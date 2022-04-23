import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/ticket.png" width={50} height={48} />
        <h1>ticket</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          
        </ul>
      </nav>
      <div className="banner">
        <Image src="/memes.jpeg" width={966} height={276} />
      </div>
    </div>
  )
}
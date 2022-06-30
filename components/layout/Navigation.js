import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>

        <li>
          <Link href="/about"><a>About</a></Link>
        </li>

        <li>
          <Link href="/login"><a>Login</a></Link>
        </li>

      </ul>
    </nav>
  )
}

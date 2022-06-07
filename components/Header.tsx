import Link from 'next/link'
import { useAtom } from 'jotai'
import { HeaderNavLink, headerNavLinks } from '$lib/jotai'

type HeaderProps = {}

export default function Header({}: HeaderProps) {
  const [navLinks] = useAtom(headerNavLinks)

  return (
    <header className="mb-4 bg-white px-10 shadow">
      <nav className="flex flex-wrap space-x-4 py-2">
        {navLinks.map(l => (
          <NavLink key={l.href} {...l} />
        ))}
      </nav>
    </header>
  )
}

const NavLink = ({ href, title }: HeaderNavLink) => (
  <Link href={href}>
    <a className="block rounded px-4 py-2 text-base font-semibold text-gray-800 hover:bg-gray-100 hover:text-gray-800 hover:no-underline">
      {title}
    </a>
  </Link>
)

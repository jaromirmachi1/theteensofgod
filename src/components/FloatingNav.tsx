import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const navItems = [
  { label: 'Úvod', href: '#uvod', id: 'uvod' },
  { label: 'Témata', href: '#temata', id: 'temata' },
  { label: 'Recenze', href: '#recenze', id: 'recenze' },
  { label: 'Ceník', href: '#cenik', id: 'cenik' },
  { label: 'Kontakt', href: '#kontakt', id: 'kontakt' },
] as const

const Nav = styled(motion.nav)`
  position: fixed;
  left: 50%;
  bottom: clamp(1rem, 3vw, 2rem);
  z-index: 30;
  display: flex;
  max-width: calc(100vw - 2rem);
  padding: 0.35rem;
  border: 1px solid rgba(247, 245, 238, 0.16);
  border-radius: 999px;
  background:
    radial-gradient(circle at 16% 20%, rgba(151, 203, 143, 0.18), transparent 11rem),
    rgba(5, 7, 13, 0.76);
  box-shadow: 0 1.2rem 4rem rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(24px);
  transform: translateX(-50%);

  @media (max-width: 720px) {
    overflow-x: auto;
  }
`

const NavLink = styled.a<{ $active?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.8rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  color: ${({ $active }) => ($active ? '#07110b' : 'rgba(247, 245, 238, 0.72)')};
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.09em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  transition:
    color 0.24s ease,
    transform 0.24s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: ${({ $active }) => ($active ? 'linear-gradient(135deg, #97cb8f, #9df5d1)' : 'transparent')};
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.24s ease;
  }

  &:hover {
    color: ${({ $active }) => ($active ? '#07110b' : '#f7f5ee')};
    transform: translateY(-1px);
  }
`

function FloatingNav() {
  const [activeSection, setActiveSection] = useState<(typeof navItems)[number]['id']>('uvod')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as (typeof navItems)[number]['id'])
        }
      },
      {
        rootMargin: '-38% 0px -45% 0px',
        threshold: [0.12, 0.28, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <Nav
      aria-label="Hlavní navigace"
      initial={{ opacity: 0, x: '-50%', y: 26 }}
      animate={{ opacity: 1, x: '-50%', y: 0 }}
      transition={{ duration: 0.75, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {navItems.map((item) => (
        <NavLink key={item.id} href={item.href} $active={activeSection === item.id} aria-current={activeSection === item.id ? 'page' : undefined}>
          {item.label}
        </NavLink>
      ))}
    </Nav>
  )
}

export default FloatingNav

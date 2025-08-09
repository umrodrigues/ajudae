'use client'
import { useState, useRef, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import styles from './HamburgerMenu.module.scss'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (!wrapperRef.current) return
      if (e.target instanceof Node && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside)
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        className={styles.icon}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(v => !v)}
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`} role="menu" aria-hidden={!isOpen}>
        <a role="menuitem" href="/" onClick={() => setIsOpen(false)}>Início</a>
        <a role="menuitem" href="/contato" onClick={() => setIsOpen(false)}>Contato</a>
      </nav>
    </div>
  )
}

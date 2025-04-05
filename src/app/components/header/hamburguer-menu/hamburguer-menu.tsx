'use client'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import styles from './HamburgerMenu.module.scss'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className={styles.icon} onClick={toggleMenu}>
        {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
      </div>

      <div className={isOpen ? styles.menu : styles.hidden}>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Voluntariar</a>
        <a href="#">Contato</a>
      </div>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'
import HamburgerMenu from './hamburguer-menu/hamburguer-menu'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/assets/logo2.png"
            alt="Logo Ajudaê"
            width={80}
            height={80}
            className={styles.logo}
          />
          <span className={styles.title}>Ajudaê</span>
        </Link>
        <HamburgerMenu />
      </div>
    </header>
  )
}

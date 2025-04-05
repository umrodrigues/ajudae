import Image from 'next/image'
import styles from './Header.module.scss'
import HamburgerMenu from './hamburguer-menu/hamburguer-menu'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/assets/logo2.png" alt="Logo Ajudaê" width={90} height={90} />
        <span className={styles.title}>Ajudaê</span>
      </div>
      <HamburgerMenu />
    </header>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './HomeContent.module.scss'

const MotionLink = motion(Link)

export default function HomeContent() {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.textContent}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>Conecte-se com oportunidades de voluntariado</h1>
        <p>Junte-se a ONGs que precisam de voluntários</p>
        <MotionLink
          href="/oportunidades"
          className={styles.button}
          whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }}
          whileTap={{ scale: 0.95 }}
        >
          Explorar oportunidades
        </MotionLink>
      </motion.div>
      <motion.div
        className={styles.imageContent}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="/assets/ong.png"
          alt="Pessoas se conectando"
          width={500}
          height={500}
          priority
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </motion.div>
    </section>
  )
}

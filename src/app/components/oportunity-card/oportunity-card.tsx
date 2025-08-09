'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './OportunityCard.module.scss'

interface OportunityCardProps {
  title: string
  image: string
}

export default function OportunityCard({ title, image }: OportunityCardProps) {
  function handleClick() {
    console.log('Quero me voluntariar')
  }

  return (
    <motion.div
      className={styles.productCard}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick()
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }}
          priority
        />
      </div>
      <h3 className={styles.productTitle}>{title}</h3>
      <button
        type="button"
        className={styles.volunteerButton}
        onClick={(e) => {
          e.stopPropagation()
          handleClick()
        }}
      >
        Quero me voluntariar
      </button>
    </motion.div>
  )
}

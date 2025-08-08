'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './OportunityContent.module.scss'
import { oportunitys } from './__mocks__/oportunity.mock'



export default function OportunityContent() {
  return (
    <section className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Oportunidades em Destaque
      </motion.h2>
      <motion.div
        className={styles.productsGrid}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {oportunitys.map(({ id, title, image }) => (
          <motion.div
            key={id}
            className={styles.productCard}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.3)' }}
            whileTap={{ scale: 0.95 }}
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

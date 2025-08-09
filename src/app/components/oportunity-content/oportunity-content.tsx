'use client'

import { motion } from 'framer-motion'
import styles from './OportunityContent.module.scss'
import { oportunitys } from './__mocks__/oportunity.mock'
import OportunityCard from '../oportunity-card/oportunity-card'

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
          <OportunityCard key={id} title={title} image={image} />
        ))}
      </motion.div>
    </section>
  )
}

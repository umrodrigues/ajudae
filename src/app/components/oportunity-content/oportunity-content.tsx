'use client'

import { motion } from 'framer-motion'
import styles from './OportunityContent.module.scss'
import { oportunitys } from './__mocks__/oportunity.mock'
import OportunityCard from '../oportunity-card/oportunity-card'

export default function OportunityContent() {
  const hasOportunities = oportunitys.length > 0

  return (
    <section className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Oportunidades em Destaque
      </motion.h2>

      {hasOportunities ? (
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
      ) : (
        <motion.div
          className={styles.emptyMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>Não há nenhuma oportunidade disponível no momento.</p>
          <p>
            Gostaria de se cadastrar?{' '}
            <a href="/cadastro" className={styles.registerLink}>
              Clique aqui
            </a>
          </p>
        </motion.div>
      )}
    </section>
  )
}
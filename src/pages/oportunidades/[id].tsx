import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'
import "../../app/globals.css";
import styles from './OportunityPage.module.scss'
import { oportunitys } from '@/app/components/oportunity-content/__mocks__/oportunity.mock'
import DefaultLayout from '@/app/components/default-layout/default-layout'

export default function OportunityPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <p>Carregando...</p>

  const oportunity = oportunitys.find(o => o.id === Number(id))

  if (!oportunity) {
    return (
      <main className={styles.notFound}>
        <h2>Oportunidade não encontrada</h2>
        <Link href="/oportunidades" className={styles.backButton}>
          Voltar para lista
        </Link>
      </main>
    )
  }

  return (
    <DefaultLayout>
      <motion.main
        className={styles.pageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.header
          className={styles.header}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{oportunity.title}</h1>
          <p className={styles.subtitle}>Contribua para transformar vidas e fazer a diferença</p>
        </motion.header>

        <motion.div
          className={styles.topContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={oportunity.image}
              alt={oportunity.title}
              width={400}
              height={260}
              priority
              className={styles.image}
            />
          </div>
          <div className={styles.sideInfo}>
            <div className={styles.infoGroup}>
              <div>
                <h3>Localização</h3>
                <p>{oportunity.location}</p>
              </div>
              <div>
                <h3>Data de início</h3>
                <p>{oportunity.date}</p>
              </div>
              <div>
                <h3>Vagas disponíveis</h3>
                <p>{oportunity.slots ?? 'Indefinido'}</p>
              </div>
              <div>
                <h3>Contato</h3>
                <p>{oportunity.contact ?? 'Não informado'}</p>
              </div>
            </div>
            <button className={styles.volunteerButton}>Quero me voluntariar</button>
          </div>
        </motion.div>

        <motion.section
          className={styles.details}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Sobre a oportunidade</h2>
          <p>{oportunity.description}</p>

          <div className={styles.requirements}>
            <h3>Requisitos</h3>
            <ul>
              {oportunity.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          <div className={styles.additionalInfo}>
            <h3>Benefícios</h3>
            <ul>
              {(oportunity.benefits ?? [
                'Certificado de participação',
                'Experiência prática em campo',
                'Ambiente colaborativo e inclusivo',
                'Oportunidade de networking e crescimento pessoal',
              ]).map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/oportunidades" className={styles.backLink}>
            Voltar para lista
          </Link>
        </motion.div>
      </motion.main>
    </DefaultLayout>
  )
}

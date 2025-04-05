import Image from 'next/image'
import styles from './HomeContent.module.scss'

export default function HomeContent() {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <h1>Conecte-se com oportunidades de voluntariado</h1>
        <p>Junte-se a ONGs que precisam de voluntários</p>
        <button className={styles.button}>Explorar oportunidades</button>
      </div>
      <div className={styles.imageContent}>
        <Image
          src="/assets/ong.png"
          alt="Pessoas se conectando"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

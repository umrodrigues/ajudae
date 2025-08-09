'use client'

import styles from './TermsOfUse.module.scss'

export default function TermsOfUse() {
  return (
    <section className={styles.termsOfUse}>
      <h1 className={styles.title}>Termos de Uso</h1>

      <p className={styles.paragraph}>
        Bem-vindo ao nosso site! Ao acessar ou utilizar nossos serviços, você concorda em cumprir estes Termos de Uso, portanto, leia-os atentamente.
      </p>

      <h2 className={styles.subtitle}>1. Uso dos serviços</h2>
      <p className={styles.paragraph}>
        Você concorda em usar nossos serviços apenas para fins legais e de acordo com todas as leis aplicáveis. Não é permitido utilizar nossos serviços para qualquer atividade fraudulenta, ilegal ou que viole direitos de terceiros.
      </p>

      <h2 className={styles.subtitle}>2. Cadastro e segurança</h2>
      <p className={styles.paragraph}>
        Alguns serviços podem exigir cadastro. Você é responsável por manter a confidencialidade das suas informações de login e por todas as atividades realizadas em sua conta.
      </p>

      <h2 className={styles.subtitle}>3. Conteúdo do usuário</h2>
      <p className={styles.paragraph}>
        Você é responsável pelo conteúdo que enviar, publicar ou compartilhar. Não deve enviar conteúdo ofensivo, ilegal, difamatório ou que viole direitos autorais.
      </p>

      <h2 className={styles.subtitle}>4. Propriedade intelectual</h2>
      <p className={styles.paragraph}>
        Todo conteúdo disponibilizado no site, incluindo textos, imagens, logos e software, é protegido por direitos autorais e outras leis de propriedade intelectual. A reprodução sem autorização é proibida.
      </p>

      <h2 className={styles.subtitle}>5. Limitação de responsabilidade</h2>
      <p className={styles.paragraph}>
        Nossos serviços são fornecidos "no estado em que se encontram". Não garantimos que estarão livres de erros ou interrupções. Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso do site.
      </p>

      <h2 className={styles.subtitle}>6. Alterações dos termos</h2>
      <p className={styles.paragraph}>
        Podemos modificar estes Termos de Uso a qualquer momento. As alterações serão publicadas aqui e o uso continuado do serviço implica na aceitação dos novos termos.
      </p>

      <h2 className={styles.subtitle}>7. Legislação aplicável</h2>
      <p className={styles.paragraph}>
        Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais da comarca da nossa sede.
      </p>

      <p className={styles.footer}>Última atualização: 08 de agosto de 2025</p>
    </section>
  )
}

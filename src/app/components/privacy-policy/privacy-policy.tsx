'use client'

import styles from './PrivacyPolicy.module.scss'

export default function PrivacyPolicy() {
  return (
    <section className={styles.privacyPolicy}>
      <h1 className={styles.title}>Política de Privacidade</h1>

      <p className={styles.paragraph}>
        Sua privacidade é muito importante para nós. Esta Política de Privacidade explica quais dados coletamos, como usamos, armazenamos e protegemos suas informações pessoais.
      </p>

      <h2 className={styles.subtitle}>1. Informações que coletamos</h2>
      <p className={styles.paragraph}>
        Podemos coletar informações pessoais como nome, e-mail, telefone e dados de navegação para oferecer uma experiência personalizada e melhorar nossos serviços.
      </p>

      <h2 className={styles.subtitle}>2. Como usamos suas informações</h2>
      <p className={styles.paragraph}>
        Utilizamos seus dados para comunicação, processamento de solicitações, melhoria do site, envio de novidades e promoções, sempre respeitando sua privacidade.
      </p>

      <h2 className={styles.subtitle}>3. Compartilhamento de dados</h2>
      <p className={styles.paragraph}>
        Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou para cumprir obrigações legais.
      </p>

      <h2 className={styles.subtitle}>4. Segurança dos dados</h2>
      <p className={styles.paragraph}>
        Implementamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração.
      </p>

      <h2 className={styles.subtitle}>5. Seus direitos</h2>
      <p className={styles.paragraph}>
        Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento, entrando em contato conosco.
      </p>

      <h2 className={styles.subtitle}>6. Alterações nesta política</h2>
      <p className={styles.paragraph}>
        Podemos atualizar esta política ocasionalmente. Recomendamos que você a revise periodicamente para estar informado sobre como protegemos seus dados.
      </p>

      <p className={styles.footer}>Última atualização: 08 de agosto de 2025</p>
    </section>
  )
}

'use client'

import { useState } from 'react'
import styles from './Faq.module.scss'

interface FaqItem {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: 'O que é este projeto?',
    answer:
      'Este é um projeto sem fins lucrativos, criado com o objetivo de conectar ONGs que precisam de ajuda a pessoas interessadas em se voluntariar. Queremos facilitar o encontro entre quem deseja ajudar e quem precisa de apoio.',
  },
  {
    question: 'Como posso me voluntariar?',
    answer:
      'Você pode navegar pelas oportunidades disponíveis, e ao encontrar uma que lhe interesse, clicar no botão "Quero me voluntariar". Isso vai nos ajudar a identificar seu interesse e encaminhar para a ONG responsável.',
  },
  {
    question: 'Preciso pagar alguma taxa para participar?',
    answer: 'Não. Todo o projeto é gratuito e aberto a qualquer pessoa que queira ajudar.',
  },
  {
    question: 'Como as ONGs podem cadastrar suas oportunidades?',
    answer:
      'As ONGs podem entrar em contato conosco para que possamos verificar a autenticidade e então cadastrar suas oportunidades no sistema, garantindo que as vagas sejam legítimas e seguras.',
  },
  {
    question: 'Minhas informações pessoais são protegidas?',
    answer:
      'Sim, respeitamos sua privacidade e não compartilhamos suas informações com terceiros sem seu consentimento. Consulte nossa Política de Privacidade para mais detalhes.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggleItem(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.faq}>
      <h1 className={styles.title}>Dúvidas Frequentes</h1>
      <div className={styles.items}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {item.question}
              <span className={openIndex === index ? styles.iconOpen : styles.iconClosed}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ''}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'

import { useForm } from 'react-hook-form'
import styles from './RegisterContent.module.scss'

type FormData = {
  name: string
  email: string
  phone?: string
  description: string
}

export default function RegisterContent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(`Cadastro realizado com sucesso!\n\n${JSON.stringify(data, null, 2)}`)
        reset()
        resolve()
      }, 1200)
    })
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Cadastrar Nova Oportunidade de Voluntariado</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
        <label className={styles.label}>
          Nome da Organização / Projeto
          <input
            type="text"
            {...register('name', { required: 'Campo obrigatório' })}
            className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
            placeholder="Digite o nome"
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
        </label>

        <label className={styles.label}>
          E-mail para contato
          <input
            type="email"
            {...register('email', {
              required: 'Campo obrigatório',
              pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' },
            })}
            className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
            placeholder="exemplo@email.com"
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
        </label>

        <label className={styles.label}>
          Telefone (opcional)
          <input
            type="tel"
            {...register('phone')}
            className={styles.input}
            placeholder="(00) 00000-0000"
          />
        </label>

        <label className={styles.label}>
          Descrição da Oportunidade
          <textarea
            {...register('description', { required: 'Campo obrigatório' })}
            className={`${styles.textarea} ${errors.description ? styles.errorInput : ''}`}
            placeholder="Descreva a oportunidade, atividades, requisitos..."
            rows={5}
          />
          {errors.description && (
            <span className={styles.errorMessage}>{errors.description.message}</span>
          )}
        </label>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Cadastrar Oportunidade'}
        </button>

        {isSubmitSuccessful && (
          <p className={styles.successMessage}>Cadastro realizado com sucesso, em breve nossa equipe irá entrar em contato com você! Obrigado.</p>
        )}
      </form>
    </section>
  )
}
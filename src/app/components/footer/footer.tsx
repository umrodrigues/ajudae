import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <h2>Ajudaê</h2>
          <p>Conectando voluntários e ONGs para um mundo melhor.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
        <nav className={styles.navSection}>
          <ul>
            <li><strong>Ajudaê</strong></li>
            <li><a href="#">Sobre nós</a></li>
          </ul>
          <ul>
            <li><strong>Voluntários</strong></li>
            <li><a href="#">Encontre oportunidades</a></li>
            <li><a href="#">Dúvidas frequentes</a></li>
          </ul>
          <ul>
            <li><strong>Contato</strong></li>
            <li><a href="mailto:contato@ajudae.org">contato@ajudae.org</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Termos de uso</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Ajudaê. Todos os direitos reservados.
      </div>
    </footer>
  );
}

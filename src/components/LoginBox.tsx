import styles from '../styles/components/LoginBox.module.css';

export default function LoginBox() {
  return (
    <div className={styles.loginContainer}>
      <img src="LoginPage/moveit-login.svg" />
      <strong>Bem-vindo</strong>

      <div className={styles.inputContainer}>
        <div>
          <img src="LoginPage/github-icon.svg" />
          <p>Faça Login com seu Github para começar</p>
        </div>

        <form>
          <input type="text" placeholder="Digite seu username" />
          <button type="submit">
            <img src="icons/arrow.svg" />
          </button>
        </form>
      </div>

    </div>
  );
}

import styles from '../styles/components/LoginBox.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LoginBox() {
  const [userName, setUserName] = useState(null);

  const router = useRouter();
  const goToHomePage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/?userName=${userName}`);
  };

  return (
    <div className={styles.loginContainer}>
      <img src="LoginPage/moveit-login.svg" />
      <strong>Bem-vindo</strong>

      <div className={styles.inputContainer}>
        <div>
          <img src="LoginPage/github-icon.svg" />
          <p>Faça Login com seu Github para começar</p>
        </div>

        <form onSubmit={goToHomePage}>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Digite seu username"
          />
          <button type="submit">
            <img src="icons/arrow.svg" />
          </button>
        </form>
      </div>
    </div>
  );
}

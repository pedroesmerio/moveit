import Head from 'next/head';
import { useRouter } from 'next/router';

//COMPONTENTS
import LoginBox from '../src/components/LoginBox';

import styles from '../src/styles/pages/Login.module.css';

export default function Login() {
  const router = useRouter();

  const goToSignUpPage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/signup');
  };

  return (
    <>
      <Head>
        <title>Login | Move Yourself</title>
      </Head>
      <div className={styles.container}>
        <img className={styles.loginImg} src="LoginPage/Simbolo.svg" />
        <div className={styles.loginBoxContainer}>
          <LoginBox />
          <p className={styles.signUpLink}>
            Clique em <span onClick={goToSignUpPage}>SignUp</span> se ainda
            tiver uma conta
          </p>
        </div>
      </div>
    </>
  );
}

import Head from 'next/head';
import { useRouter } from 'next/router';

//COMPONTENTS
import SignUpBox from '../src/components/SignUpBox';

import styles from '../src/styles/pages/Signup.module.css';

export default function SignUp() {
  const router = useRouter();

  const goToLoginPage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Login | Move Yourself</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.signUpBoxContainer}>
          <SignUpBox />
          <p className={styles.loginLink}>
            Já possui uma conta?{' '}
            <span onClick={goToLoginPage}>Logar Agora</span>
          </p>
        </div>
      </div>
    </>
  );
}

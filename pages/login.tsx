import Head from 'next/head';
import LoginBox from '../src/components/LoginBox';

import styles from '../src/styles/pages/Login.module.css';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Move Yourself</title>
      </Head>
      <div className={styles.container}>
        <section>
          <img className={styles.loginImg}src="LoginPage/Simbolo.svg" />
          <LoginBox />
        </section>
      </div>
    </>
  );
}

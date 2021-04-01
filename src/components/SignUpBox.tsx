//HOOKS
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

//STYLES
import styles from '../styles/components/SignUpBox.module.css';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export default function SignUpBox() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(eye);

  const doItOnSubmit = (data: { preventDefault: () => void }) => {
    router.push('/');
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
    if (eyeIcon === eye) {
      setEyeIcon(eyeSlash);
    } else {
      setEyeIcon(eye);
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <img src="LoginPage/moveit-login.svg" />
      <strong>Crie sua conta abaixo</strong>

      <div className={styles.inputContainer}>
        <div>
          <p>Preencha os campos abaixo para fazer o seu cadastro</p>
        </div>
        <form onSubmit={doItOnSubmit}>
          <input
            type="text"
            name="username"
            ref={register({ required: 'Insira um username' })}
            placeholder="Digite seu username"
          />
          <input
            type="text"
            name="email"
            ref={register({ required: 'O Email é obrigatorio' })}
            placeholder="Digite seu Email"
          />
          <input
            type={passwordShown ? 'text' : 'password'}
            name="password"
            placeholder="Senha"
            ref={register({ required: 'Por favor coloque a senha' })}
            autoComplete="current-password"
          />
          <i onClick={togglePasswordVisibility}>{eyeIcon}</i>
          <button type="submit" onClick={handleSubmit(doItOnSubmit)}>
            CRIAR CONTA!
          </button>
        </form>
      </div>
    </div>
  );
}

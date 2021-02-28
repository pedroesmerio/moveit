import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  //CONTEXTS
  const { startNewChallenge } = useContext(ChallengesContext);

  //STATES
  //Regista a constante tempo como 25min dado em segundo;
  const [time, setTime] = useState(0.05 * 60);
  //Registra o state do startCountdown como false;
  const [isActive, setIsActive] = useState(false);
  //Registra o state do hasFinished o Countdown como false;
  const [hasFinished, setHasFinished] = useState(false);

  // MATH FUNCTION
  //Registra o tempo em minutos arrendondando para baixo;
  const minutes = Math.floor(time / 60);

  //Registra o tempo em segundos usando o "resto" de time/60;
  const seconds = time % 60;

  // DECLARATIVAS
  //Declara duas constantes 'minuteLeft'e 'minuteRight'em um array;
  //"string(minutes)" stringuifica o valor calculado na constminutes;
  //"padStart" verifica se a string possui 2 caracteres e caso ñ, preenche com um "0" para esquerda;
  //split('') separa a string em duas. Ex: de "25" para "2" "5";
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  //Inicia o contdown
  function startCountdown() {
    setIsActive(true);
  }

  //Reseta o contdown
  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  //Verifica se houve mudança em isActive e se time > 0. Caso a condição seja verdadeira, executa uma função depois de 1 segundo(1000us) que seta o time para (time - 1);
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setTimeout(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  //Button Abaixo
  //If ternário  onde se true para hasFinished representado por "?" passa as classes do botão "Ciclo encerrado" que estão no parágrafo;
  //Se não, representado pelo ":", passa outro if ternário que verifica a condição de isActive e passa o que estiver no parágrafo seguinte;
  return (
    <div>

      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
          <img src="icons/check-circle.svg" alt="check-icon" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button 
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button 
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}

    </div>
  )
}

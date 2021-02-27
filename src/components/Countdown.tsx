import { useState, useEffect } from 'react';

import styles from '../styles/components/CountDown.module.css';

export function Countdown() {
  //Regista a constante tempo como 25min dado em segundo;
  const [time, setTime] = useState(0.05 * 60);
  //Registra o state do startCountdown como false;
  const [isActive, setIsActive] = useState(false);

  const [hasFinished, setHasFinished] = useState(false);
  
  
  //Registra o tempo em minutos arrendondando para baixo;
  const minutes = Math.floor(time / 60);

  //Registra o tempo em segundos usando o "resto" de time/60;
  const seconds = time % 60;

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
    setTime(0.1 * 60);
  }

  //Verifica se houve mudança em isActive e se time > 0. Caso a condição seja verdadeira, executa uma função depois de 1 segundo(1000us) que seta o time para (time - 1);


  //Button
  //If ternário para se true para isActive representado por "?" passa o que estiver no parágrafo;
  //Se não, representado pelo ":" passa o que estiver no parágrafo;
  
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setTimeout(false);
    }
  }, [isActive, time]);

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

      {isActive ? (
        <button 
          type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={startCountdown}>
          Abandonar ciclo
        </button>
      ) : (
        <button 
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}>
          Iniciar um ciclo
        </button>
      )}
    </div>
  )
}

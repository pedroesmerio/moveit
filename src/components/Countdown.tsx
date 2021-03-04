import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext.tsx';

import styles from '../styles/components/CountDown.module.css';


export function Countdown() {
  //CONTEXTS
  const { 
    seconds, 
    minutes, 
    isActive, 
    hasFinished, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext);


  // DECLARATIVAS (formata os dados)
  //Declara duas constantes 'minuteLeft'e 'minuteRight'em um array;
  //"string(minutes)" stringuifica o valor calculado na constminutes;
  //"padStart" verifica se a string possui 2 caracteres e caso ñ, preenche com um "0" para esquerda;
  //split('') separa a string em duas. Ex: de "25" para "2" "5";
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  //Button do return
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

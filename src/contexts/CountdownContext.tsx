import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext.tsx';

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  seconds: number;
  minutes: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  //EXTERN CONTEXTS
  const { startNewChallenge } = useContext(ChallengesContext);

  //STATES
  //Regista a constante tempo como 25min dado em segundo;
  const [time, setTime] = useState(0.05 * 60);
  //Registra o state do startCountdown como false;
  const [isActive, setIsActive] = useState(false);
  //Registra o state do hasFinished o Countdown como false;
  const [hasFinished, setHasFinished] = useState(false);


  //EFFECTS
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


  // MATH FUNCTION
  //Registra o tempo em minutos arrendondando para baixo;
  const minutes = Math.floor(time / 60);

  //Registra o tempo em segundos usando o "resto" de time/60;
  const seconds = time % 60;


  //FUNCTIONS
  //Inicia o contdown
  function startCountdown() {
    setIsActive(true);
  }

  //Reseta o contdown
  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.05 * 60);
  }

  return (
    <CountdownContext.Provider value={{
      seconds,
      minutes,
      isActive,
      hasFinished,
      startCountdown,
      resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

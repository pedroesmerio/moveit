import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  seconds: number;
  minutes: number;
  CountdownPercentage: number;
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

  //SET TIME HERE
  const timeSet = 0.2;

  //STATES
  //Regista a constante tempo como 25min dado em segundo;
  const [time, setTime] = useState(timeSet * 60);
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
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  // MATH FUNCTION
  //Registra o tempo em minutos arrendondando para baixo;
  const minutes = Math.floor(time / 60);

  //Registra o tempo em segundos usando o "resto" de time/60;
  const seconds = time % 60;

  //Registra a porcentagem que falta para terminar o countdown
  const secondsSet = timeSet * 60;
  const CountdownPercentage = 100 - Math.round(time * 100) / secondsSet;

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
    setTime(timeSet * 60);
  }

  return (
    <CountdownContext.Provider
      value={{
        seconds,
        minutes,
        CountdownPercentage,
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

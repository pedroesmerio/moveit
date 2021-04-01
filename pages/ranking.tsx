import Head from 'next/head';

//CONTEXTS
import { useContext } from 'react';
import { CountdownProvider } from '../src/contexts/CountdownContext';
import { ChallengesProvider } from '../src/contexts/ChallengesContext';

//COMPONENTS
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { Countdown } from '../src/components/Countdown';
import { ChallengeBox } from '../src/components/ChallengeBox';
import { CompletedChallenges } from '../src/components/CompletedChallenges';

//STYLES
import styles from '../src/styles/pages/Ranking.module.css';
import { SideBar } from '../src/components/SideBar';

export default function Ranking() {
  return (
    <>
      <Head>
        <title>Ranking | Move Yourself</title>
      </Head>

      <div className={styles.outsideContainer}>
        <SideBar />
        <div className={styles.container}>
          <CountdownProvider>
            <section>
              <header>
                <strong>Leaderboard</strong>
              </header>
              <div className={styles.cardsContainer}>
                <div>1</div>
                <div className={styles.userContainer}>
                  <Profile />
                </div>
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </>
  );
}

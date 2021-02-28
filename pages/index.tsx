import Head from 'next/head';

import { useContext } from 'react';

import { ExperienceBar } from '../src/components/ExperienceBar.tsx';
import { Profile } from '../src/components/Profile.tsx';
import { CompletedChallenges } from '../src/components/CompletedChallenges.tsx';
import { Countdown } from '../src/components/Countdown.tsx';
import { ChallengeBox } from '../src/components/ChallengeBox.tsx';

import styles from '../src/styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Moveit Next</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}

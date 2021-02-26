import Head from 'next/head';
import { ExperienceBar } from '../src/components/ExperienceBar.tsx';

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
}

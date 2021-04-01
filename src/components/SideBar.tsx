import styles from '../styles/components/SideBar.module.css';
import { useRouter } from 'next/router';

export function SideBar() {
  const router = useRouter();

  const goToHomePage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/');
  };

  const goToRankingPage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/ranking');
  };

  return (
    <div className={styles.sideBarContainer}>
      <img src="icons/Logo.svg" onClick={goToHomePage} />
      <div className={styles.sideBarButton}>
        <button type="submit" onClick={goToHomePage}>
          <img src="icons/home.svg" />
        </button>
      </div>

      <div className={styles.sideBarButton}>
        <button type="submit" onClick={goToRankingPage}>
          <img src="icons/award.svg" />
        </button>
      </div>
    </div>
  );
}

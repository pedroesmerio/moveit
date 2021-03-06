import styles from '../styles/components/SideBar.module.css';

export default function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <img src="icons/Logo.svg" onClick=""/>
      <div className={styles.sideBarButton}>
        <button
          type="submit"
          onClick=""
        >
          <img src="icons/home.svg" />
        </button>
      </div>
      <div className={styles.sideBarButton}>
        <button
          type="submit"
          onClick=""
        >
          <img src="icons/award.svg" />
        </button>
      </div>

    </div>
  );
}

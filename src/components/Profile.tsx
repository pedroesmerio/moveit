import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedroesmerio.png" alt="Profile Image" />
      <div>
        <strong>Pedro Esmerio</strong>
        <p>
          <img src="icon/level.svg" alt="level-icon" />
          Level 1
        </p>
      </div>
    </div>
  )
}

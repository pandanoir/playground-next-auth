import styles from './page.module.css';
import { LoginButton } from './_components/LoginButton';

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <LoginButton />
      </header>
      <main className={styles.main}>main</main>
    </div>
  );
}

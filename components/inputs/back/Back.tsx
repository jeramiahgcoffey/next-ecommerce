import styles from './Back.module.scss';
import { useRouter } from 'next/router';

const Back = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className={styles.back}>
      Go Back
    </div>
  );
};

export default Back;

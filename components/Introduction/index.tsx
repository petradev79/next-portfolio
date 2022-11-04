import styles from '../../styles/Introduction.module.css';
import Title from './Title';
import Skills from './Skills';
import { TitleProps } from '../../types';

const Introduction: React.FC<TitleProps> = ({ main, description }) => {
  return (
    <section className={styles.introduction}>
      <div className={styles['introduction-container']}>
        <Title main={main} description={description} />
        <Skills />
      </div>
    </section>
  );
};
export default Introduction;

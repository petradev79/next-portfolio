import styles from '../../styles/Introduction.module.css';
import Title from './Title';
import Tips from './Tips';
import { TitleProps } from '../../types';

const Introduction: React.FC<TitleProps> = ({ main, description }) => {
  return (
    <section className={styles.introduction}>
      <div className={styles['introduction-container']}>
        <Title main={main} description={description} />
        <Tips />
      </div>
    </section>
  );
};
export default Introduction;

import styles from '../../styles/Introduction.module.css';
import Title from './Title';
import Content from './Content';
import { TitleProps } from '../../types';

const Introduction: React.FC<TitleProps> = ({ main, description }) => {
  return (
    <section className={styles.introduction}>
      <div className={styles['introduction-container']}>
        <Title main={main} description={description} />
        <Content />
      </div>
    </section>
  );
};
export default Introduction;

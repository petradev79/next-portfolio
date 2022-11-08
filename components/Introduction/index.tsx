import Image from 'next/image';
import styles from '../../styles/Introduction.module.css';
import Title from './Title';
import { TitleInterface } from '../../types';
import shapes from '../../assets/shapes.svg';
import Content from './Content';

const Introduction: React.FC<TitleInterface> = ({ main, description }) => {
  return (
    <section className={styles.introduction}>
      <div className={styles['introduction-container']}>
        <Title main={main} description={description} />
        <Image src={shapes} width={500} alt='portfolio' />
        {/* <Content /> */}
      </div>
    </section>
  );
};
export default Introduction;

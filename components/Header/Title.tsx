import styles from '../../styles/Header.module.css';
import { TitleInterface } from '../../types';

const Title = ({ title, description }: TitleInterface) => {
  return (
    <div className={styles.title}>
      <h1>
        {title}
        {/* <div className={styles['clip-path']}>{title}</div> */}
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;

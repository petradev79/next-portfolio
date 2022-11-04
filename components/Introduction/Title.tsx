import styles from '../../styles/Introduction.module.css';
import { TitleProps } from '../../types';

const Title: React.FC<TitleProps> = ({ main, description }) => {
  return (
    <div className={styles.title}>
      <h1>
        {main}
        {/* <div className={styles['clip-path']}>{title}</div> */}
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;

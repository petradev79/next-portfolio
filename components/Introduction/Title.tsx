import { useEffect } from 'react';
import styles from '../../styles/Introduction.module.css';
import { TitleProps } from '../../types';

const Title: React.FC<TitleProps> = ({ main, description }) => {
  useEffect(() => {
    const style = document.documentElement.style;
    const clipPath = document.getElementById('clipPath');

    const editCursor = (e: any) => {
      const { clientX: x, clientY: y } = e;
      const { x: clipX, y: clipY } = clipPath!.getBoundingClientRect();

      style.setProperty('--x', x - clipX + 'px');
      style.setProperty('--y', y - clipY + 'px');
    };

    window.addEventListener('mousemove', editCursor);
  }, []);

  return (
    <div className={styles.title}>
      <h1>
        {main}
        <div className={styles['clip-path']} id='clipPath'>
          {main}
        </div>
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;

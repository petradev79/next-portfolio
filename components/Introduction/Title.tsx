import { useEffect } from 'react';
import styles from '../../styles/Introduction.module.css';
import { TitleInterface } from '../../types';

const Title: React.FC<TitleInterface> = ({ main, description }) => {
  useEffect(() => {
    window.addEventListener('mousemove', editCursor);
  }, []);

  const editCursor = (e: any) => {
    const style = document.documentElement.style;
    const clipPath = document.getElementById('clipPath');
    const { clientX: x, clientY: y } = e;
    const { x: clipX, y: clipY } = clipPath!.getBoundingClientRect();

    style.setProperty('--x', x - clipX + 'px');
    style.setProperty('--y', y - clipY + 'px');
  };

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

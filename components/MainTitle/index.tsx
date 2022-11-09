import { useEffect } from 'react';
import styles from '../../styles/Title.module.css';

const MainTitle: React.FC<{ children: JSX.Element }> = ({ children }) => {
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

  return <div className={styles.title1}>{children}</div>;
};

export default MainTitle;

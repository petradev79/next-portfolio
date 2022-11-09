import styles from '../../styles/Title.module.css';

const SectionTitle: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className={styles.title2}>{children}</div>;
};

export default SectionTitle;

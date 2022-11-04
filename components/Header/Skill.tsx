import styles from '../../styles/Header.module.css';
import { SkillInterface } from '../../types';

const Skill = ({ icon, title, description }: SkillInterface) => {
  return (
    <div className={styles['flex-skill']}>
      <h4>
        {icon}
        {title}
      </h4>
      <p>{description}</p>
    </div>
  );
};

export default Skill;

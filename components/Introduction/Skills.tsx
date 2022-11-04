import styles from '../../styles/Introduction.module.css';
import {
  FaCode,
  FaCodeBranch,
  FaHatWizard,
  FaGraduationCap,
} from 'react-icons/fa';

const Skills = () => {
  return (
    <div className={styles['grid-skills']}>
      <div className={styles['flex-skill']}>
        <h4>
          <FaCode />
          Dynamic Content
        </h4>
        <p>
          Being a person always willing to learn new skills and techniques I
          enjoy being challenged.
        </p>
      </div>
      <div className={styles['flex-skill']}>
        <h4>
          <FaCodeBranch />
          Work in a Team
        </h4>
        <p>Collaboration skills can help a team to achieve a common goal.</p>
      </div>
      <div className={styles['flex-skill']}>
        <h4>
          <FaHatWizard />
          Beautiful Design
        </h4>
        <p>Creating beautiful and consistent UI leads to a better UX.</p>
      </div>
      <div className={styles['flex-skill']}>
        <h4>
          <FaGraduationCap />
          Improving Knowledge
        </h4>
        <p>
          Being a person always willing to learn new skills and techniques I
          enjoy being challenged.
        </p>
      </div>
    </div>
  );
};

export default Skills;

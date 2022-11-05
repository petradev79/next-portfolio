import styles from '../../styles/Introduction.module.css';
import {
  FaCode,
  FaCodeBranch,
  FaHatWizard,
  FaGraduationCap,
} from 'react-icons/fa';

const Tips = () => {
  return (
    <div className={styles['grid-tips']}>
      <div className={styles['flex-tip']}>
        <h4>
          <FaCode />
          Strategic Planning
        </h4>
        <p>
          Before start coding define your vision and plan project structure and
          architecture.
        </p>
      </div>
      <div className={styles['flex-tip']}>
        <h4>
          <FaCodeBranch />
          Work in a Team
        </h4>
        {/* <p>Collaboration skills can help a team to achieve a common goal.</p> */}
        <p>Teamwork and collaboration are good for business.</p>
      </div>
      <div className={styles['flex-tip']}>
        <h4>
          <FaHatWizard />
          Beautiful Design
        </h4>
        <p>Creating beautiful and consistent UI leads to a better UX.</p>
      </div>
      <div className={styles['flex-tip']}>
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

export default Tips;

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
          Define your vision
        </h4>
        <p>A good start is half the battle, said someone wiser than me.</p>
      </div>
      <div className={styles['flex-tip']}>
        <h4>
          <FaCodeBranch />
          Teamwork and collaboration
        </h4>
        <p>Teamwork makes the dream work, secret for better results.</p>
      </div>
      <div className={styles['flex-tip']}>
        <h4>
          <FaHatWizard />
          User experience
        </h4>
        <p>Web applications are all about user interaction.</p>
      </div>
      <div className={styles['flex-tip']}>
        <h4>
          <FaGraduationCap />
          Improving knowledge
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

import {
  FaCode,
  FaCodeBranch,
  FaHatWizard,
  FaGraduationCap,
} from 'react-icons/fa';
import styles from '../../styles/Cards.module.css';

const Cards = () => {
  return (
    <div className={styles['grid-cards']}>
      <div className={styles['flex-card']}>
        <h4>
          <FaCode />
          Define your vision
        </h4>
        <p>
          A good start is half the battle, before start coding start planning.
        </p>
      </div>
      <div className={styles['flex-card']}>
        <h4>
          <FaCodeBranch />
          Teamwork and collaboration
        </h4>
        <p>It's no secret that teamwork is good for business.</p>
      </div>
      <div className={styles['flex-card']}>
        <h4>
          <FaHatWizard />
          User experience
        </h4>
        <p>People ignore design that ignores people.</p>
      </div>
      <div className={styles['flex-card']}>
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

export default Cards;

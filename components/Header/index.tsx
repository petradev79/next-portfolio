import styles from '../../styles/Header.module.css';
import Title from './Title';
import Skill from './Skill';
import { HeaderPropsInterface } from '../../types';
import Navbar from '../Navbar';

const Header = ({ title, skills }: HeaderPropsInterface) => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles['container-header']}>
        <Title title={title.title} description={title.description} />
        <div className={styles['grid-skills']}>
          {skills?.map((skill, i) => (
            <Skill
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              key={i}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;

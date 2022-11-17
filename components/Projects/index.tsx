import Image from 'next/image';
import styles from '../../styles/Projects.module.css';
import sectionImg from '../../assets/code-1.png';
import { ProjectInterface } from '../../types';
import Card from './Card';

const Projects: React.FC<{ projects: ProjectInterface[] }> = ({ projects }) => {
  return (
    <section className={styles['projects']}>
      <div className='section-container'>
        <div className='flex-section'>
          <Image src={sectionImg} width={500} alt='' className='section-img' />
          <div className='section-title'>
            <h2>
              Selection of <span>projects</span> I've worked on
            </h2>
            <p>
              There is no end of learning in the IT industry. Some would say
              that there is no industry that is so dynamic and inviting as
              software development. As a developer, you probably want to{' '}
              <span>improve your skills</span> constantly and be the best
              developer you can possibly be.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['projects-container']}>
        <div className='flex-center'>
          {projects.map((project) => (
            <Card key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

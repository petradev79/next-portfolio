import Image from 'next/image';
import styles from '../../styles/Projects.module.css';
import card from '../../assets/1_fopzpyNMN9GPvAIKdsZdaA.png';
import { ProjectInterface } from '../../types';
import Card from './Card';

const Projects: React.FC<{ projects: ProjectInterface[] }> = ({ projects }) => {
  return (
    <section className={styles['projects']}>
      <div className='section-container'>
        <div className='flex-section'>
          <Image src={card} width={500} alt='work' className='test-code-img' />
          <div className='section-title'>
            <h2>
              4 Tips to <span>improve your coding skills</span>
            </h2>
            <p>
              There is no end of learning in the IT industry. Some would say
              that there is no industry that is so dynamic and inviting as
              software development. As a developer, you probably want to{' '}
              <span>improve your skills</span> constantly and be the best
              developer you can possibly be.
            </p>
            <p>
              Check out these four tips that have helped me in my career to
              become a <span>better and more efficient developer</span>.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['projects-container']}>
        <div className='flex-center'>
          {projects.map(project => (
            <Card key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

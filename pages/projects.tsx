import { client } from '../sanity';
import Image from 'next/image';

import styles from '../styles/Projects.module.css';
import sectionImg from '../assets/projects.svg';
import { ProjectInterface } from '../types';
import Meta from '../components/Meta';
import Project from '../components/Project';

export const getStaticProps = async () => {
  const query = `*[_type == "project"] {
    _id,
    title,
    summary,
    slug,
    imageCard,
    destination,
    website,
    tags[] -> {
      _id,
      title,
      image,
      source
    }
  }`;
  const projects = await client.fetch(query);

  return {
    props: {
      projects,
    },
  };
};

const Work: React.FC<{ projects: ProjectInterface[] }> = ({ projects }) => {
  console.log(projects);

  return (
    <>
      <Meta title='Projects' />
      <section className={styles['projects']}>
        <div className='section-container'>
          <div className='flex-section'>
            <Image
              src={sectionImg}
              width={550}
              alt=''
              className='section-img'
            />
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
              <Project key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;

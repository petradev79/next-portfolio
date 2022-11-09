import Image from 'next/image';
import { client } from '../sanity';
import { ProjectsInterface } from '../types';

import styles from '../styles/Title.module.css';
import shapes from '../assets/shapes.svg';
import Meta from '../components/Meta';
import Projects from '../components/Projects';
import MainTitle from '../components/MainTitle';

export const getStaticProps = async () => {
  const query = '*[_type == "project"]';
  const projects = await client.fetch(query);

  return {
    props: {
      projects,
    },
  };
};

const Work: React.FC<ProjectsInterface> = ({ projects }) => {
  console.log(projects);

  return (
    <>
      <Meta title='Ivan Petrovic | Work' />
      <section className='banner'>
        <div className='banner-container flex-between'>
          <MainTitle>
            <>
              <h1>
                building <span>projects</span> improve your skills
                <div className={styles['clip-path']} id='clipPath'>
                  building projects improve your skills
                </div>
              </h1>
              <p>
                For developers{' '}
                <a
                  href='https://www.frontendmentor.io/challenges'
                  target='_blank'
                  key='description'
                >
                  coding projects
                </a>{' '}
                are like the final boss in a video game. They challenge you to
                learn vital skills and translate your theoretical knowledge into
                actual code.
              </p>
            </>
          </MainTitle>
          <Image src={shapes} width={500} alt='portfolio' />
        </div>
      </section>
      <Projects projects={projects} />
    </>
  );
};

export default Work;

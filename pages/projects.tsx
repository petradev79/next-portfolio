import Image from 'next/image';
import { client } from '../sanity';
import { ProjectInterface } from '../types';

import styles from '../styles/Title.module.css';
import card from '../assets/Shopping_merchandise_header.jpeg';
import Meta from '../components/Meta';
import Projects from '../components/Projects';
import Title from '../components/Title';

export const getStaticProps = async () => {
  const query = `*[_type == "project"] {
    _id,
    title,
    summary,
    slug,
    image,
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
      <section className='banner'>
        <div className='banner-container flex-between'>
          <Title>
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
          </Title>
          <Image
            src={card}
            width={350}
            alt='Projects'
            className='test-code-img'
          />
        </div>
      </section>
      <Projects projects={projects} />
    </>
  );
};

export default Work;

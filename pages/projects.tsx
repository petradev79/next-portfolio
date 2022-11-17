import { client } from '../sanity';
import { ProjectInterface } from '../types';

import titleStyles from '../styles/Title.module.css';
import cardsStyles from '../styles/Cards.module.css';
import Meta from '../components/Meta';
import Projects from '../components/Projects';
import Title from '../components/Title';
import Cards from '../components/Cards';
import { FaGithub, FaGraduationCap } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { GiDividedSquare } from 'react-icons/gi';

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
      <section className='banner'>
        <div className='banner-container flex-between'>
          <Title>
            <>
              <h1>
                building <span>projects</span> improve skills
                <div className={titleStyles['clip-path']} id='clipPath'>
                  building projects improve skills
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
          <Cards>
            <div className={cardsStyles['grid-cards']}>
              <div className={cardsStyles['flex-card']}>
                <h4>
                  <FaGraduationCap />
                  Improving knowledge
                </h4>
                <p>
                  Being a person always willing to learn new skills and
                  techniques I enjoy being challenged.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4>
                  <MdPeopleAlt />
                  Join a community
                </h4>
                <p>Empowering the world through collective knowledge.</p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4>
                  <GiDividedSquare />
                  Divide and conquer
                </h4>
                <p>Don't be intimidated divide project into smaller tasks.</p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4>
                  <FaGithub />
                  Contribute to GitHub
                </h4>
                <p>
                  After using GitHub by yourself for a while, try to contribute
                  to someone else's project.
                </p>
              </div>
            </div>
          </Cards>
        </div>
      </section>
      <Projects projects={projects} />
    </>
  );
};

export default Work;

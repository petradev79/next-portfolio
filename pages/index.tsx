import titleStyles from '../styles/Title.module.css';
import cardsStyles from '../styles/Cards.module.css';
import Title from '../components/Title';
import Cards from '../components/Cards';
import Tips from '../components/Tips';
import {
  FaCode,
  FaCodeBranch,
  FaHatWizard,
  FaGraduationCap,
} from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section className='banner'>
        <div className='banner-container flex-between'>
          <Title>
            <>
              <h1>
                design and <span>build</span> beautiful content
                <div className={titleStyles['clip-path']} id='clipPath'>
                  design and build beautiful content
                </div>
              </h1>
              <p>
                My name is Ivan Petrovic, currently working at{' '}
                <a
                  href='https://www.ingsoftware.com/'
                  target='_blank'
                  key='description'
                >
                  Ingsoftware
                </a>
                . I'm a software developer (and occasionally designer)
                specializing in building frontend user experiences.
              </p>
            </>
          </Title>
          <Cards>
            <div className={cardsStyles['grid-cards__one']}>
              <div className={cardsStyles['flex-card']}>
                <h4>
                  <FaCode />
                  Define your vision
                </h4>
                <p>
                  A good start is half the battle, before start coding start
                  planning.
                </p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4>
                  <FaCodeBranch />
                  Teamwork and collaboration
                </h4>
                <p>It's no secret that teamwork is good for business.</p>
              </div>
              <div className={cardsStyles['flex-card']}>
                <h4>
                  <FaHatWizard />
                  User experience
                </h4>
                <p>People ignore design that ignores people.</p>
              </div>
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
            </div>
          </Cards>
        </div>
      </section>
      <Tips />
    </>
  );
};

export default Home;

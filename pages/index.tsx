import styles from '../styles/Title.module.css';
import Title from '../components/Title';
import GridIntro from '../components/GridIntro';
import Tips from '../components/Tips';

const Home = () => {
  return (
    <>
      <section className='banner'>
        <div className='banner-container flex-between'>
          <Title>
            <>
              <h1>
                design and <span>build</span> beautiful content
                <div className={styles['clip-path']} id='clipPath'>
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
          <GridIntro />
        </div>
      </section>
      <Tips />
    </>
  );
};

export default Home;

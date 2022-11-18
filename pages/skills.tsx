import styles from '../styles/Title.module.css';
import Meta from '../components/Meta';
import Title from '../components/Title';

const Skills = () => {
  return (
    <>
      <Meta title='Skills' />
      <section className='banner'>
        <div className='banner-container flex-between'>
          <Title>
            <>
              <h1>
                check out <span>skills and tools</span> I use
                <div className={styles['clip-path']} id='clipPath'>
                  check out skills and tools I use
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
        </div>
      </section>
    </>
  );
};

export default Skills;

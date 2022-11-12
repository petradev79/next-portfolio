import Image from 'next/image';

import styles from '../styles/Title.module.css';
import shapes from '../assets/shapes.svg';
import Meta from '../components/Meta';
import Title from '../components/Title';

const About = () => {
  return (
    <>
      <Meta title='Ivan Petrovic | About' />
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
          <Image src={shapes} width={500} alt='about' />
        </div>
      </section>
    </>
  );
};

export default About;

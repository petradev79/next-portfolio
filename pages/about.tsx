import titleStyles from '../styles/Title.module.css';
import Meta from '../components/Meta';
import Title from '../components/Title';
import Personal from '../components/Personal';

import Image from 'next/image';
import about from '../assets/witcher.webp';

const About = () => {
  return (
    <>
      <Meta title='Ivan Petrovic | About' />
      <section className='banner'>
        <div className='banner-container flex-between'>
          <Title>
            <>
              <h1>
                my <span>passions</span> and <span>personality</span>
                <div className={titleStyles['clip-path']} id='clipPath'>
                  my passions and personality
                </div>
              </h1>
              <p>
                My name is <span className='color-white'>Ivan Petrovic</span>, I
                have a passion for coffee, love to watch movies, I play video
                games like it's my life, and I am a big fan of football.
              </p>
            </>
          </Title>
          <Image src={about} width={500} alt='Code in editor' />
        </div>
      </section>
      <Personal />
    </>
  );
};

export default About;

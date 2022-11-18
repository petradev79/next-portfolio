import Image from 'next/image';

import styles from '../styles/Title.module.css';
import shapes from '../assets/about-1.png';
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
                hello, my name is <span>Ivan Petrovic</span>
                <div className={styles['clip-path']} id='clipPath'>
                  hello, my name is Ivan Petrovic
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
          <Image src={shapes} width={600} alt='about' />
        </div>
      </section>
      <section style={{ backgroundColor: 'black' }}>
        <p>
          About me I enjoy working closely with design teams to faithfully
          translate their designs right down to the last pixel. Daily, you'll
          find me using modern frontend technologies that bring the creative
          process to life just as designers intended them to be. Technical Right
          now you can find me hacking away primarily with Vue.js, Nuxt.js,
          Gridsome, Prismic CMS, GraphQL and in general anything JavaScript,
          HTML and CSS related. Also been known to dabble in React.js and Gatsby
          from time to time or wrestling with Webpack. Personal I grew up in
          Nottingham and moved to London many years ago. Being half Italian and
          half British, I try to visit family in Sicily whenever I can to
          practice (struggling) with the basics of the language.
        </p>
        <p>
          I'm a developer, designer and linguist who has been building for the
          web in some capacity since 2001. I specialise in accessibility,
          performance and usability without sacrificing creativity.
        </p>
        <p>
          I’m a user experience consultant working with teams around the world
          to help create outstanding websites. I’ve been a developer since I
          started my career 5 years ago, and have always taken a deep interest
          in making websites the best they can be for everyone using them. Now I
          design and develop beautiful websites which focus on providing the
          best experience for everyone using them, ensuring they are easy for
          your team to edit while also delivering the best experience for your
          users. My Story I've always loved technology. From a young age,
          technology has interested me. Most children play video games of some
          kind, from tetris to spyro, crash bandicoot to final fantasy, I loved
          playing with computers, but my interest didn't stop just at
          entertainment. The more I played, the more I wanted to understand how
          things worked. If something broke, I would take it apart and figure
          out what had gone wrong, trying to get it back to normal. I remember
          taking apart my computer when I was 12, an event which horrified my
          parents. I still build my own computers. I never lost my curiosity,
          but my interest in technologies changed as I expanded my knowledge
          from taking apart equipment to building new websites in code. Now I
          focus on people and learning how they interact with websites, making
          sure they can achieve their goals leaving them satisfied and more
          likely to return as customers.
        </p>
        <p>
          MY STORY Currently I am an Android Engineer at Vestiaire Collective. A
          proud holder of a first class Bsc Honours Degree in Computer Science
          and an Applied MSc in Data Engineering and Artificial Intelligence. I
          have been working in computing for the past 6 years with some of the
          experience gained from overseas internships
        </p>
      </section>
    </>
  );
};

export default About;

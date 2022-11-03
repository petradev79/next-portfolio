// import Image from 'next/image';

import styles from '../../styles/Home.module.css';
// import logo from '../../public/logo.svg';

const Header = () => {
  return (
    <header className={`grid-center ${styles.header}`}>
      {/* <div className='container'> */}
      {/* <p className='logo'>
          <Image src={logo} width={500} height={500} alt='Logo' />
        </p> */}
      <div className='flex-lg-container'>
        <div className='content'>
          <h1 className='title'>
            design and <span className='title__accent'>build</span> beautiful
            content
            <div className='clip-path'>
              design and
              <span className='clip-path__accent'>build</span> beautiful content
            </div>
          </h1>
          <p className='description'>
            My name is Ivan Petrovic, currently working at
            <span>Ingsoftware</span>. I'm a software developer (and occasionally
            designer) specializing in building exceptional frontend user
            experiences.
          </p>
        </div>

        <div className='skills'>
          <div className='skill'>
            <h4>
              <i className='fa-solid fa-code'></i> Dynamic Content
            </h4>
            <p>
              Allows users to connect to a server in order to get data and
              provide real-time information.
            </p>
          </div>
          <div className='skill'>
            <h4>
              <i className='fa-solid fa-code-merge'></i> Work in a Team
            </h4>
            <p>
              Collaboration skills can help a team to achieve a common goal.
            </p>
          </div>
          <div className='skill'>
            <h4>
              <i className='fa-solid fa-hat-wizard'></i> Beautiful Design
            </h4>
            <p>Creating beautiful and consistent UI leads to a better UX.</p>
          </div>
          <div className='skill'>
            <h4>
              <i className='fa-solid fa-graduation-cap'></i> Improving Knowledge
            </h4>
            <p>
              Being a person always willing to learn new skills and techniques I
              enjoy being challenged.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};
export default Header;

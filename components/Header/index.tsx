import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScroll(window.pageYOffset > 100)
      );
    }
  }, []);

  return (
    <nav
      className={`${styles.header} ${scroll ? styles['header-scroll'] : ''} `}
    >
      <div className={styles['header-container']}>
        <div className='logo'>
          <Image
            src='/logo.svg'
            width={176}
            height={353}
            priority={false}
            alt='Logo'
          />
        </div>
        <div className='flex-menu'>
          <Link
            className={router.pathname == '/' ? styles.active : ''}
            href='/'
          >
            Home
          </Link>
          <Link
            className={router.pathname == '/about' ? styles.active : ''}
            href='/about'
          >
            About
          </Link>
          <Link
            className={router.pathname == '/projects' ? styles.active : ''}
            href='/projects'
          >
            Projects
          </Link>
          <Link
            className={router.pathname == '/skills' ? styles.active : ''}
            href='/skills'
          >
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

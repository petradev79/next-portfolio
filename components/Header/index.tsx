import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const router = useRouter();

  return (
    <nav className={styles.header}>
      <div className={styles['header-container']}>
        <div className='logo'>
          <Image
            src='/logo.svg'
            width={104.8}
            height={63.4}
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
        </div>
      </div>
    </nav>
  );
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {
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
          <p>tips</p>
        </div>
        <div className='flex-menu'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

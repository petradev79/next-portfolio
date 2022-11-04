import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='container-nav'>
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
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

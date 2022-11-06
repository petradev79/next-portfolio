import Image from 'next/image';
import testImg from '../../assets/DSC00117.jpg';

const About = () => {
  return (
    <section className='section'>
      <div className='section-container'>
        <div className='flex-section'>
          <div className='item'>
            <h2>
              Hi, my name is <span>Ivan Petrovic</span>
            </h2>
            <p>
              My name is <span>Ivan Petrovic</span>, software developer working
              at Ingsoftware.
            </p>
          </div>
          <div className='img'>
            <Image src={testImg} width={200} height={500} alt='Test' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

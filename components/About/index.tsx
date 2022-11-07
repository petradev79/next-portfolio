import Image from 'next/image';
import testImg from '../../assets/shapes.svg';

const About = () => {
  return (
    <section className='section'>
      <div className='section-container'>
        <div className='flex-section'>
          <div className='img'>
            <Image src={testImg} width={400} height={600} alt='Test' />
          </div>
          <div className='item'>
            <h2>
              Hi, my name is <span>Ivan Petrovic</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              minus earum reprehenderit eum? Obcaecati debitis, deserunt eum
              numquam quibusdam nihil dolor beatae saepe alias neque sunt earum
              laudantium, officiis amet velit id, mollitia ad praesentium
              aliquid doloremque quae maxime fugiat iste.
            </p>
            <ul>
              <li>
                First define your or your client vision and{' '}
                <span>what you'd like to achieve</span>.
              </li>
              <li>
                Your next step is to decide what <span>language and tools</span>{' '}
                you'll use to create your project.
              </li>
              <li>
                Good <span>project architecture</span> is vital for the life of
                the project itself and how you will be able to tackle changing
                needs in the future.
              </li>
              <li>
                The golden rule of design when writing software is “divide and
                conquer”. Always{' '}
                <span>split the problem into smallest problems</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

import Header from '../components/Header';
import { HeaderPropsInterface } from '../types';
import {
  FaCode,
  FaCodeBranch,
  FaHatWizard,
  FaGraduationCap,
} from 'react-icons/fa';

const headerProps: HeaderPropsInterface = {
  title: {
    title: [
      'design and ',
      <span key='title'>build</span>,
      ' beautiful content',
    ],
    description: [
      'My name is Ivan Petrovic, currently working at ',
      <span key='description'>Ingsoftware</span>,
      ". I'm a software developer (and occasionally designer) specializing in building exceptional frontend user experiences.",
    ],
  },
  skills: [
    {
      icon: <FaCode />,
      title: 'Dynamic Content',
      description:
        'Allows users to connect to a server in order to get data and provide real-time information.',
    },
    {
      icon: <FaCodeBranch />,
      title: ' Work in a Team',
      description:
        'Collaboration skills can help a team to achieve a common goal.',
    },
    {
      icon: <FaHatWizard />,
      title: 'Beautiful Design',
      description: 'Creating beautiful and consistent UI leads to a better UX.',
    },
    {
      icon: <FaGraduationCap />,
      title: ' Improving Knowledge',
      description:
        'Being a person always willing to learn new skills and techniques I enjoy being challenged.',
    },
  ],
};

const Home = () => {
  return (
    <>
      <Header title={headerProps.title} skills={headerProps.skills} />
    </>
  );
};

export default Home;

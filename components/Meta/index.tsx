import Head from 'next/head';
import { MetaInterface } from '../../types';

const Meta: React.FC<MetaInterface> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Ivan Petrovic | Portfolio',
  keywords:
    'web development, programming, frontend, javascript, angular, react, vue, next',
  description:
    "I'm a software developer (and occasionally designer) specializing in building exceptional frontend user experiences.",
};

export default Meta;

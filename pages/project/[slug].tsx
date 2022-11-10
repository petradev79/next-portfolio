import Image from 'next/image';
import { client } from '../../sanity';
import { ProjectInterface } from '../../types';
import Meta from '../../components/Meta';
import style from '../../styles/Projects.module.css';

export const getServerSideProps = async (pageContext: any) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "project" && slug.current == $pageSlug][0]`;

  const project = await client.fetch(query, { pageSlug });

  return {
    props: {
      project,
    },
  };
};

const Project: React.FC<{ project: ProjectInterface }> = ({ project }) => {
  console.log(project);

  return (
    <>
      <Meta title={'Ivan Petrovic | ' + project.slug.current} />
      <section className={style.projects}>
        <p className='color-primary'>{project.title}</p>
        <p className='color-primary'>{project.slug.current}</p>
      </section>
    </>
  );
};

export default Project;

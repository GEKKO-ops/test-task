import { descriptions } from '../constants';

export const BanerSection = () => {
  return (
    <section className='section baner_section'>
      <div className='container baner_container'>
        <div className='baner_section_information'>
          <h1 className='baner_section_title'>
            Test assignment for front-end developer
          </h1>
          <p className='baner_section_description'>
            {descriptions.banerSection}
          </p>
          <button disabled={false}>Sign up</button>
        </div>
      </div>
    </section>
  );
};

import PropTypes from 'prop-types';
import css from './Sections.module.css';

const Sections = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {<h1 className={css.title}>{title}</h1>}
        {children}
      </div>
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string,
};

export default Sections;

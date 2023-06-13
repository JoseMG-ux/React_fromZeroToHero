import PropTypes from 'prop-types';

const FirstApp = ({ title }) => {

  
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo'
}

export default FirstApp;

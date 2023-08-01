import { Title, Sections } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, childreen }) => {
  return (
    <Sections>
      <Title>{title}</Title>
      {childreen}
    </Sections>
  );
};
export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  childreen: PropTypes.node.isRequired,
};

import { Text } from './SectionHeadTitle.styled';
import PropTypes from 'prop-types';

const SectionHeadTitle = ({ pageTitle }) => {

  return (
    <Text>
      {pageTitle}
    </Text>
  );
};


SectionHeadTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}
export default SectionHeadTitle;

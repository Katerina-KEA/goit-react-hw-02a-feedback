import { getColor } from 'helpers/get-color';
import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackBtn } from '../Feedback/FeedbackOption.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <li key={option}>
          <FeedbackBtn
            key={option}
            type="button"
            color={getColor(option)}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

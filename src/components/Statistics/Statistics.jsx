import React from 'react';
import PropTypes from 'prop-types';
import { StatList, StatItem, StatValue } from '../Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatItem>
        Good: <StatValue>{good}</StatValue>
      </StatItem>
      <StatItem>
        Neutral: <StatValue>{neutral}</StatValue>
      </StatItem>
      <StatItem>
        Bad: <StatValue>{bad}</StatValue>
      </StatItem>
      <StatItem>
        Total: <StatValue>{total}</StatValue>
      </StatItem>
      <StatItem>
        PositivePercentage: <StatValue>{positivePercentage}%</StatValue>
      </StatItem>
    </StatList>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

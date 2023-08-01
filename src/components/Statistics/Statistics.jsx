import { getColor } from 'helpers/get-color';
import React from 'react';
import PropTypes from 'prop-types';
import { StatList, StatItem, StatValue } from '../Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatItem color={getColor('good')}>
        Good: <StatValue>{good}</StatValue>
      </StatItem>
      <StatItem color={getColor('neutral')}>
        Neutral: <StatValue>{neutral}</StatValue>
      </StatItem>
      <StatItem color={getColor('bad')}>
        Bad: <StatValue>{bad}</StatValue>
      </StatItem>
      <StatItem color={getColor('total')}>
        Total: <StatValue>{total}</StatValue>
      </StatItem>
      <StatItem color={getColor('positivePercentage')}>
        PositivePercentage: <StatValue>{positivePercentage}%</StatValue>
      </StatItem>
    </StatList>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

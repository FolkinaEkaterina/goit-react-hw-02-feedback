import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'components/Feedback.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Wrapper>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </Wrapper>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage ? positivePercentage : 0}%</p>
    </>
  );
};

Statistic.propType = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistic;

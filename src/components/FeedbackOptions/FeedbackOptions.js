import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, OptionBtn } from 'components/Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <OptionBtn
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionBtn>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

import React from 'react';
import css from '../Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonWrapper}>
    {options.map(option => {
      return (
        <button
          key={option}
          className={css.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      );
    })}
  </div>
);

export default FeedbackOptions;

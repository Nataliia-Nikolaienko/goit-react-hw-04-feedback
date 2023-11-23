import React from 'react';
import PropTypes from 'prop-types';
import css from '../Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statisticWrapper}>
      <h2 className={css.statisticTitle}>Statistics</h2>

      <ul className={css.statisticList}>
        <li className={css.statisticListItem}>Good: {good}</li>
        <li className={css.statisticListItem}>Neutral: {neutral}</li>
        <li className={css.statisticListItem}>Bad: {bad}</li>
      </ul>
      <p className={css.totalStatistic}>Total: {total}</p>
      <p className={css.percentage}>
        Percentage of positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;

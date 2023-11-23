import { useState } from 'react';
import Sections from './Sections/Sections';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistic/Statistic';
import Notification from '../components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const values = [good, neutral, bad];
    const totalFeedback = values.reduce((total, value) => total + value, 0);

    return totalFeedback;
  };

  const countTotal = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor((100 / countTotal) * good);

    return percentage;
  };

  const countPercentage = countPositiveFeedbackPercentage();
  return (
    <Sections title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      {countTotal === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotal}
          positivePercentage={countPercentage}
        />
      )}
    </Sections>
  );
}

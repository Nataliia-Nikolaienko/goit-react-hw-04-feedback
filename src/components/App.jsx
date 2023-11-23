import { Component } from 'react';
import Sections from './Sections/Sections';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistic/Statistic';
import Notification from '../components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce(
      (totalFeedback, value) => totalFeedback + value,
      0
    );

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const percentege = Math.round((this.state.good / total) * 100);
    return percentege;
  };

  render() {
    const countTotal = this.countTotalFeedback();
    const countPercentage = this.countPositiveFeedbackPercentage();
    return (
      <Sections title="Please leave feedback">
        <FeedbackOptions
          options={[...Object.keys(this.state)]}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotal}
            positivePercentage={countPercentage}
          />
        )}
      </Sections>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification ';
import FeedbackOptions from './Feedback/FeedbackOptions';
import SectionHeadTitle from './SectionHeadTitle/SectionHeadTitle';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return this.countTotalFeedback !== 0
      ? ((good / this.countTotalFeedback()) * 100).toFixed(2)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const ObjectCase = ['good', 'neutral', 'bad'];
    console.log(this.countPositiveFeedbackPercentage());

    return (
      <div
        className="container"
      >
        <SectionHeadTitle pageTitle="Cafe Expresso" />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={ObjectCase}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { hot } from 'react-hot-loader/root';
import Calendar from './Calendar';
import Widget from './Widget/Widget';
import GlobalFonts from '../assets/fonts/GlobalFonts';

class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      currentMonth: 10,
      adults: 1,
      children: 0,
      infants: 0,
      totalGuests: 1,
    };

    this.increaseGuestCount = this.increaseGuestCount.bind(this);
    this.decreaseGuestCount = this.decreaseGuestCount.bind(this);
    this.calcTotalGuests = this.calcTotalGuests.bind(this);
  }

  calcTotalGuests() {
    const { adults, children } = this.state;
    this.setState({ totalGuests: adults + children });
  }

  increaseGuestCount(event) {
    const targetName = event.target.name;
    const currentValue = this.state[targetName];

    this.setState({ [targetName]: currentValue + 1 }, () => { this.calcTotalGuests(); });
  }

  decreaseGuestCount(event) {
    const targetName = event.target.name;
    const currentValue = this.state[targetName];

    this.setState({ [targetName]: currentValue - 1 }, () => { this.calcTotalGuests(); });
  }

  render() {
    const guestType = 'adults';
    const {
      adults, children, infants, totalGuests,
    } = this.state;
    return (
      <>
        <GlobalFonts />
        <Widget
          state={{
            adults, children, infants, totalGuests,
          }}
          increaseGuestCount={this.increaseGuestCount}
          decreaseGuestCount={this.decreaseGuestCount}
        />
        <Calendar />
      </>
    );
  }
}

export default hot(Booking);

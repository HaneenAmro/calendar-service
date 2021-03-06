import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WidgetHeader from './WidgetHeader';
import WidgetDateGuest from './WidgetDateGuest';
import GuestModal from './GuestModal';
import MainButton from './MainButton';

const WidgetWrapper = styled.div`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  min-width: 220px;
  max-width: 372px;
  height: auto;
  margin: 50px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      startDateSelected: false,
      guestModalVisible: false,
    };

    this.toggleGuestModal = this.toggleGuestModal.bind(this);
    this.hideGuestModal = this.hideGuestModal.bind(this);
  }

  toggleGuestModal() {
    this.setState((prevState) => ({ guestModalVisible: !prevState.guestModalVisible }));
  }

  hideGuestModal() {
    this.setState({ guestModalVisible: false });
  }

  render() {
    const { guestModalVisible } = this.state;
    const { state, increaseGuestCount, decreaseGuestCount } = this.props;
    return (
      <WidgetWrapper>
        <WidgetHeader />
        <WidgetDateGuest
          toggleGuestModal={this.toggleGuestModal}
          guestModalVisible={guestModalVisible}
          state={state}
        />
        <GuestModal
          hideModal={this.hideGuestModal}
          show={guestModalVisible}
          state={state}
          increaseGuestCount={increaseGuestCount}
          decreaseGuestCount={decreaseGuestCount}
        />
        <MainButton />
      </WidgetWrapper>
    );
  }
}

export default Widget;

Widget.propTypes = {
  state: PropTypes.objectOf(PropTypes.number).isRequired,
  increaseGuestCount: PropTypes.func.isRequired,
  decreaseGuestCount: PropTypes.func.isRequired,

};

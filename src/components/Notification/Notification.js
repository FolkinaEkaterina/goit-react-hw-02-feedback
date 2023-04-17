import React from 'react';
import PropTypes from 'prop-types';
import { NotificationMsg } from 'components/Feedback.styled';

const Notification = ({ message }) => {
  return (
    <>
      <NotificationMsg>{message}</NotificationMsg>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;

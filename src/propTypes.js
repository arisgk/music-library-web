/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

const song = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  albumCover: PropTypes.string,
  duration: PropTypes.number,
});

export default {
  song,
};

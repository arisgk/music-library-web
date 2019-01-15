import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import songSchema from 'redux/schemas/song';

const songsEntitiesSelector = state => state.songs.entities;
export const songsResultSelector = state => state.songs.result;

export const getDenormalizedSongs = createSelector(
  songsEntitiesSelector,
  songsResultSelector,
  (entities, result) =>
    denormalize({ songs: result }, { songs: [songSchema] }, { songs: entities })
      .songs,
);

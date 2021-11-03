// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FavoriteMusicTypes, FavoriteMusicTypesMusicTypes, MusicTypes, Music, MusicListMusic, MusicList, User, Singer } = initSchema(schema);

export {
  FavoriteMusicTypes,
  FavoriteMusicTypesMusicTypes,
  MusicTypes,
  Music,
  MusicListMusic,
  MusicList,
  User,
  Singer
};
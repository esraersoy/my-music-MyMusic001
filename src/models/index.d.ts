import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FavoriteMusicTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FavoriteMusicTypesMusicTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MusicTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MusicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MusicListMusicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MusicListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SingerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class FavoriteMusicTypes {
  readonly id: string;
  readonly score?: number;
  readonly FavoriteMusicTypesMusicTypes?: (FavoriteMusicTypesMusicTypes | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FavoriteMusicTypes, FavoriteMusicTypesMetaData>);
  static copyOf(source: FavoriteMusicTypes, mutator: (draft: MutableModel<FavoriteMusicTypes, FavoriteMusicTypesMetaData>) => MutableModel<FavoriteMusicTypes, FavoriteMusicTypesMetaData> | void): FavoriteMusicTypes;
}

export declare class FavoriteMusicTypesMusicTypes {
  readonly id: string;
  readonly favoritemusictypes: FavoriteMusicTypes;
  readonly musictypes: MusicTypes;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FavoriteMusicTypesMusicTypes, FavoriteMusicTypesMusicTypesMetaData>);
  static copyOf(source: FavoriteMusicTypesMusicTypes, mutator: (draft: MutableModel<FavoriteMusicTypesMusicTypes, FavoriteMusicTypesMusicTypesMetaData>) => MutableModel<FavoriteMusicTypesMusicTypes, FavoriteMusicTypesMusicTypesMetaData> | void): FavoriteMusicTypesMusicTypes;
}

export declare class MusicTypes {
  readonly id: string;
  readonly name?: string;
  readonly Music?: (Music | null)[];
  readonly favoritemusictypess?: (FavoriteMusicTypesMusicTypes | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MusicTypes, MusicTypesMetaData>);
  static copyOf(source: MusicTypes, mutator: (draft: MutableModel<MusicTypes, MusicTypesMetaData>) => MutableModel<MusicTypes, MusicTypesMetaData> | void): MusicTypes;
}

export declare class Music {
  readonly id: string;
  readonly nam?: string;
  readonly body?: string;
  readonly singerID?: string;
  readonly musiclists?: (MusicListMusic | null)[];
  readonly musictypesID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Music, MusicMetaData>);
  static copyOf(source: Music, mutator: (draft: MutableModel<Music, MusicMetaData>) => MutableModel<Music, MusicMetaData> | void): Music;
}

export declare class MusicListMusic {
  readonly id: string;
  readonly musiclist: MusicList;
  readonly music: Music;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MusicListMusic, MusicListMusicMetaData>);
  static copyOf(source: MusicListMusic, mutator: (draft: MutableModel<MusicListMusic, MusicListMusicMetaData>) => MutableModel<MusicListMusic, MusicListMusicMetaData> | void): MusicListMusic;
}

export declare class MusicList {
  readonly id: string;
  readonly name?: string;
  readonly MusicListMusics?: (MusicListMusic | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MusicList, MusicListMetaData>);
  static copyOf(source: MusicList, mutator: (draft: MutableModel<MusicList, MusicListMetaData>) => MutableModel<MusicList, MusicListMetaData> | void): MusicList;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly emailaddress?: string;
  readonly birthdate?: string;
  readonly gender?: string;
  readonly country?: string;
  readonly musicgenres?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Singer {
  readonly id: string;
  readonly name?: string;
  readonly Music?: (Music | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Singer, SingerMetaData>);
  static copyOf(source: Singer, mutator: (draft: MutableModel<Singer, SingerMetaData>) => MutableModel<Singer, SingerMetaData> | void): Singer;
}
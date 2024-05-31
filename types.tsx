// types.tsx

export type Post = {
  id: string;
  userProfileImage: string;
  redditUsername: string;
  promotedUsername: string;
  title: string;
  body: string;
  imageUrl: string;
  likesCount: number;
  commentsCount: number;
};

export type PostComponentProps = {
  id: string;
  userProfileImage: string;
  redditUsername: string;
  // promotedUsername: string;
  title: string;
  body: string;
  imageUrl: string;
  likesCount: number;
  commentsCount: number;
};

export type RootStackParamList = {
  // PostComponent: undefined;
  PostDetails: {
    id: string;
  };
};
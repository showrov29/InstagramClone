import users from './User';
const postData = [
  {
    imageUrl: 'https://picsum.photos/200',
    user: users[0],
    likes: 123,
    caption: 'This is a caption',
    profile_picture: users[0].image,
    comments: [
      {
        user: users[1],
        comment: 'This is a comment',
      },
      {
        user: users[2],
        comment: 'This is a comment',
      },
      {
        user: users[3],
        comment: 'This is a comment',
      },
      {
        user: users[4],
        comment: 'This is a comment',
      },
      {
        user: users[5],
        comment: 'This is a comment',
      },
      {
        user: users[6],
        comment: 'This is a comment',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200',
    user: users[1],
    likes: 123,
    caption: 'This is a caption',
    profile_picture: users[1].image,
    comments: [
      {
        user: users[0],
        comment: 'This is a comment',
      },
      {
        user: users[2],
        comment: 'This is a comment',
      },
      {
        user: users[3],
        comment: 'This is a comment',
      },
      {
        user: users[4],
        comment: 'This is a comment',
      },
      {
        user: users[5],
        comment: 'This is a comment',
      },
      {
        user: users[6],
        comment: 'This is a comment',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200',
    user: users[2],
    likes: 123,
    caption: 'This is a caption',
    profile_picture: users[2].image,
    comments: [
      {
        user: users[0],
        comment: 'This is a comment',
      },
      {
        user: users[1],
        comment: 'This is a comment',
      },
      {
        user: users[3],
        comment: 'This is a comment',
      },
      {
        user: users[4],
        comment: 'This is a comment',
      },
      {
        user: users[5],
        comment: 'This is a comment',
      },
      {
        user: users[6],
        comment: 'This is a comment',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200',
    user: users[3],
    likes: 123,
    caption: 'This is a caption',
    profile_picture: users[3].image,
    comments: [
      {
        user: users[0],
        comment: 'This is a comment',
      },
      {
        user: users[1],
        comment: 'This is a comment',
      },
      {
        user: users[2],
        comment: 'This is a comment',
      },
      {
        user: users[4],
        comment: 'This is a comment',
      },
      {
        user: users[5],
        comment: 'This is a comment',
      },
      {
        user: users[6],
        comment: 'This is a comment',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200',
    user: users[4],
    likes: 123,
    caption: 'This is a caption',
    profile_picture: users[4].image,
    comments: [
      {
        user: users[0],
        comment: 'This is a comment',
      },
      {
        user: users[1],
        comment: 'This is a comment',
      },
      {
        user: users[3],
        comment: 'This is a comment',
      },
      {
        user: users[4],
        comment: 'This is a comment',
      },
      {
        user: users[5],
        comment: 'This is a comment',
      },
      {
        user: users[6],
        comment: 'This is a comment',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200',
    user: users[5],
    likes: 123,
    caption: 'This is a caption',
    profile_picture: users[5].image,
    comments: [
      {
        user: users[0],
        comment: 'This is a comment',
      },
      {
        user: users[1],
        comment: 'This is a comment',
      },
      {
        user: users[3],
        comment: 'This is a comment',
      },
      {
        user: users[4],
        comment: 'This is a comment',
      },
      {
        user: users[5],
        comment: 'This is a comment',
      },
      {
        user: users[6],
        comment: 'This is a comment',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200',
    user: users[6],
    likes: 123,
    caption: 'This is a caption',
    profile_picture: users[6].image,
    comments: [
      {
        user: users[0],
        comment: 'This is a comment',
      },
      {
        user: users[1],
        comment: 'This is a comment',
      },
      {
        user: users[3],
        comment: 'This is a comment',
      },
      {
        user: users[4],
        comment: 'This is a comment',
      },
      {
        user: users[5],
        comment: 'This is a comment',
      },
      {
        user: users[6],
        comment: 'This is a comment',
      },
    ],
  },
];
export default postData;

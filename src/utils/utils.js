import axios from 'axios';

export const getPosts = async cb => {
  cb(x => ({ ...x, status: 'loading' }));
  const res = await axios.get('http://localhost:3000/api/posts/all-posts');
  if (res.status === 200) {
    cb({ data: res.data.posts, status: 'idle' });
  } else {
    cb({ data: [], status: 'loading' });
  }
};

export const getPost = async cb => {
  // logic goes here
};

export const getFeaturedPosts = async cb => {
  cb(x => ({ ...x, status: 'loading' }));
  const res = await axios.get('http://localhost:3000/api/posts/featured-posts');
  if (res.status === 200) {
    cb({ data: res.data.posts, status: 'idle' });
  } else {
    cb({ data: [], status: 'loading' });
  }
};

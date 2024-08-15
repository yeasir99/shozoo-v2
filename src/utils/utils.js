import axios from 'axios';

export const getPosts = async cb => {
  cb(x => ({ ...x, status: 'loading' }));
  const res = await axios.get('http://localhost:3000/api/posts/all-posts');
  if (res.status === 200) {
    cb({ data: res.data.posts, status: 'idle' });
  } else {
    cb({ data: [], status: 'idle' });
  }
};

export const getPost = async (cb, id) => {
  cb(x => ({ ...x, status: 'loading' }));
  const res = await axios.get(`http://localhost:3000/api/posts/${id}`);
  if (res.status === 200) {
    cb({ data: res.data.post, status: 'idle' });
  } else {
    cb({ data: [], status: 'idle' });
  }
};

export const getFeaturedPosts = async cb => {
  cb(x => ({ ...x, status: 'loading' }));
  const res = await axios.get('http://localhost:3000/api/posts/featured-posts');
  if (res.status === 200) {
    cb({ data: res.data.posts, status: 'idle' });
  } else {
    cb({ data: null, status: 'idle' });
  }
};

export const deletePost = async (cb, id) => {
  const res = await axios.delete(`http://localhost:3000/api/posts/${id}`);
  if (res.status === 200) {
    cb(x => {
      const updatedData = x.data.filter(y => y._id !== id);

      return {
        data: updatedData,
        status: x.status,
      };
    });
  }
};

export const getHeadlines = async cb => {
  const res = await axios.get('http://localhost:3000/api/posts/headline');
  if (res.status === 200) {
    cb(x => ({ ...x, data: res.data.headlines, status: 'idle' }));
  } else {
    cb(x => ({ ...x, status: 'idle' }));
  }
};

export const handleHeadline = async id => {
  const url = `http://localhost:3000/api/posts/headline/${id}`;
  await axios.get(url);
};

export const getCarouselData = async cb => {
  const res = await axios.get('http://localhost:3000/api/carousel');
  if (res.status === 200) {
    cb(x => ({ ...x, data: res.data.posts, status: 'idle' }));
  } else {
    cb(x => ({ ...x, status: 'idle' }));
  }
};

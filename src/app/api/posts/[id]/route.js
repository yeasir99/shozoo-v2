import connectDB from '../../../../../config/connectDB';
import Post from '../../../../../models/post';

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const post = await Post.findById(params.id);

    if (!post) {
      return new Response('Not Found', {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ post }), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    const post = await Post.findById(params.id);

    if (!post) {
      return new Response('Not Found', {
        status: 404,
      });
    }

    await post.deleteOne();

    return new Response(JSON.stringify({ msg: 'Deleted successfully' }), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};

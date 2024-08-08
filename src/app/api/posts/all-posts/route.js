import connectDB from '../../../../../config/connectDB';
import Post from '../../../../../models/post';

export const GET = async () => {
  try {
    await connectDB();

    const posts = await Post.find({});

    return new Response(JSON.stringify({ data: posts }), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};

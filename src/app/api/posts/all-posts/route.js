import connectDB from '../../../../../config/connectDB';
import Post from '../../../../../models/post';

export const GET = async () => {
  try {
    await connectDB();

    const posts = await Post.find({}).lean();

    return new Response(JSON.stringify({ posts }), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};

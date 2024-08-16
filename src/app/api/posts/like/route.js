import connectDB from '../../../../../config/connectDB';
import Post from '../../../../../models/post';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

export const POST = async request => {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', {
        status: 401,
      });
    }
    const requestHeaders = new Headers(request.headers);
    const postId = requestHeaders.get('Id');
    const postData = await Post.findById(postId);

    if (!postData) {
      return new Response('Not Found', {
        status: 404,
      });
    }

    const existInLike = postData.likes.filter(
      item => item.user.toString() === session.user.id.toString()
    );

    if (existInLike.length > 0) {
      const filteredPeople = postData.likes.filter(
        item => item.user.toString() !== session.user.id.toString()
      );

      postData.likes = filteredPeople;
      await postData.save();
      return new Response(JSON.stringify({ message: 'successfull' }), {
        status: 200,
      });
    }
    postData.likes.push({
      user: session.user.id,
    });

    await postData.save();
    return new Response(JSON.stringify({ message: 'successfull' }), {
      status: 200,
    });
  } catch (error) {
    return new Response('SomeThing Went Wrong', {
      status: 500,
    });
  }
};

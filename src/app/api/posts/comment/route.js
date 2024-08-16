import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import connectDB from '../../../../../config/connectDB';

export const POST = async request => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', {
        status: 401,
      });
    }

    await connectDB();

    const body = await request.json();

    console.log(body);

    return new Response(
      JSON.stringify(
        { msg: 'success' },
        {
          status: 200,
        }
      )
    );
  } catch (error) {
    return new Response('Something Went Wrong', { status: 500 });
  }
};

import connectDB from '../../../../config/connectDB';
import Carousel from '../../../../models/carousel';

export const GET = async () => {
  try {
    await connectDB();

    const posts = await Carousel.find({});

    return new Response(JSON.stringify({ posts }), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};

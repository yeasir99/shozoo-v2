import connectDB from '../../../../../config/connectDB';
import Headline from '../../../../../models/headline';

export const GET = async () => {
  try {
    await connectDB();
    const headlines = await Headline.find({});
    return new Response(JSON.stringify({ headlines }), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};

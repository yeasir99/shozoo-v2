import connectDB from '../../../../../config/connectDB';
import Headline from '../../../../../models/headline';

export const GET = async () => {
  try {
    await connectDB();
    const headlines = await Headline.find({}).lean();
    console.log(headlines)
    return new Response(JSON.stringify({ headlines }), {
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

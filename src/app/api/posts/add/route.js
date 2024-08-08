import connectDB from '../../../../../config/connectDB';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import cloudinary from '../../../../../config/cloudinary';
import Post from '../../../../../models/post';

export const POST = async request => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session?.user?.role !== 'admin') {
      return new Response('Unauthorized', {
        status: 401,
      });
    }

    await connectDB();
    const formData = await request.formData();

    // get all form data
    const title = formData.get('title');
    const description = formData.get('description');
    const category = formData.get('category');
    const image = formData.get('image');
    const featured = formData.get('featured');
    const viralPost = formData.get('viralPost');

    console.log(description);

    // upload image to cloudinary

    const imageBuffer = await image.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);
    const imageBase64 = imageData.toString('base64');

    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: 'sozoo',
      }
    );

    const postData = {
      title,
      description,
      category,
      image: {
        imageurl: result.secure_url,
        public_id: result.public_id,
      },
      featured,
      viralPost,
    };

    const newPost = new Post(postData);

    await newPost.save();

    return new Response(JSON.stringify({ message: 'success' }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('failed to add post', {
      status: 500,
    });
  }
};

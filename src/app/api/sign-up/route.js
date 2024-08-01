import connectDB from '../../../../config/connectDB';
import User from '../../../../models/user';
import bcrypt from 'bcryptjs';

export const POST = async request => {
  connectDB();
  try {
    const formData = await request.formData();

    const hashedPass = await bcrypt.hash(formData.get('password'), 10);

    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: hashedPass,
      role: 'user',
    };
    const res = await User.create(userData);
    return new Response(JSON.stringify({ message: 'success', res }), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to grab form Data', {
      status: 500,
    });
  }
};

import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

//to force vercel to not consider this file as static but as dynamic
export const dynamic = 'force-dynamic';

export const GET = async (req) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate('creator');
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to retrieve prompts', { status: 500 });
  }
};

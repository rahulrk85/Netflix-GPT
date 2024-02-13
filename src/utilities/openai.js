import OpenAI from 'openai';
import { OPEN_AI } from './constants';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI,
 dangerouslyAllowBrowser: true,
});

export default openai;
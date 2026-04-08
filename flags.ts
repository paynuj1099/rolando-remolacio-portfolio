import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

export const showResume = flag<boolean>({
  key: 'show-resume',
  description: 'Show resume section',
  adapter: vercelAdapter(),
});

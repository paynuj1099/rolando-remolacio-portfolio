import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

export const showResume = flag<boolean>({
  key: 'show-resume',
  description: 'Show resume section',
  adapter: process.env.FLAGS && process.env.FLAGS_SDK_KEY ? vercelAdapter() : undefined,
  decide: () => process.env.SHOW_RESUME === 'true',
  defaultValue: false,
});

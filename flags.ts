import { flag } from 'flags/next';

export const showResume = flag<boolean>({
  key: 'show-resume',
  description: 'Show resume section',
  decide: () => process.env.SHOW_RESUME === 'true',
  defaultValue: false,
});

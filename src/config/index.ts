let versions = {
  1: 'v1',
  2: 'v2'
} as const;

export type Version = typeof versions[keyof typeof versions];

export const version: Version =  (process.env.REACT_APP_DS_VERSION || 'v1') as Version;
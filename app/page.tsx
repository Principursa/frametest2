import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: '⬅️',
    },
    {
      label: '⬆️',
    },
    {
      label: '⬇️',
    },
    {
      label: '️️➡️'
    },

  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a boat story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Grand Theft Propy',
  description: 'GTP',
  openGraph: {
    title: 'GrandTheftPropy',
    description: 'GTP',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Grand Theft Propy</h1>
    </>
  );
}

import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import satori from "satori"

let length = 10
let height = 10
let gameMap  = Array(height).fill(0).map(() => Array(length).fill(0));

gameMap[height/2][length/2] = 1



export default function Page() {
  return (
    <>
      <h1>Grand Theft Propy</h1>
      {GameState()}
    </>
  );
}

function GameState() {
  return(

      <>
        {gameMap.map((element,index)=> (<tr key={index}>{element.map((val,i) => Tiles(val) )}</tr>)) }
      </>

  )
}

function Tiles(value: number) {
  if( value == 1){
    return(
    <td>🟥</td>
    )
  }
  else return <td>⬜</td>
}
const svg = await satori(
  <div style={{ color: 'black' }}>hello, world</div>,
  {
    width: 600,
    height: 400,
  },
)

export const metadata: Metadata = {
  title: 'GrandTheftPropy',
  description: 'GTP',
  openGraph: {
    title: 'GrandTheftPropy',
    description: 'GTP',
    images: [svg],
  },
  other: {
    ...frameMetadata,
  },
};

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
    src: svg,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});
import CircleIcon from '@mui/icons-material/Circle'

interface Ipigeon {
   sx?: {
      position?: string
      width?: string
      left?: string
      top?: string
      right?: string
   }
   position?: string
   width?: number | undefined
   height?: number | undefined
}

// this is where you need styled components, one with circle, one without.. though this might be overkill for this purpose
// also images should be pre formatted for sure

export const RickyPigeon = ({ width = 400, height, position }: Ipigeon) => {
   return (
      <img
         src="/ricky-pigeon-circle-black.svg"
         style={{ width: `${width}px` }}
         width={width}
         height={height}
      />
   )
}

export const VeronicaPigeon = ({
   width = 400,
   position = 'relative',
   height,
}: Ipigeon) => {
   return (
      <img
         src="/veronica-pigeon-circle-black.svg"
         style={{ width: `${width}px` }}
         width={width}
         height={height}
      />
   )
}

export const FreddyPigeon = ({ width = 400, height }: Ipigeon) => {
   return (
      <img
         src="/freddy-pigeon-circle-black.svg"
         style={{ width: `${width}px` }}
         height={height}
      />
   )
}

export const LogoPigeon = ({ width, height }: Ipigeon) => {
   return <img src="/LogoPigeon.png" width={width} height={height} />
}

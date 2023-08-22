import { Card as MuiCard } from "@mui/material"
import styled from "@emotion/styled"

interface IStyledBackgroundCard {
  backgroundcolor?: string
  minwidth: string
  height: string
}

export const StyledCard = styled(MuiCard)<IStyledBackgroundCard>`
  background-color: ${(props) => props.backgroundcolor || "#BD9B45"};
  max-width: ${(props) => props.backgroundcolor};
`

// add variations here

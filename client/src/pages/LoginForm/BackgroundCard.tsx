import { minWidth } from "@mui/system"
import { StyledCard } from "./BackgroundCard.styles"

interface BackgroundCardProps {
  sx?: {}
  backgroundColor?: string
  minWidth: string
  cardText?: string
}

export const BackgroundCard = ({
  backgroundColor,
  minWidth,
  cardText,
}: BackgroundCardProps) => {
  return (
    <StyledCard
      backgroundcolor={backgroundColor}
      minwidth={minWidth}
      height="100px"
      color="warning"
      elevation={0}
    >
      {cardText}
    </StyledCard>
  )
}

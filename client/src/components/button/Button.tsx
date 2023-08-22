import { StyledButton } from './Button.styles'

interface ButtonProps {
   sx?: {}
   onClick?: (e: any) => void
   backgroundColor?: string | undefined
   buttonText: string
   iconComponent?: React.ReactNode
   color?: 'primary' | 'secondary' | 'warning'
   disableElevation?: boolean | undefined
   size?: 'small' | 'medium' | 'large'
}

export const Button = ({
   onClick,
   backgroundColor,
   iconComponent,
   buttonText,
   color,
   disableElevation,
   size,
}: ButtonProps) => {
   return (
      <>
         <StyledButton
            sx={{}}
            onClick={onClick}
            backgroundcolor={backgroundColor}
            endIcon={iconComponent}
            type="submit"
            variant="contained"
            color={color}
            disableElevation={disableElevation}
            size={size}
         >
            {buttonText}
         </StyledButton>
      </>
   )
}

import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled"

interface IStyledButton {
    backgroundcolor?: string, 
}

export const StyledButton = styled(MuiButton)<IStyledButton>`
    background-color: ${props => props.backgroundcolor || '#5a558f'};
    font-family: "poppins";
`
export const StyledButtonWarning = styled(StyledButton)<IStyledButton>`
    background-color: ${props => props.backgroundcolor || '#BD9B45' }
    
`

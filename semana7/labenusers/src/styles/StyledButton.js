import styled from 'styled-components'

export const StyledButton = styled.button`
  margin: 0 5px;
  background-color: ${props => {
    switch (props.className) {
      case "edit":
      case "inspect":
        return "orange"
      case "primary":
        return "green"
      default:
        return "red"
      }
    }};

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);

  :active, :focus :focus:active {
    box-shadow: none;
  }
`
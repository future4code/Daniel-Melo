import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border: 3px solid;
  border-color: ${props => props.color};
  border-radius: 50%;
  transition: height 150ms ease-in, width 150ms ease-in, background-color 150ms ease-in, color 150ms ease-in;
  color: ${props => props.color};

  :hover {
    color: #FFF;
    height: 75px;
    width: 75px;
    background-color: ${props => props.color}
  }
`

export default StyledButton
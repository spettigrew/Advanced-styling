import React from 'react';
import { Button, Alert, Spinner } from 'reactstrap';
import styled from 'styled-components'


// Template literals like below get transpiled to this** //

// const CustomButton = styled.button({
//   background: 'darkblue',
//   color: 'white',
//   border: 'none',
//   borderRadius: 4,
//   padding: '10px 15px',
//      ' &: hover': {
//       opacity: 0.7
//     }
//     })

const CustomButton = styled.button`
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15 px; 
  ${(props) => props.size === 'small' ? 'padding: 0px' : null};
  ${(props) => props.size === 'medium' ? 'padding: 10px 15px' : null};
  ${(props) => props.size === 'large' ? 'padding: 20px 30px' : null};

    &:hover: {
    opacity: 0.7;
}
`
const GreenButton = styled(Button)`
background-color: darkgreen;
`

function App() {
  return (
    <div>
      <Button color="danger">Danger</Button>
      <Alert color="danger">
        <Spinner color="danger" size="sm" />
        This is an alert
      </Alert>

      <CustomButton size="small">Hello World</CustomButton>
      <CustomButton size="medium">Hello World</CustomButton>
      <GreenButton size="large">Hello World</GreenButton>
    </div>
  );

}

export default App;

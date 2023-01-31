import styled from 'styled-components'
import './App.css'
import GoogleMap from './mapsAPI'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.utd ? "#BDECB6" : props.gh ? "#6F6F6F": props.fb ? "#4fa8f6" : "white"};
  color: ${props => props.utd ? "white" : props.gh ? "#f1f6fb" : props.fb ? "#fff" : "black"};

  font-size: 1.5em;
  font-weight: 500;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.utd ? "#008F39" : props.gh ? "#020409" : props.fb ? "#2a63d9" : "black"};
  border-radius: 3px;
  cursor: pointer;
`;

function App() {
  return (
      <div className='wrapper'>
      <h1>Botones</h1>
      <h2>Mi nombre es: <span>Rios Torres Diego Alexis</span></h2>
      <div className='buttons-div'>
        <a href='https://www.utd.edu.mx'><Button utd>UTD</Button></a>
        <a href='https://github.com/DiegoRios546/components.git'><Button gh>GitHub</Button></a>
        <a href='https://www.facebook.com/profile.php?id=100014932184855'><Button fb>Red social</Button></a>
      </div>
      <GoogleMap />
    </div>
    
  );
}

export default App;

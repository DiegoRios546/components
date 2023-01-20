import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
function App() {
  return (
    <div className="App">
    
    <Button>github</Button>
    <Button>github</Button>
    <Button primary>facebook</Button>
    <h1>Rios Torres Diego Alexis<h1/>
    </div>
  );
}

export default App;

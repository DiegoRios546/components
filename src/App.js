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
    
    <Button><h1>Rios Torres Diego Alexis</h1></Button>
    <Button><h2>5B</h2></Button>
    <Button><a href='https://github.com/DiegoRios546/components.git'>github</a></Button>
    <Button primary> <a href='https://www.facebook.com/profile.php?id=100014932184855'>facebook</a></Button>
    
    </div>
  );
}

export default App;

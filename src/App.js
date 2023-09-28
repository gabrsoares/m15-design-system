import './App.css';
import { Button } from './ds';
import { Select } from './ds';

function App() {
  return (
    <div className="App">
      <h1>Testando</h1>
      <Button variation="secondary">Click me</Button>
      <Select variation="secondary" fSize="big" size="big" labelText="Testando">
        <option value="ola">ola</option>
      </Select>
    </div>
  );
}

export default App;

import './App.css';
import { Button, Flex, Input, Select } from './ds';

function App() {
  return (
    <div className="App">
        <Flex direction='column' align='flex-start' justify='center'>
          <Input direction='column' label='Nome' id='nome'/>
          <Input direction='column' label='Email' id='email'/>
          <Select direction='column' labelText='Gênero:'>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
          </Select>
          <Button variation='primary' size='small'>Enviar</Button>
        </Flex>
    </div>
  );
}

export default App;

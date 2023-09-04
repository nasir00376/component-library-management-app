import { Button, Header, Stack } from './components';

function App() {
  return (
    <div className='app'>
      <Stack gap={24}>
        <Header.h1>POC - App</Header.h1>
        <Button>I am a button!</Button>
      </Stack>
    </div>

  );
}

export default App;

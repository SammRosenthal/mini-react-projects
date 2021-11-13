import Lane from './components/lane/Lane';

function App() {
  return (
    <div className="md:flex-row h-screen w-screen flex items-center flex-col overflow-auto">
      <Lane />
      <Lane />
      <Lane />
    </div>
  );
}

export default App;

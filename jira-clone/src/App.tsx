import Lane from './components/lane/Lane';


function App() {

  return (
    <div className="md:flex-row h-screen w-screen flex items-center flex-col overflow-auto">
      <Lane title="To Do" />
      <Lane title="In Progress" />
      <Lane title="In QA" />
      <Lane title="In CA" />
      <Lane title="Done" />
    </div>
  );
}

export default App;

import Lane from './components/lane/Lane';


function App() {

  return (
    <div className="md:flex-row h-screen w-screen flex items-center flex-col overflow-auto">
      <Lane title="To Do" cards={4} />
      <Lane title="In Progress" cards={2} />
      <Lane title="In QA" cards={1} />
      <Lane title="In CA" cards={0} />
      <Lane title="Done" cards={3} />
    </div>
  );
}

export default App;

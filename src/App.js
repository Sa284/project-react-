import './App.css';
import ListTask from './components/ListTask'
import AddTask from './components/Addtask'
function App() {
  return (
    <div  className='container'>
      <h1>TO-DO LIST </h1> <hr></hr>
      <AddTask/>

      <ListTask />
    </div>
  );
}

export default App;
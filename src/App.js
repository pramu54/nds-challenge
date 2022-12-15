import './App.css';
import Layout from './layout/layout';
import ListEmployees from './pages/listEmployees/listEmployees';

function App() {
  return (
    <>
      <Layout content={<ListEmployees />}/>
    </>
  );
}

export default App;

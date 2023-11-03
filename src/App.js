import RiotMain from 'component/pages/RiotMain';
import './App.css';
import { GlobalStyles } from 'component/common/styled/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <RiotMain />
    </div>
  );
}

export default App;

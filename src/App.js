import './App.css';
import {Header, Main, Side, Mordal} from './components/MainComponents.jsx';
import { useAlcoholList } from './hooks/useAlcoholList';
import {useMordal} from './hooks/useMordal.js';

function App() {
  
  const {mordalState, setMordalState} = useMordal(false);
  //초기값 수정해야함
  const {alcoholList, pushAlcohol} = useAlcoholList([]);

  const style = "flex flex-row h-full box-border";
  
  return (
    <div className="App h-full box-border">
      <Header />
      <div className={style}>
        <Side setMordalState={setMordalState}/>
        <Main />
      </div>
      {mordalState ? <Mordal 
        setMordalState={setMordalState}
        pushAlcohol={pushAlcohol} /> : null}
    </div>
  );
}

export default App;

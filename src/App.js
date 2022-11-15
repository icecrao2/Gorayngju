import './App.css';
import { useState } from 'react';
import {Header, Main, Side, Mordal} from './components/';
import { useAlcoholList } from './hooks/useAlcoholList';

function App() {
  
  
  const [mordalState, setMordalState] = useState(false);
  const {alcoholList, pushAlcohol} = useAlcoholList([]);

  return (
    <div className="App h-full box-border">
      <Header />
      <div className={"flex flex-row h-full box-border"}>
        <Side setMordalState={setMordalState} alcoholList={alcoholList}/>
        <Main alcoholList={alcoholList} />
      </div>
      {mordalState ? <Mordal 
        setMordalState={setMordalState}
        pushAlcohol={pushAlcohol} /> : null}
    </div>
  );
}

export default App;

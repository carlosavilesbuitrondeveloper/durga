import React from 'react';

//components
import Interaction from './components/Interaction';
import Intro from './components/Intro';
import Headline from './components/Headlne';
import SubHeadline from './components/SubHeadline';
import Background from './components/Background';

const App:React.FC = ()=>{
  return (
    <div className="App">

      <Background />

      <Headline copy="Durga Purga" />
      <SubHeadline copy="NYC 2021 : October 11-15" />

      <Intro />
      <Interaction />
  
    </div>
  );
}

export default App;

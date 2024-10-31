import { useState } from 'react'
import descendingSorter from './modules/recordSorter';
import Layout from './components/Layout';
import RegisterRecord from './components/RegisterRecord';
import RecordTable from './components/RecordTable';
import RecordOrderingMenu from './components/RecordOrderingMenu';

function App() {
  const [oderingOption, setOderingOption] = useState('gold');
  const LocalMedalsData = localStorage.getItem("obtainedMedals");
  const parsedMedalsData = JSON.parse(LocalMedalsData);
  const initialState = (parsedMedalsData) ? descendingSorter(oderingOption, parsedMedalsData) : [];

  const [obtainedMedals, setObtainedMedals] = useState(initialState);
  const medalsStateHook = [obtainedMedals, setObtainedMedals];
  
  return (
    <Layout>
      <RecordOrderingMenu medalsStateHook={medalsStateHook} setOderingOption={setOderingOption}/>
      <RegisterRecord medalsStateHook={medalsStateHook} oderingOption={oderingOption}/>
      <RecordTable medalsStateHook={medalsStateHook}/>
    </Layout>
  );
}

export default App


/*
할 일

타이틀 꾸미기
'Or는 프랑스어로 금이라는 뜻이에요' 문구 위치 고민하기
tailwind css?
--pseudo class 설정하기

리드미 작성하기
*/
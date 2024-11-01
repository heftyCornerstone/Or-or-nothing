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
      <RecordOrderingMenu medalsStateHook={medalsStateHook} setOderingOption={setOderingOption} />
      <RegisterRecord medalsStateHook={medalsStateHook} oderingOption={oderingOption} />
      <RecordTable medalsStateHook={medalsStateHook} />
    </Layout>
  );
}

export default App
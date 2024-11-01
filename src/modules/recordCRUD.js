import descendingSorter from "./recordSorter";

const validityCheck = (isCountryStr, isMedalInvalid) => {
    if (!isCountryStr || isMedalInvalid) {
        const countryInvalid = (!isCountryStr) ? '\n국가란에는 숫자를 입력할 수 없습니다' : '';
        const medalInvalid = (isMedalInvalid) ? '\n메달란에는 양의 정수와 0만 입력할 수 있습니다' : '';
        const alertMessage = `올바른 값을 입력해주세요!${countryInvalid}${medalInvalid}`;
        
        alert(alertMessage);
        return false
    }
    return true
}

const setData = (newObtainedMedals, setState) => {
    const newData = JSON.stringify(newObtainedMedals);

    setState(newObtainedMedals);
    localStorage.setItem("obtainedMedals", newData);
}

const dataHandlerConfig = (e, state) => {
    const medalData = e.target;
    const { country, gold, silver, bronze } = medalData;
    const medals = {
        'gold': parseInt(gold.value),
        'silver': parseInt(silver.value),
        'bronze': parseInt(bronze.value),
        'overall': (parseInt(gold.value) + parseInt(silver.value) + parseInt(bronze.value)),
    }
    const medalsValues = Object.values(medals);
    const countries = state.map((curData) => curData.country);
    const isIncluded = countries.includes(country.value);
    const isCountryStr = /[^0-9]+$/.test(country.value);
    const isMedalInvalid = medalsValues.some( (medalValue)=>{
        return (Number.isInteger(medalValue) && medalValue>=0) ? false : true
    } );
    const newMedalData = {
        'country': country.value,
        ...medals
    }

    return { 
        'isIncluded': isIncluded, 
        'newMedalData': newMedalData,
        'isCountryStr': isCountryStr,
        'isMedalInvalid': isMedalInvalid,
    };
}

const addObtainedMedals = (e, useStateHook, orderingOption) => {
    const [state, setState] = useStateHook;
    const { isIncluded, newMedalData, isCountryStr, isMedalInvalid } = dataHandlerConfig(e, state);
    
    if(!validityCheck(isCountryStr, isMedalInvalid)) return;
    
    if (isIncluded) {
        alert('이미 등록된 국가입니다');
        return;
    };

    const newObtainedMedals = [...state, newMedalData];
    const sortedData = descendingSorter(orderingOption, newObtainedMedals);

    setData(sortedData, setState);
}

const updateObtainedMedals = (e, useStateHook, orderingOption) => {
    const [state, setState] = useStateHook;
    const country = e.target.country.value;
    const { isIncluded, newMedalData, isCountryStr, isMedalInvalid  } = dataHandlerConfig(e, state);
    
    if(!validityCheck(isCountryStr, isMedalInvalid)) return;
    
    if (!isIncluded) {
        alert('입력하신 국가를 표에서 찾을 수 없습니다');
        return;
    };

    const filteredData = state.filter((curData) => (curData.country !== country));
    const newObtainedMedals = [...filteredData, newMedalData];
    const sortedData = descendingSorter(orderingOption, newObtainedMedals);

    setData(sortedData, setState);
}

const deleteObtainedMedals = (e, useStateHook) => {
    const [state, setState] = useStateHook;
    const country = e.target.closest('.record-row').dataset.country;

    if (confirm(`정말 ${country}의 메달 기록을 삭제하시겠습니까?`)) {

        const filteredData = state.filter((curData) => (curData.country !== country));
        const newObtainedMedals = [...filteredData];

        setData(newObtainedMedals, setState);
    }
}

export { addObtainedMedals, updateObtainedMedals, deleteObtainedMedals }
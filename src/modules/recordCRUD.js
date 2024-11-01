import descendingSorter from "./recordSorter";

const setData = (newObtainedMedals, setState) => {
    const newData = JSON.stringify(newObtainedMedals);

    setState(newObtainedMedals);
    localStorage.setItem("obtainedMedals", newData);
}

const dataHandlerConfig = (e, state) => {
    const medalData = e.target;
    const { country, gold, silver, bronze } = medalData;
    const countries = state.map((curData) => curData.country);
    const isIncluded = countries.includes(country.value);
    const newMedalData = {
        'country': country.value,
        'gold': parseInt(gold.value),
        'silver': parseInt(silver.value),
        'bronze': parseInt(bronze.value),
        'overall': (parseInt(gold.value) + parseInt(silver.value) + parseInt(bronze.value)),
    }

    return { 'isIncluded': isIncluded, 'newMedalData': newMedalData };
}

const addObtainedMedals = (e, useStateHook, orderingOption) => {
    const [state, setState] = useStateHook;
    const { isIncluded, newMedalData } = dataHandlerConfig(e, state);

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
    const { isIncluded, newMedalData } = dataHandlerConfig(e, state);

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
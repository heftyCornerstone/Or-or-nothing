import descendingSorter from "../modules/recordSorter";

const RecordOrderingMenu = ({setOderingOption, medalsStateHook})=>{
    const selectWrapper = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    }
    const selectStyle = {
        margin: '10px 0 10px 0',
        width: '150px',
        height: '30px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#558012',
        color: 'white',
        fontSize: '15px',
        fontWeigh: 'bold',
        textAlign: 'center',
        outline:'none',
    }

    const [obtainedMedals, setObtainedMedals] = medalsStateHook;
    const handler = (e)=>{
        const option = e.target.value;
        const validOptions = ['gold', 'overall'];
        
        if( validOptions.includes(option) ){
            const sortedMedals = descendingSorter(option, obtainedMedals);

            setObtainedMedals(sortedMedals);
            setOderingOption(option);
            return;
        }
        console.error(`${option} is not a valid option!`);
    };

    return (
        <div style={selectWrapper}>
            <select 
                name="ordering-options" 
                id="orderingOptions" 
                onChange={(e)=>{handler(e)}} 
                style={selectStyle}
            >
                <option value="gold">금메달 갯수 </option>
                <option value="overall">전체 메달 갯수</option>
            </select>
            <label htmlFor="orderingOptions">로 정렬하기</label>
        </div>
    );
}

export default RecordOrderingMenu
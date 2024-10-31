import SubmitButton from "./SubmitButton";
import { deleteObtainedMedals } from "../modules/recordCRUD";

const RecordColumns = ({ recordedData }) => {
    const recordedColumnKeys = Object.keys(recordedData);
    const recordedColumns = recordedColumnKeys.map((columnName)=>{
        return (
            <td className="record-column" key={`${columnName}Column`}>
                {recordedData[columnName]}
            </td>
        );
    });

    return (
        <>
            {recordedColumns}
        </>
    )
}

const RecordDeleteBtn = ({medalsStateHook, buttonColor})=>{
    const deleteBtnStyle = {
        width: '45px',
        height: '30px',
        backgroundColor: buttonColor,
    }

    const deleteHandler = (e)=>{deleteObtainedMedals(e, medalsStateHook)};
    
    return(
        <td className="record-column"> 
            <SubmitButton 
                onClickHandler={(e)=>(deleteHandler(e))} 
                style={deleteBtnStyle}
            >
                삭제
            </SubmitButton>
        </td> 
    );
}

const TableBody = ({medalsStateHook})=>{
    const defaultTableRowStyle={
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
        alignItems: 'center',
        width:'100%',
        height: '50px',
        textAlign: 'center',
    }
    
    const [ obtainedMedals, ] = medalsStateHook;
    const tableRows = obtainedMedals.map((curRowData, i)=>{
        const backgroundColor = (i%2) ? '#989bd9' : '#ebebeb';
        const buttonColor = (i%2) ? '#ebebeb' : '#989bd9';
        const recordTableRowStyle={...defaultTableRowStyle, backgroundColor: backgroundColor}

        return (
            <tr 
                className="record-row" 
                key={`${curRowData.country}Row`} 
                data-country={`${curRowData.country}`}
                style={recordTableRowStyle}
            >
                <RecordColumns recordedData={curRowData}/>
                <RecordDeleteBtn medalsStateHook={medalsStateHook} buttonColor={buttonColor}/> 
            </tr>
        );
    });

    return(
        <>
            {tableRows}
        </>
    )
}

const TableHead = ()=>{
    const recordTheadRowStyle={
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
        alignItems: 'center',
        width:'100%',
        height: '50px',
        textAlign: 'center',
    }

    const tableColumnItems = ['국가명', '금메달', '은메달', '동메달', '총합', '액션'];

    const tableColumns = tableColumnItems.map((item, i)=>{
        return (
            <td 
                className="record-head-column" 
                key={`${item}HeadColumn`}
            >
                {item}
            </td>
        );
    });

    return (
        <tr className="record-thead" style={recordTheadRowStyle}>
            {tableColumns}
        </tr>
    )
}

const RecordTable = ({medalsStateHook}) => {
    const recordTableStyle = {
        margin: '30px 0 30px 0',
        width:'90%',
        border: 'none',
        borderRadius: '15px',
        overflow: 'hidden',
    }
    const noDataNoteStyle = {
        textAlign:'center',
        height: '50px',
    }
    const theadStyle = {
        backgroundColor:'#d45353',
        fontWeight: 'bold',
        color: '#ebebeb',
    }

    const [ obtainedMedals, ] = medalsStateHook;
    const isContentful = (obtainedMedals) ? !!(obtainedMedals.length) : null;
    
    return (
        <table className="recordStyle" style={recordTableStyle}>
            <thead style={theadStyle}>
                <TableHead/>
            </thead>
            <tbody>
                { (isContentful) ? 
                    <TableBody medalsStateHook={medalsStateHook}/> 
                    : 
                    <tr 
                        className="record-column-no-data" 
                        key='noDataColumn' 
                        style={{backgroundColor: '#ebebeb'}}
                    >
                        <td className="no-data_notification" style={noDataNoteStyle}>아직 집계된 데이터가 없습니다!</td>
                    </tr>
                }
            </tbody>
        </table>
    );
}

export default RecordTable
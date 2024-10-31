import SubmitButton from "./SubmitButton";
import { addObtainedMedals, updateObtainedMedals } from "../modules/recordCRUD";
import { InputCountry, InputMedals } from "./InputCountryAndMedals";


const SubmitRegistration = () => {
    const registrationBtnStyle = {
        width:'120px',
        height:'35px',
        fontSize:'13px',
        fontWeight: 'bold',
        backgroundColor: '#f5b642',
    }
    
    return(
        <>
            <SubmitButton btnId={'addRecord'} style={registrationBtnStyle}>국가 추가</SubmitButton>
            <SubmitButton btnId={'updateRecord'} style={registrationBtnStyle}>업데이트</SubmitButton>
        </>
    );
}

const RegisterRecord = ({medalsStateHook, oderingOption})=>{
    const inputFormStyle = {
        margin: '30px 0 30px 0',
        border:'none',
        borderRadius:'15px',
        backgroundColor:'#fae0a2',
        width:'90%',
    }

    const inputRecordStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        margin: '10px 0 10px 0',
    }

    const recordSubBtnsStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        margin: '30px 0 10px 0',
    }

    const handleRegisterForm = (e)=>{
        const submitter = e.nativeEvent.submitter.id;

        if(submitter==="addRecord"){ 
            addObtainedMedals(e, medalsStateHook, oderingOption);
            return;
        }
        if(submitter==="updateRecord"){ 
            updateObtainedMedals(e, medalsStateHook, oderingOption);
            return;
        }
        
        console.error(`${submitter} button doesn't have a handler!`);
    }
    
    return(
        <form 
            className='input-form' 
            style={inputFormStyle} 
            onSubmit={(e)=>{ e.preventDefault(); handleRegisterForm(e); }}
        >
            <div className='input-record' style={inputRecordStyle}>
                <InputCountry/>
                <InputMedals/>
            </div>
            <div className="record-submit-buttons" style={recordSubBtnsStyle}>
                <SubmitRegistration/>
            </div>
        </form>
    );
}

export default RegisterRecord;
const InputRecordData = ({ inputConfig }) => {
    const inputWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    }

    const inputLableStyle = {
        margin: '5px',
        fontSize: '15px',
    }

    const inputStyle = {
        width: '130px',
        height: '25px',
        border: 'none',
        borderRadius: '5px',
        outline: '2px solid #f5b642'//이거 클릭 되었을때만 강조되어야 하는데
    }

    const { inputType, itemName, labelName } = inputConfig;


    return (
        <div style={inputWrapperStyle}>
            <label htmlFor={itemName} style={inputLableStyle}> {labelName} </label>
            <input
                type={inputType}
                id={itemName}
                name={itemName}
                style={inputStyle}
            />
        </div>
    )
}

const InputCountry = () => {
    const config = {
        inputType: 'text',
        itemName: 'country',
        labelName: '국가',
    }

    return (
        <InputRecordData inputConfig={config} key={`${config.itemName}Input`}/>
    )
}

const InputMedals = () => {
    const medals = [
        {
            'medalType': 'gold',
            'medalName': '금메달',
        },
        {
            'medalType': 'silver',
            'medalName': '은메달',
        },
        {
            'medalType': 'bronze',
            'medalName': '동메달',
        },
    ];

    const InputMedalsList = medals.map((medal) => {
        const config = {
            inputType: 'number',
            itemName: medal.medalType,
            labelName: medal.medalName,
        }

        return <InputRecordData inputConfig={config} key={`${config.itemName}Input`}/>;
    });


    return (
        <>
            {InputMedalsList}
        </>
    )
}

export { InputCountry, InputMedals }
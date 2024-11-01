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
        outline: '2px solid #f5b642',
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

const InputBars = () => {
    const inputBars = [
        {
            'inputType': 'text',
            'itemName': 'country',
            'labelName': '국가',
        },
        {
            'inputType': 'number',
            'itemName': 'gold',
            'labelName': '금메달',
        },
        {
            'inputType': 'number',
            'itemName': 'silver',
            'labelName': '은메달',
        },
        {
            'inputType': 'number',
            'itemName': 'bronze',
            'labelName': '동메달',
        },
    ];

    const InputBarsList = inputBars.map((medal) => {
        const config = {
            inputType: medal.inputType,
            itemName: medal.itemName,
            labelName: medal.labelName,
        }

        return <InputRecordData inputConfig={config} key={`${config.itemName}Input`} />;
    });


    return (
        <>
            {InputBarsList}
        </>
    )
}

export { InputBars }
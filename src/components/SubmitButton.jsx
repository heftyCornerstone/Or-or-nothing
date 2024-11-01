const SubmitButton = ({ children, btnId = null, onClickHandler = null, style = null }) => {
    const defaultBtnStyle = {
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
    const submitBtnStyle = (style) ? { ...defaultBtnStyle, ...style } : defaultBtnStyle;

    return (
        <button
            type="submit"
            id={btnId}
            onClick={onClickHandler}
            style={submitBtnStyle}
        >
            {children}
        </button>
    )
}

export default SubmitButton;
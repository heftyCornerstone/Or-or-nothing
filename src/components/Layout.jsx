const Layout = ({ children }) => {
    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        minWidth: '800px',
        margin: '30px 0 30px 0',
        border: 'none',
        borderRadius: '15px',
        backgroundColor: '#ffffff',
    }
    const titleStyle = {
        marginTop: '20px',
        marginBottom: '50px'
    }
    const titleH1Style = {
        fontSize: '50px',
        textAlign: 'center',
        marginBottom: '10px'
    }
    const annotationStyle = {
        fontSize: '14px',
        color:'#d19e02',
        textAlign: 'center',
    }
    const commentStyle = {
        margin: '20px 0 20px 0',
        fontSize: '18px',
        textAlign: 'center',
    }

    return (
        <main style={mainStyle}>
            <div style={titleStyle}>
                <h1 style={titleH1Style}>Or or Nothing!</h1>
                <div style={annotationStyle}>Or는 프랑스어로 금이라는 뜻이에요</div>
                <div style={commentStyle}>2024 파리 올림픽에서 딴 메달을 기록해보세요</div>
            </div>
            {children}
        </main>
    );
}

export default Layout;
import titleLogo from "../assets/titleLogo.png"
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
        marginTop: '30px',
        marginBottom: '50px'
    }
    const titleDivStyle = {
        fontSize: '50px',
        textAlign: 'center',
        marginBottom: '10px'
    }
    const logoStyle = {
        margin: 'auto',
        width: '65%'
    }
    const commentStyle = {
        margin: '20px 0 20px 0',
        fontSize: '18px',
        textAlign: 'center',
    }

    return (
        <main style={mainStyle}>
            <div style={titleStyle}>
                <div style={titleDivStyle}> <img src={titleLogo} alt="no logo" style={logoStyle}/> </div>
                <div style={commentStyle}>2024 파리 올림픽에서 딴 메달을 기록해보세요!</div>
            </div>
            {children}
        </main>
    );
}

export default Layout;
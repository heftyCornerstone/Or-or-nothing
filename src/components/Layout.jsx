const Layout = ({children})=>{
    const mainStyle = {
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        maxWidth:'1200px', 
        minWidth:'800px', 
        margin: '30px 0 30px 0',
        border:'none',
        borderRadius: '15px',
        backgroundColor: '#ffffff',
    }
    const titleStyle = {
        marginTop:'20px', 
        marginBottom:'50px'
    }
    const titleH1Style= {
        textAlign:'center'
    }
    
    return(
        <main style={mainStyle}>
            <div className="title" style={titleStyle}>
                <h1 style={titleH1Style}>Or or Nothing!</h1>
                <div className="intro">2024 파리 올림픽에서 딴 메달을 기록해보세요</div>
            </div>
            {children}
        </main>
    );
}

export default Layout;
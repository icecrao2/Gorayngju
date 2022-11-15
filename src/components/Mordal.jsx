import { useAlcoholInfo } from "../hooks/useAlcoholInfo";

export const Mordal = ({setMordalState, pushAlcohol}) => {
    
    const {alcoholInfo, setName, setUrl, setContent, clearInfo} = useAlcoholInfo({
        name:'',
        url:'',
        content:''
    });

    const mordalStyle = {
        position: "fixed",
        width:"100%",
        height:"100%",
        top:"0px",
        left:"0px",
        zIndex:"10",
        backgroundColor:"rgba(0,0,0,0.7)",
    }

    const formStyle = {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width:"400px",
        height:"410px",
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
        backgroundColor: "white",
        border:"1px solid black",  
        borderRadius:"10px",
        padding:"10px",
    }

    const labelStyle = {
        fontSize:"25px",
        marginTop:"5px",
        marginBottom:"5px"
    }

    const inputStyle = {
        height: "40px",
        border:"1px solid brown",
        borderRadius:"5px",
        paddingLeft: "10px",
        paddingRight: "10px",   
    }

    const submitStyle = {
        height:"60px",
        backgroundColor:"burlywood",
        borderRadius:"8px",
        marginTop:"40px",
        marginBottom:"20px",
        fontSize:"20px",
        fontWeight:"800",
        cursor:"pointer",
    }

    const exitButtonStyle = {
        marginLeft:"auto",
        cursor:"pointer",
        width:"20px",
        fontSize:"20px",
    }

    const exitBtnHandler = (e) => {
        setMordalState(false);
    }

    const saveBtnHandler = (e) => {
        e.preventDefault();
        pushAlcohol(alcoholInfo);
        clearInfo();
        setMordalState(false);
    }
    const nameInputHandler = (e) => {
        setName(e.currentTarget.value);
    }

    const urlInputHandler = (e) => {
        setUrl(e.currentTarget.value);
    }

    const contentInputHandler = (e) => {
        setContent(e.currentTarget.value);
    }
    return (   
        <div style={mordalStyle}>   

            <form style={formStyle} onSubmit={saveBtnHandler}>
                <input type="button" onClick={exitBtnHandler} value="X" style={exitButtonStyle} />
                <label style={labelStyle} htmlFor="name" >이름</label>
                <input style={inputStyle} required value={alcoholInfo.name} onChange={nameInputHandler} type="text" id="name" placeholder="화이트와인" />
                
                <label style={labelStyle} htmlFor="URL" >이미지</label>
                <input style={inputStyle} required value={alcoholInfo.url} onChange={urlInputHandler} type="text" id="URL" placeholder="URL" />
                
                <label style={labelStyle} htmlFor="content" >내용</label>
                <input style={inputStyle} required value={alcoholInfo.content} onChange={contentInputHandler} type="text" id="content" placeholder="주로 청포도로 해요" />

                <input style={submitStyle} type="submit" value="저장" />
            </form>
        </div>
    )
}
import {useViewColor} from '../hooks/useViewColor';


export const Main = ({alcoholList}) => {

    const { color } = useViewColor();

    const mainStyle = "flex border-4 border-blue-200 h-full w-full box-border m-1.5 p-2 flex-wrap";

    const divStyle = {
        backgroundColor: color,
        width: "250px",
        height:"300px",
        borderRadius:"20px",
        padding:"10px",
        flexShrink: "0",
    }
    const imgStyle = {
        height:"250px",
    }

    return (
        <main className={mainStyle} style={{overflow:'scroll'}}>
            {
                alcoholList.map((item, index) => 
                    <div key={index} style={divStyle}>
                        <img src={item.url} alt={item.name} style={imgStyle}/>
                        <span>{item.content}</span>
                    </div>
                )
            }
        </main>
    )
}
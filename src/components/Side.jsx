
export const Side = ({setMordalState, alcoholList}) => {

    const inputStyle = "w-full bg-neutral-800 text-orange-400 rounded-lg p-2 cursor-pointer text-xl" ;
    const sideStyle = "border-4 border-neutral-800 h-full box-border m-1.5 p-2 w-40 shrink-0";
    const listStyle = "text-left text-2xl pt-1 pb-1";


    const addBtnHandler = (e) => {
        setMordalState(true);
    };

    return (
        <nav className={sideStyle}>
            <ul>
                <li><input type="button" value="추가" onClick={addBtnHandler} className={inputStyle} /></li>
                {alcoholList.map((item, index)=><li key={index} className={listStyle}>{item.name}</li>)}
            </ul>
        </nav>
    )
}

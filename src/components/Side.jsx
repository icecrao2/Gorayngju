
export  const Side = ({setMordalState, alcoholList}) => {

    const handleAddButtonClick = (e) => {
        setMordalState(true);
    };

    return (
        <nav className={"border-4 border-neutral-800 h-full box-border m-1.5 p-2 w-40 shrink-0"}>
            <ul>
                <li><button onClick={handleAddButtonClick} className={"w-full bg-neutral-800 text-orange-400 rounded-lg p-2 cursor-pointer text-xl"} >추가</button></li>
                {alcoholList.map((item, index)=><li key={index} className={"text-left text-2xl pt-1 pb-1"}>{item.name}</li>)}
            </ul>
        </nav>
    )
}

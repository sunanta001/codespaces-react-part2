import { useState,useEffect } from "react";
function Item({ name, isPacked }) {
    return (<li>
        {name} {isPacked && ' ✓'}
    </li>);
}
export default function ItemsList() {
    const [search, setSearch] = useState("");
    useEffect(()=>{
        console.log("this component is loaded");
        return ()=>{
            alert("component unloaded");
        }
    },[]);
    const items =
        [
            { name: "Sunglass", isPacked: false },
            { name: "Sunblock", isPacked: true },
            { name: "Swimmingsuit", isPacked: true },
            { name: "Powerbank", isPacked: true },
            { name: "Towel", isPacked: false }
        ];
    const filterList = items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
    const itemsList = filterList.map(i =>
        <Item name={i.name} key={i.name} isPacked={i.isPacked} />);
    const onTextChange = (event) => {
        setSearch(event.target.value);
    }
    return (
        <>
            <h1>Search</h1>
            <input
                type="text"
                onChange={event => onTextChange(event)}
            />
            <ui>
                {itemsList}
            </ui>
        </>
    );
}
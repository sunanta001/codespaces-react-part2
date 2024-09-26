export default function MouseEvent(){
    return (
        <h1 onClick={e=>console.log("onClick")}
        onMouseEnter={e=>alert("onMouseEnter")}
        onMouseOver={e=>alert("onMouseOver")}
        onMouseDown={e=>alert("onMouseDown")}
        onMouseUp={e=>alert("onMouseUp")}
        onMouseLeave={e=>alert("onMouseLeave")}
        > Click Me
        </h1>
    );
}
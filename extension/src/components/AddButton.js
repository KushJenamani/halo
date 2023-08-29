
function AddButton (props) {
    const unfocussedStyle = {
        height: "14px",
        width: "14px",

        border: "none",
        borderRadius: "3px",
        outline: "#ccc solid 1px",
        outlineOffset: "2px",
        margin: "auto 6px",

        backgroundColor: "#eee",

        display: "inline-block",

        fontFamily: "sans-serif",
        fontWeight: "bold",
        color: "#999",
        textAlign: "center",
        paddingBottom: "3px",
        paddingLeft: "1.5px",
        paddingRight: "1.5px"
    };
    return (
        <div style={
            {...unfocussedStyle, position: "absolute", padding: "0"} 
            
        } onMouseOver={() => {
            
        }}>
            +
        </div>
    );
}

export default AddButton;
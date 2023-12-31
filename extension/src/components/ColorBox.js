
function ColorBox (props) {
    const unfocussedStyle = {
        height: "14px",
        width: "14px",

        border: "none",
        borderRadius: "3px",
        outline: "#ccc solid 1px",
        outlineOffset: "2px",
        margin: "auto 6px",

        backgroundColor: props.color,

        display: "inline-block",

        paddingBottom: "3px",
        paddingLeft: "1.5px",
        paddingRight: "1.5px"
    };
    return (
        <div style={
            {...unfocussedStyle, 
            outline: props.active ? props.color + " solid 2px" : "#ddd solid 1px", 
            opacity: props.active? '1': '0.5',
            color: "rgba(0,0,0,0)"
            }
            }
            onClick={props.changeColor}
            >
+
        </div>
    );
}

export default ColorBox;
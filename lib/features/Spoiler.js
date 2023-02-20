import createToggle from "../factories/createToggle";
function execCommand(squire, props) {
    var attributes = { class: props.spoilerClassName };
    if (squire.hasFormat("SPAN", attributes)) {
        squire.changeFormat(null, { tag: "SPAN", attributes: attributes });
    }
    else {
        squire.changeFormat({ tag: "SPAN", attributes: attributes }, null);
    }
    squire.focus();
}
function isActive(squire, props) {
    var attributes = { class: props.spoilerClassName };
    return squire.hasFormat("SPAN", attributes);
}
var Spoiler = createToggle(execCommand, {
    isActive: isActive,
});
Spoiler.defaultProps = {
    children: "Spoiler",
    spoilerClassName: "coral-rte-spoiler",
};
export default Spoiler;
//# sourceMappingURL=Spoiler.js.map
import createToggle from "../factories/createToggle";
function execCommand(squire) {
    if (squire.hasFormat("BLOCKQUOTE")) {
        squire.decreaseQuoteLevel();
    }
    else {
        squire.increaseQuoteLevel();
    }
}
function isActive(squire) {
    return squire.hasFormat("BLOCKQUOTE");
}
var Blockquote = createToggle(execCommand, { isActive: isActive });
Blockquote.defaultProps = {
    children: "Blockquote",
};
export default Blockquote;
//# sourceMappingURL=Blockquote.js.map
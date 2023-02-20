import createToggle from "../factories/createToggle";
function execCommand(squire) {
    if (squire.hasFormat("UL")) {
        squire.removeList();
    }
    else {
        squire.makeUnorderedList();
    }
}
function isActive(squire) {
    return squire.hasFormat("UL");
}
var UnorderedList = createToggle(execCommand, { isActive: isActive });
UnorderedList.defaultProps = {
    children: "Unordered List",
};
export default UnorderedList;
//# sourceMappingURL=UnorderedList.js.map
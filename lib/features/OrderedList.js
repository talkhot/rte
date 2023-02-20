import createToggle from "../factories/createToggle";
function execCommand(squire) {
    if (squire.hasFormat("OL")) {
        squire.removeList();
    }
    else {
        squire.makeOrderedList();
    }
}
function isActive(squire) {
    return squire.hasFormat("OL");
}
var OrderedList = createToggle(execCommand, { isActive: isActive });
OrderedList.defaultProps = {
    children: "Ordered List",
};
export default OrderedList;
//# sourceMappingURL=OrderedList.js.map
import createToggle from "../factories/createToggle";
function execCommand(squire) {
    if (squire.hasFormat("A")) {
        squire.removeLink();
    }
    else {
        try {
            squire.makeLink("https://wwww.test.com", { target: "_blank" });
        }
        catch (error) {
            console.log(error);
        }
    }
}
function isActive(squire) {
    return squire.hasFormat("A");
}
var Link = createToggle(execCommand, {
    isActive: isActive,
    shortcuts: function (ctrlKey) {
        var _a;
        return (_a = {},
            _a[ctrlKey + "k"] = execCommand,
            _a);
    },
});
Link.defaultProps = {
    children: "Link",
};
export default Link;
//# sourceMappingURL=Link.js.map
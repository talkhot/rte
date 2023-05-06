import Squire from "squire-rte";

import createToggle from "../factories/createToggle";

function execCommand(squire: Squire) {
  if (squire.hasFormat("A")) {
    squire.removeLink();
  } else {
    try {
      squire.makeLink("https://wwww.test.com", { target: "_blank" });
    } catch (error) {
      console.log(error);
    }
  }
}

function isActive(squire: Squire) {
  return squire.hasFormat("A");
}

const Link = createToggle(execCommand, {
  isActive,
  shortcuts: (ctrlKey) => ({
    [ctrlKey + "k"]: execCommand,
  }),
});

Link.defaultProps = {
  children: "Link",
};

export default Link;

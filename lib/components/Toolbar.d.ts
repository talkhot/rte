import React from "react";
export interface ToolbarPropTypes {
    className?: string;
    children?: React.ReactNode[] | React.ReactNode;
}
declare class Toolbar extends React.Component<ToolbarPropTypes> {
    render(): React.ReactNode;
}
export default Toolbar;

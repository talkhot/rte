import React, { ButtonHTMLAttributes } from "react";
export interface ButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    role?: string;
    ariaLabel?: string;
    className?: string;
    children?: React.ReactNode;
    active?: boolean;
    component?: React.ComponentType<any>;
}
declare class Button extends React.Component<ButtonPropTypes> {
    render(): React.ReactNode;
}
export default Button;

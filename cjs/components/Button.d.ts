import React, { ButtonHTMLAttributes } from "react";
export interface ButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    active?: boolean;
    component?: React.ComponentType<any>;
    role?: string;
    ariaLabel?: string;
}
declare class Button extends React.Component<ButtonPropTypes> {
    render(): React.ReactNode;
}
export default Button;

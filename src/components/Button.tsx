import cn from "classnames";
import React, { ButtonHTMLAttributes } from "react";

import * as styles from "./Button.module.css";

export interface ButtonPropTypes
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  component?: React.ComponentType<any>;
  role?: string;
  ariaLabel?: string;
}

class Button extends React.Component<ButtonPropTypes> {
  public render(): React.ReactNode {
    const {
      className,
      children,
      active,
      component,
      ariaLabel,
      ...rest
    } = this.props;
    const Component = component || "button";
    return (
      <Component
        type="button"
        className={cn(className, { [styles?.button]: !component })}
        aria-pressed={active}
        aria-label={ariaLabel}
        {...rest}
      >
        {children}
      </Component>
    );
  }
}

export default Button;

import React, { ComponentType } from "react";
import Squire from "squire-rte";
export interface TogglePropTypes {
    className?: string;
    title?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}
/** InjectedProps are props injected by the RTE */
export interface InjectedProps {
    /** Reference to squire */
    squire: Squire;
    /** ctrlKey dependend on the OS. Used to create shortcuts. */
    ctrlKey: string;
    /** Button component */
    ButtonComponent: React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement>>;
    disabled?: boolean;
    rteElementID?: string;
}
interface CreateToggleOptions<AdditionalProps> {
    isActive?: (squire: Squire, props: AdditionalProps) => boolean;
    isDisabled?: (squire: Squire, props: AdditionalProps) => boolean;
    /**
     * Shortcuts can be used to define keyboard shortcuts e.g:
     *
     * ```ts
     * {
     *   shortcuts: ctrlKey => ({
     *     [ctrlKey + "b"]: execBoldCommand
     *   })
     * }
     * ```
     */
    shortcuts?: (ctrlKey: string) => Record<string, (squire: Squire, event: KeyboardEvent, range: Range, props: AdditionalProps) => void>;
}
/**
 *  createToggle creates a button that can be active, inactive or disabled
 *  and reacts on clicks. All callbacks are bound to the API instance.
 */
declare function createToggle<AdditionalProps>(execCommand: (squire: Squire, props: AdditionalProps) => void, { isActive, isDisabled, shortcuts, }?: CreateToggleOptions<AdditionalProps>): ComponentType<TogglePropTypes & AdditionalProps>;
export default createToggle;

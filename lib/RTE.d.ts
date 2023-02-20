import PropTypes from "prop-types";
import React, { EventHandler, FocusEvent, ReactElement, KeyboardEventHandler } from "react";
import Squire from "squire-rte";
import { InjectedProps } from "./factories/createToggle";
export interface Feature {
    onPathChange?: () => void;
    onContentEditableFocus?: () => void;
    onContentEditableBlur?: () => void;
}
interface PasteEvent {
    fragment: DocumentFragment;
    preventDefault: () => void;
    defaultPrevented: boolean;
}
interface PropTypes {
    /** features is an array of RTE features to be included */
    features?: ReactElement<any>[];
    /** rteElementID is the id attached to the root RTE element */
    rteElementID?: string;
    /** inputID is the id attached to the contenteditable field */
    inputID?: string;
    /** onChange is called whenenver the `html` value has changed */
    onChange?: (html: string) => void;
    /** disabled lets you turn on/off the RTE */
    disabled?: boolean;
    /** className added to the root */
    className?: string;
    /** className added to the root when disabled */
    classNameDisabled?: string;
    /** className added to the html content */
    contentClassName?: string;
    /** className added to the html content when disabled */
    contentClassNameDisabled?: string;
    /** className added to the html content container */
    contentContainerClassName?: string;
    /** className added to the html content container when disabled */
    contentContainerClassNameDisabled?: string;
    /** className added to the toolbar */
    toolbarClassName?: string;
    /** className added to the toolbar when disabled */
    toolbarClassNameDisabled?: string;
    /** className added to the placeholder */
    placeholderClassName?: string;
    /** className added to the placeholder when disabled */
    placeholderClassNameDisabled?: string;
    /** placeholder to show when RTE is empty */
    placeholder?: string;
    /** current html value */
    value?: string;
    /** toolbarPosition lets you switch the toolbar to top/bottom */
    toolbarPosition?: "top" | "bottom";
    /** onFocus is called whenenver the RTE receives focus */
    onFocus?: EventHandler<FocusEvent>;
    /** onFocus is called whenenver the RTE looses focus */
    onBlur?: EventHandler<FocusEvent>;
    /** onKeyDown is called whenever a key is pressed down on the RTE */
    onKeyDown?: KeyboardEventHandler<Element>;
    /** onKeyPress is called whenever a key is pressed on the RTE */
    onKeyPress?: KeyboardEventHandler<Element>;
    /** onWillPaste is called whenenver the RTE receives paste event */
    onWillPaste?: (event: PasteEvent) => void;
    /** Only allow pasting text */
    pasteTextOnly?: boolean;
    /** Regular expression used to automatically mark up links or null to disable */
    linkRegExp?: RegExp | null;
    /** Enforces link content to match href target */
    linkContentMatchHref?: boolean;
    /**
     * Sanitize when `value` is applied. Defaults to `true`.
     * Important: No sanitization will take place unless `sanitizeToDOMFragment` is set.
     */
    sanitizeValue?: boolean;
    /**
     * Function to call when sanitizing HTML, this will also allow pasting HTML
     * if not disabled by `pasteTextOnly`.
     *
     * Can be used with DOMPurify:
     * ```
     * const sanitizeToDOMFragment = (html: string) => {
     *   if (!html) {
     *     return document.createDocumentFragment()
     *   }
     *   return DOMPurify.sanitize(html, { RETURN_DOM_FRAGMENT: true });
     * };
     */
    sanitizeToDOMFragment?: (html: string, isPaste: boolean, self: Squire) => DocumentFragment;
    /**
     * ButtonComponent is injected to RTE Feature Components
     * in order to replace the used <button />.
     */
    ButtonComponent?: InjectedProps["ButtonComponent"];
}
interface State {
    initialized: boolean;
}
declare class RTE extends React.Component<PropTypes, State> {
    static defaultProps: {
        features: never[];
        classNameDisabled: string;
        contentClassName: string;
        contentClassNameDisabled: string;
        contentContainerClassName: string;
        contentContainerClassNameDisabled: string;
        toolbarClassName: string;
        toolbarClassNameDisabled: string;
        placeholderClassName: string;
        placeholderClassNameDisabled: string;
        toolbarPosition: string;
        sanitizeValue: boolean;
        linkContentMatchHref: boolean;
    };
    private contentEditableRef;
    private rootRef;
    private featuresRef;
    focus: () => Squire;
    /** Is focus somewhere inside the root container */
    private focusInsideRoot;
    private squire;
    private ctrlKey;
    private createFeatureRefHandler;
    private initSquire;
    /** Ref to react-contenteditable. */
    private handleContentEditableRef;
    /** Ref to root container. */
    private handleRootRef;
    /** iterate through each feature */
    private forEachFeature;
    componentDidUpdate(): void;
    private handleChange;
    private handlePathChange;
    private handleRootFocus;
    private handleRootBlur;
    private handleContentEditableFocus;
    private handleContentEditableBlur;
    private handlePasteText;
    private handlePasteTextOnly;
    private handleKeyPress;
    private handleKeyDown;
    private renderFeatures;
    private getClassNames;
    render(): JSX.Element;
}
export default RTE;

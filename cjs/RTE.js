"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var squire_rte_1 = __importDefault(require("squire-rte"));
var Toolbar_1 = __importDefault(require("./components/Toolbar"));
var browserInfo_1 = require("./lib/browserInfo");
var getHTMLElement_1 = __importDefault(require("./lib/getHTMLElement"));
var syncLinkHrefWithContent_1 = __importDefault(require("./lib/syncLinkHrefWithContent"));
var styles = __importStar(require("./RTE.module.css"));
var RTE = /** @class */ (function (_super) {
    __extends(RTE, _super);
    function RTE() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /// Ref to squire node.
        _this.contentEditableRef = null;
        /// Ref to root container.
        _this.rootRef = null;
        // Refs to the features.
        _this.featuresRef = {};
        // Export this for parent components.
        _this.focus = function () { return _this.squire.focus(); };
        /** Is focus somewhere inside the root container */
        _this.focusInsideRoot = false;
        _this.ctrlKey = browserInfo_1.getBrowserInfo().macOS ? "meta-" : "ctrl-";
        _this.initSquire = function () {
            _this.squire = new squire_rte_1.default(_this.contentEditableRef, {
                isInsertedHTMLSanitized: Boolean(_this.props.sanitizeToDOMFragment),
                isSetHTMLSanitized: Boolean(_this.props.sanitizeToDOMFragment) && _this.props.sanitizeValue,
                sanitizeToDOMFragment: _this.props.sanitizeToDOMFragment,
                addLinks: _this.props.linkRegExp !== null,
            });
            _this.squire.addEventListener("pathChange", _this.handlePathChange);
            _this.squire.addEventListener("input", _this.handleChange);
            _this.squire.addEventListener("willPaste", _this.handlePasteText);
            _this.squire.addEventListener("focus", _this.handleContentEditableFocus);
            _this.squire.addEventListener("blur", _this.handleContentEditableBlur);
            _this.squire.addEventListener("keypress", _this.handleKeyPress);
            _this.squire.addEventListener("keydown", _this.handleKeyDown);
            // Reset shortcuts. We add shortcuts through the added features.
            [
                _this.ctrlKey + "b",
                _this.ctrlKey + "i",
                _this.ctrlKey + "u",
                _this.ctrlKey + "shift-7",
                _this.ctrlKey + "shift-5",
                _this.ctrlKey + "shift-6",
                _this.ctrlKey + "shift-8",
                _this.ctrlKey + "shift-9",
                _this.ctrlKey + "shift-[",
                _this.ctrlKey + "shift-]",
                _this.ctrlKey + "shift-d",
            ].forEach(function (key) { return _this.squire.setKeyHandler(key, null); });
            // Set current value.
            if (_this.props.value) {
                _this.squire.modifyDocument(function () {
                    _this.squire.setHTML(_this.props.value);
                    _this.contentEditableRef.setAttribute("contenteditable", JSON.stringify(!_this.props.disabled));
                });
            }
        };
        /** Ref to react-contenteditable. */
        _this.handleContentEditableRef = function (ref) {
            _this.contentEditableRef = ref;
            if (ref) {
                _this.initSquire();
                _this.setState({ initialized: true });
            }
        };
        /** Ref to root container. */
        _this.handleRootRef = function (ref) { return (_this.rootRef = ref); };
        _this.handleChange = function () {
            if (_this.props.linkContentMatchHref) {
                // Forces link contents to match their href target.
                _this.squire.modifyDocument(function () {
                    syncLinkHrefWithContent_1.default(getHTMLElement_1.default(_this.squire.getSelection().commonAncestorContainer));
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange(_this.squire.getHTML());
            }
        };
        _this.handlePathChange = function () {
            // Let features know path has changed, so they
            // can update.
            _this.forEachFeature(function (b) {
                if (b.onPathChange) {
                    b.onPathChange();
                }
            });
        };
        _this.handleRootFocus = function (e) {
            if (_this.focusInsideRoot) {
                // Focus already inside, suppress event.
                return;
            }
            _this.focusInsideRoot = true;
            // Call event handler if available.
            if (_this.props.onFocus) {
                _this.props.onFocus(e);
            }
        };
        _this.handleRootBlur = function (e) {
            var _a;
            if (!_this.rootRef || !_this.focusInsideRoot) {
                return;
            }
            if (_this.rootRef.contains(e.nativeEvent.relatedTarget)) {
                // Focus didn't leave the RTE, suppress event.
                return;
            }
            // Clear selection range seems to fix a weird bug:
            // Disabling, clearing and reenabling the RTE leaves
            // selection in a weird state where making lists fail to work.
            // Only reproduced in Chrome 81.0.4044.129.
            (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
            _this.focusInsideRoot = false;
            // Call event handler if available.
            if (_this.props.onBlur) {
                _this.props.onBlur(e);
            }
        };
        _this.handleContentEditableFocus = function (e) {
            _this.forEachFeature(function (b) {
                if (b.onContentEditableFocus) {
                    b.onContentEditableFocus();
                }
            });
        };
        _this.handleContentEditableBlur = function (e) {
            _this.forEachFeature(function (b) {
                if (b.onContentEditableBlur) {
                    b.onContentEditableBlur();
                }
            });
        };
        _this.handlePasteText = function (event) {
            if (_this.props.pasteTextOnly || !_this.props.sanitizeToDOMFragment) {
                _this.handlePasteTextOnly(event);
            }
            if (_this.props.onWillPaste) {
                _this.props.onWillPaste(event);
            }
        };
        // We intercept pasting, so that we
        // force text/plain content if `pasteTextOnly` is set.
        _this.handlePasteTextOnly = function (event) {
            // Remove html.
            // eslint-disable-next-line no-self-assign
            event.fragment.textContent = event.fragment.textContent;
        };
        _this.handleKeyPress = function (event) {
            if (!_this.props.onKeyPress) {
                return;
            }
            _this.props.onKeyPress(event);
        };
        _this.handleKeyDown = function (event) {
            if (!_this.props.onKeyDown) {
                return;
            }
            _this.props.onKeyDown(event);
        };
        return _this;
    }
    // Returns a handler that fills our `featuresRef`.
    RTE.prototype.createFeatureRefHandler = function (key) {
        var _this = this;
        return function (ref) {
            if (ref) {
                _this.featuresRef[key] = ref;
            }
            else {
                delete _this.featuresRef[key];
            }
        };
    };
    /** iterate through each feature */
    RTE.prototype.forEachFeature = function (callback) {
        var _this = this;
        Object.keys(this.featuresRef).map(function (k) {
            callback(_this.featuresRef[k]);
        });
    };
    RTE.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.contentEditableRef) {
            // Enable/disable through the use of `contenteditable` attr.
            var contenteditable_1 = JSON.stringify(!this.props.disabled);
            if (this.contentEditableRef.getAttribute("contenteditable") !==
                contenteditable_1) {
                this.squire.modifyDocument(function () {
                    _this.contentEditableRef.setAttribute("contenteditable", contenteditable_1);
                });
            }
            // Change html if `value` changed.
            if (this.props.value !== this.squire.getHTML()) {
                this.squire.modifyDocument(function () {
                    _this.squire.setHTML(_this.props.value || "");
                });
            }
        }
    };
    RTE.prototype.renderFeatures = function () {
        var _this = this;
        if (!this.squire) {
            return null;
        }
        return (this.props.features &&
            this.props.features.map(function (b, i) {
                return react_1.default.cloneElement(b, {
                    disabled: _this.props.disabled,
                    squire: _this.squire,
                    ctrlKey: _this.ctrlKey,
                    key: b.key || i,
                    ButtonComponent: _this.props.ButtonComponent,
                    rteElementID: _this.props.rteElementID,
                    ref: _this.createFeatureRefHandler(b.key || i),
                });
            }));
    };
    RTE.prototype.getClassNames = function () {
        var _a, _b, _c, _d, _e;
        var _f = this.props, disabled = _f.disabled, toolbarPosition = _f.toolbarPosition;
        return {
            toolbar: classnames_1.default(this.props.toolbarClassName, (_a = {},
                _a[this.props.toolbarClassNameDisabled] = disabled,
                _a[styles === null || styles === void 0 ? void 0 : styles.toolbarDisabled] = disabled,
                _a[styles === null || styles === void 0 ? void 0 : styles.toolbarTop] = toolbarPosition === "top",
                _a[styles === null || styles === void 0 ? void 0 : styles.toolbarBottom] = toolbarPosition === "bottom",
                _a)),
            contentContainer: classnames_1.default(styles === null || styles === void 0 ? void 0 : styles.contentEditableContainer, this.props.contentContainerClassName, (_b = {},
                _b[this.props.contentContainerClassNameDisabled] = disabled,
                _b[styles === null || styles === void 0 ? void 0 : styles.contentEditableContainerDisabled] = disabled,
                _b)),
            content: classnames_1.default(styles === null || styles === void 0 ? void 0 : styles.contentEditable, this.props.contentClassName, (_c = {},
                _c[this.props.contentClassNameDisabled] = disabled,
                _c[styles === null || styles === void 0 ? void 0 : styles.contentEditableDisabled] = disabled,
                _c)),
            root: classnames_1.default(styles === null || styles === void 0 ? void 0 : styles.root, this.props.className, (_d = {},
                _d[this.props.classNameDisabled] = disabled,
                _d)),
            placeholder: classnames_1.default(styles === null || styles === void 0 ? void 0 : styles.placeholder, this.props.placeholderClassName, (_e = {},
                _e[this.props.placeholderClassNameDisabled] = disabled,
                _e)),
        };
    };
    RTE.prototype.render = function () {
        var _a = this.props, value = _a.value, placeholder = _a.placeholder, inputID = _a.inputID, toolbarPosition = _a.toolbarPosition;
        var classNames = this.getClassNames();
        var contentEditableProps = {
            id: inputID,
            className: classNames.content,
        };
        if (placeholder) {
            contentEditableProps["aria-placeholder"] = placeholder;
        }
        return (react_1.default.createElement("div", { className: classNames.root, onFocus: this.handleRootFocus, onBlur: this.handleRootBlur, ref: this.handleRootRef },
            toolbarPosition === "top" && (react_1.default.createElement(Toolbar_1.default, { className: classNames.toolbar }, this.renderFeatures())),
            react_1.default.createElement("div", { className: classNames.contentContainer },
                react_1.default.createElement("div", __assign({}, contentEditableProps, { ref: this.handleContentEditableRef })),
                (!value || value === "<div><br></div>") && placeholder && (react_1.default.createElement("div", { "aria-hidden": "true", className: classNames.placeholder }, placeholder))),
            toolbarPosition === "bottom" && (react_1.default.createElement(Toolbar_1.default, { className: classNames.toolbar }, this.renderFeatures()))));
    };
    RTE.defaultProps = {
        features: [],
        classNameDisabled: "",
        contentClassName: "",
        contentClassNameDisabled: "",
        contentContainerClassName: "",
        contentContainerClassNameDisabled: "",
        toolbarClassName: "",
        toolbarClassNameDisabled: "",
        placeholderClassName: "",
        placeholderClassNameDisabled: "",
        toolbarPosition: "top",
        sanitizeValue: true,
        linkContentMatchHref: true,
    };
    return RTE;
}(react_1.default.Component));
exports.default = RTE;
//# sourceMappingURL=RTE.js.map
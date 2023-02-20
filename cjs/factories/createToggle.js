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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("../components/Button"));
/**
 *  createToggle creates a button that can be active, inactive or disabled
 *  and reacts on clicks. All callbacks are bound to the API instance.
 */
function createToggle(execCommand, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isActive, isActive = _c === void 0 ? function () { return false; } : _c, _d = _b.isDisabled, isDisabled = _d === void 0 ? function () { return false; } : _d, shortcuts = _b.shortcuts;
    var Toggle = /** @class */ (function (_super) {
        __extends(Toggle, _super);
        function Toggle(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                active: false,
                disabled: false,
            };
            _this.unmounted = false;
            /** If true, a state sync has been requested and is in progress */
            _this.syncInProgress = false;
            _this.execCommand = function () { return execCommand(_this.props.squire, _this.props); };
            _this.isActive = function () {
                var _a;
                var activeElement = document.activeElement;
                if ((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) {
                    activeElement = document.activeElement.shadowRoot.activeElement;
                }
                if (_this.props.rteElementID) {
                    return ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.getAttribute("id")) === _this.props.rteElementID &&
                        isActive(_this.props.squire, _this.props));
                }
                return (activeElement === _this.props.squire.getRoot() &&
                    isActive(_this.props.squire, _this.props));
            };
            _this.isDisabled = function () { return isDisabled(_this.props.squire, _this.props); };
            _this.handleClick = function () {
                _this.execCommand();
                _this.syncState();
            };
            /** Call `isActive` and `isDisabled` to determine current state. */
            _this.syncState = function () {
                // This is to prevent multiple syncs in one tick.
                if (_this.syncInProgress) {
                    return;
                }
                _this.syncInProgress = true;
                // Perform syncing on next tick.
                setTimeout(function () {
                    _this.syncInProgress = false;
                    if (_this.unmounted) {
                        return;
                    }
                    if (_this.state.active !== _this.isActive()) {
                        _this.setState(function (state) { return ({
                            active: !state.active,
                        }); });
                    }
                    if (_this.state.disabled !== _this.isDisabled()) {
                        _this.setState(function (state) { return ({
                            disabled: !state.disabled,
                        }); });
                    }
                });
            };
            // Register shortcuts to squire-rte.
            if (shortcuts) {
                var resolved_1 = shortcuts(_this.props.ctrlKey);
                Object.keys(resolved_1).forEach(function (key) {
                    _this.props.squire.setKeyHandler(key, function (squire, event, range) {
                        event.preventDefault();
                        resolved_1[key](squire, event, range, _this.props);
                    });
                });
            }
            return _this;
        }
        Toggle.prototype.onContentEditableFocus = function () {
            this.syncState();
        };
        Toggle.prototype.onContentEditableBlur = function () {
            this.syncState();
        };
        Toggle.prototype.onPathChange = function () {
            this.syncState();
        };
        Toggle.prototype.componentWillUnmount = function () {
            this.unmounted = true;
        };
        Toggle.prototype.render = function () {
            var _a = this.props, className = _a.className, title = _a.title, children = _a.children, disabled = _a.disabled, ButtonComponent = _a.ButtonComponent;
            return (react_1.default.createElement(Button_1.default, { className: className, title: title, onClick: this.handleClick, active: this.state.active, disabled: disabled || this.state.disabled, component: ButtonComponent }, children));
        };
        return Toggle;
    }(react_1.default.Component));
    return Toggle;
}
exports.default = createToggle;
//# sourceMappingURL=createToggle.js.map
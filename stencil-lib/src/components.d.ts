/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertAppearance, AlertType } from "./components/alert/alert.type";
import { ButtonAppearance, ButtonSize, ButtonStyle } from "./components/button/button.type";
import { NavMenuItem } from "./components/nav-menu/nav-menu.interface";
import { RecursiveMenuItem } from "./components/recursive-menu/recursive-menu.interface";
import { SpinnerAppearance, SpinnerSize } from "./components/spinner/spinner.type";
export namespace Components {
    interface CpyAlert {
        "appearance": AlertAppearance;
        "container": boolean;
        "icon": string;
        "type": AlertType;
    }
    interface CpyAvatar {
        "border": boolean;
        "size": 'small' | 'default' | 'large';
        "src": string;
        "type": 'rounded' | 'square';
    }
    interface CpyButton {
        "appearance": ButtonStyle;
        "disabled": boolean;
        "icon": boolean;
        "size": ButtonSize;
        "type": ButtonAppearance;
    }
    interface CpyDrawer {
        "opened": boolean;
    }
    interface CpyDrawerContainer {
        "opened": boolean;
    }
    interface CpyIcon {
    }
    interface CpyNavMenu {
        "items": NavMenuItem[];
    }
    interface CpyNavMenuItem {
        "item": NavMenuItem;
    }
    interface CpyPageContent {
    }
    interface CpyPopup {
        "activeOn": 'hover' | 'click';
        "position": 'bottom-start' | 'top-start' | 'left-start' | 'right-start';
    }
    interface CpyRecursiveMenu {
        "items": RecursiveMenuItem[];
    }
    interface CpyRecursiveMenuItem {
        "item": RecursiveMenuItem;
    }
    interface CpySpinner {
        "size": SpinnerSize;
        "type": SpinnerAppearance;
    }
    interface CpyTable {
        "data": { [key: string]: string | number | boolean | null | undefined }[];
    }
    interface CpyToolbar {
    }
    interface CpyTooltip {
        "position": 'bottom' | 'left' | 'right' | 'top';
        "text": string;
    }
}
export interface CpyDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDrawerElement;
}
export interface CpyDrawerContainerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDrawerContainerElement;
}
declare global {
    interface HTMLCpyAlertElement extends Components.CpyAlert, HTMLStencilElement {
    }
    var HTMLCpyAlertElement: {
        prototype: HTMLCpyAlertElement;
        new (): HTMLCpyAlertElement;
    };
    interface HTMLCpyAvatarElement extends Components.CpyAvatar, HTMLStencilElement {
    }
    var HTMLCpyAvatarElement: {
        prototype: HTMLCpyAvatarElement;
        new (): HTMLCpyAvatarElement;
    };
    interface HTMLCpyButtonElement extends Components.CpyButton, HTMLStencilElement {
    }
    var HTMLCpyButtonElement: {
        prototype: HTMLCpyButtonElement;
        new (): HTMLCpyButtonElement;
    };
    interface HTMLCpyDrawerElement extends Components.CpyDrawer, HTMLStencilElement {
    }
    var HTMLCpyDrawerElement: {
        prototype: HTMLCpyDrawerElement;
        new (): HTMLCpyDrawerElement;
    };
    interface HTMLCpyDrawerContainerElement extends Components.CpyDrawerContainer, HTMLStencilElement {
    }
    var HTMLCpyDrawerContainerElement: {
        prototype: HTMLCpyDrawerContainerElement;
        new (): HTMLCpyDrawerContainerElement;
    };
    interface HTMLCpyIconElement extends Components.CpyIcon, HTMLStencilElement {
    }
    var HTMLCpyIconElement: {
        prototype: HTMLCpyIconElement;
        new (): HTMLCpyIconElement;
    };
    interface HTMLCpyNavMenuElement extends Components.CpyNavMenu, HTMLStencilElement {
    }
    var HTMLCpyNavMenuElement: {
        prototype: HTMLCpyNavMenuElement;
        new (): HTMLCpyNavMenuElement;
    };
    interface HTMLCpyNavMenuItemElement extends Components.CpyNavMenuItem, HTMLStencilElement {
    }
    var HTMLCpyNavMenuItemElement: {
        prototype: HTMLCpyNavMenuItemElement;
        new (): HTMLCpyNavMenuItemElement;
    };
    interface HTMLCpyPageContentElement extends Components.CpyPageContent, HTMLStencilElement {
    }
    var HTMLCpyPageContentElement: {
        prototype: HTMLCpyPageContentElement;
        new (): HTMLCpyPageContentElement;
    };
    interface HTMLCpyPopupElement extends Components.CpyPopup, HTMLStencilElement {
    }
    var HTMLCpyPopupElement: {
        prototype: HTMLCpyPopupElement;
        new (): HTMLCpyPopupElement;
    };
    interface HTMLCpyRecursiveMenuElement extends Components.CpyRecursiveMenu, HTMLStencilElement {
    }
    var HTMLCpyRecursiveMenuElement: {
        prototype: HTMLCpyRecursiveMenuElement;
        new (): HTMLCpyRecursiveMenuElement;
    };
    interface HTMLCpyRecursiveMenuItemElement extends Components.CpyRecursiveMenuItem, HTMLStencilElement {
    }
    var HTMLCpyRecursiveMenuItemElement: {
        prototype: HTMLCpyRecursiveMenuItemElement;
        new (): HTMLCpyRecursiveMenuItemElement;
    };
    interface HTMLCpySpinnerElement extends Components.CpySpinner, HTMLStencilElement {
    }
    var HTMLCpySpinnerElement: {
        prototype: HTMLCpySpinnerElement;
        new (): HTMLCpySpinnerElement;
    };
    interface HTMLCpyTableElement extends Components.CpyTable, HTMLStencilElement {
    }
    var HTMLCpyTableElement: {
        prototype: HTMLCpyTableElement;
        new (): HTMLCpyTableElement;
    };
    interface HTMLCpyToolbarElement extends Components.CpyToolbar, HTMLStencilElement {
    }
    var HTMLCpyToolbarElement: {
        prototype: HTMLCpyToolbarElement;
        new (): HTMLCpyToolbarElement;
    };
    interface HTMLCpyTooltipElement extends Components.CpyTooltip, HTMLStencilElement {
    }
    var HTMLCpyTooltipElement: {
        prototype: HTMLCpyTooltipElement;
        new (): HTMLCpyTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "cpy-alert": HTMLCpyAlertElement;
        "cpy-avatar": HTMLCpyAvatarElement;
        "cpy-button": HTMLCpyButtonElement;
        "cpy-drawer": HTMLCpyDrawerElement;
        "cpy-drawer-container": HTMLCpyDrawerContainerElement;
        "cpy-icon": HTMLCpyIconElement;
        "cpy-nav-menu": HTMLCpyNavMenuElement;
        "cpy-nav-menu-item": HTMLCpyNavMenuItemElement;
        "cpy-page-content": HTMLCpyPageContentElement;
        "cpy-popup": HTMLCpyPopupElement;
        "cpy-recursive-menu": HTMLCpyRecursiveMenuElement;
        "cpy-recursive-menu-item": HTMLCpyRecursiveMenuItemElement;
        "cpy-spinner": HTMLCpySpinnerElement;
        "cpy-table": HTMLCpyTableElement;
        "cpy-toolbar": HTMLCpyToolbarElement;
        "cpy-tooltip": HTMLCpyTooltipElement;
    }
}
declare namespace LocalJSX {
    interface CpyAlert {
        "appearance"?: AlertAppearance;
        "container"?: boolean;
        "icon"?: string;
        "type"?: AlertType;
    }
    interface CpyAvatar {
        "border"?: boolean;
        "size"?: 'small' | 'default' | 'large';
        "src"?: string;
        "type"?: 'rounded' | 'square';
    }
    interface CpyButton {
        "appearance"?: ButtonStyle;
        "disabled"?: boolean;
        "icon"?: boolean;
        "size"?: ButtonSize;
        "type"?: ButtonAppearance;
    }
    interface CpyDrawer {
        "onToggleOpened"?: (event: CpyDrawerCustomEvent<void>) => void;
        "opened"?: boolean;
    }
    interface CpyDrawerContainer {
        "onToggleDrawer"?: (event: CpyDrawerContainerCustomEvent<void>) => void;
        "opened"?: boolean;
    }
    interface CpyIcon {
    }
    interface CpyNavMenu {
        "items"?: NavMenuItem[];
    }
    interface CpyNavMenuItem {
        "item"?: NavMenuItem;
    }
    interface CpyPageContent {
    }
    interface CpyPopup {
        "activeOn"?: 'hover' | 'click';
        "position"?: 'bottom-start' | 'top-start' | 'left-start' | 'right-start';
    }
    interface CpyRecursiveMenu {
        "items"?: RecursiveMenuItem[];
    }
    interface CpyRecursiveMenuItem {
        "item"?: RecursiveMenuItem;
    }
    interface CpySpinner {
        "size"?: SpinnerSize;
        "type"?: SpinnerAppearance;
    }
    interface CpyTable {
        "data"?: { [key: string]: string | number | boolean | null | undefined }[];
    }
    interface CpyToolbar {
    }
    interface CpyTooltip {
        "position"?: 'bottom' | 'left' | 'right' | 'top';
        "text"?: string;
    }
    interface IntrinsicElements {
        "cpy-alert": CpyAlert;
        "cpy-avatar": CpyAvatar;
        "cpy-button": CpyButton;
        "cpy-drawer": CpyDrawer;
        "cpy-drawer-container": CpyDrawerContainer;
        "cpy-icon": CpyIcon;
        "cpy-nav-menu": CpyNavMenu;
        "cpy-nav-menu-item": CpyNavMenuItem;
        "cpy-page-content": CpyPageContent;
        "cpy-popup": CpyPopup;
        "cpy-recursive-menu": CpyRecursiveMenu;
        "cpy-recursive-menu-item": CpyRecursiveMenuItem;
        "cpy-spinner": CpySpinner;
        "cpy-table": CpyTable;
        "cpy-toolbar": CpyToolbar;
        "cpy-tooltip": CpyTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cpy-alert": LocalJSX.CpyAlert & JSXBase.HTMLAttributes<HTMLCpyAlertElement>;
            "cpy-avatar": LocalJSX.CpyAvatar & JSXBase.HTMLAttributes<HTMLCpyAvatarElement>;
            "cpy-button": LocalJSX.CpyButton & JSXBase.HTMLAttributes<HTMLCpyButtonElement>;
            "cpy-drawer": LocalJSX.CpyDrawer & JSXBase.HTMLAttributes<HTMLCpyDrawerElement>;
            "cpy-drawer-container": LocalJSX.CpyDrawerContainer & JSXBase.HTMLAttributes<HTMLCpyDrawerContainerElement>;
            "cpy-icon": LocalJSX.CpyIcon & JSXBase.HTMLAttributes<HTMLCpyIconElement>;
            "cpy-nav-menu": LocalJSX.CpyNavMenu & JSXBase.HTMLAttributes<HTMLCpyNavMenuElement>;
            "cpy-nav-menu-item": LocalJSX.CpyNavMenuItem & JSXBase.HTMLAttributes<HTMLCpyNavMenuItemElement>;
            "cpy-page-content": LocalJSX.CpyPageContent & JSXBase.HTMLAttributes<HTMLCpyPageContentElement>;
            "cpy-popup": LocalJSX.CpyPopup & JSXBase.HTMLAttributes<HTMLCpyPopupElement>;
            "cpy-recursive-menu": LocalJSX.CpyRecursiveMenu & JSXBase.HTMLAttributes<HTMLCpyRecursiveMenuElement>;
            "cpy-recursive-menu-item": LocalJSX.CpyRecursiveMenuItem & JSXBase.HTMLAttributes<HTMLCpyRecursiveMenuItemElement>;
            "cpy-spinner": LocalJSX.CpySpinner & JSXBase.HTMLAttributes<HTMLCpySpinnerElement>;
            "cpy-table": LocalJSX.CpyTable & JSXBase.HTMLAttributes<HTMLCpyTableElement>;
            "cpy-toolbar": LocalJSX.CpyToolbar & JSXBase.HTMLAttributes<HTMLCpyToolbarElement>;
            "cpy-tooltip": LocalJSX.CpyTooltip & JSXBase.HTMLAttributes<HTMLCpyTooltipElement>;
        }
    }
}

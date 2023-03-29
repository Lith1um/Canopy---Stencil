/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertAppearance, AlertType } from "./components/alert/alert.type";
import { AvatarSize } from "./components/avatar/types/avatar-size.type";
import { BadgeAppearance, BadgeSize, BadgeType } from "./components/badge/badge.type";
import { ButtonAppearance, ButtonSize, ButtonStyle } from "./components/button/button.type";
import { CodeLanguage } from "./components/code-block/types/code-language.type";
import { CommentItem } from "./components/comment/interfaces/comment.interface";
import { CommentSize } from "./components/comment/types/comment-size.type";
import { ContentsListItem } from "./components/contents-list/contents-list.interface";
import { ContextMenuItem } from "./components/context-menu/context-menu.interface";
import { InputSize } from "./components/inputs/types/input-size.type";
import { ValidatorEntry } from "./components/inputs/validation/types/validator-entry.type";
import { Validator } from "./components/inputs/validation/types/validator.type";
import { NavMenuItem } from "./components/nav-menu/nav-menu.interface";
import { ProgressBarAppearance, ProgressBarSize } from "./components/progress-bar/progress-bar.type";
import { SpinnerAppearance, SpinnerSize } from "./components/spinner/spinner.type";
import { TableData } from "./components/table/types/table-data.type";
import { ToastPosition } from "./components/toast/toast.type";
export namespace Components {
    interface CpyAccordion {
        "close": () => Promise<void>;
        "headerTitle": string;
        "open": () => Promise<void>;
        "opened": boolean;
        "size": 'small' | 'default' | 'large';
        "toggle": () => Promise<void>;
    }
    interface CpyAlert {
        "appearance": AlertAppearance;
        "container": boolean;
        "dismissible": boolean;
        "icon": string;
        "type": AlertType;
    }
    interface CpyAvatar {
        "border": boolean;
        "initials": string;
        "size": AvatarSize;
        "src": string;
        "type": 'rounded' | 'square';
    }
    interface CpyBadge {
        "appearance": BadgeAppearance;
        "size": BadgeSize;
        "type": BadgeType;
    }
    interface CpyButton {
        "appearance": ButtonStyle;
        "disabled": boolean;
        "icon": boolean;
        "size": ButtonSize;
        "type": ButtonAppearance;
    }
    interface CpyCard {
    }
    interface CpyCarousel {
        "carouselTitle": string;
    }
    interface CpyCodeBlock {
        "code": string;
        "language": CodeLanguage;
    }
    interface CpyCodeExample {
        "code": string;
        "header": any;
        "language": CodeLanguage;
    }
    interface CpyCodeSnippet {
    }
    interface CpyComment {
        "comment": CommentItem;
        "maxLines": number;
        "rightAligned": boolean;
        "showLessText": string;
        "showMoreText": string;
        "size": CommentSize;
        "type": 'primary' | 'secondary' | 'basic';
    }
    interface CpyContentsList {
        "activeIndex": number;
        "headerTitle": string;
        "items": ContentsListItem[];
    }
    interface CpyContentsListItem {
        "active": boolean;
        "item": ContentsListItem;
    }
    interface CpyContextMenu {
        "items": ContextMenuItem[];
        "recalculatePosition": () => Promise<void>;
    }
    interface CpyContextMenuItem {
        "item": ContextMenuItem;
        "recalculatePosition": () => Promise<void>;
    }
    interface CpyContextMenuTrigger {
        "items": ContextMenuItem[];
    }
    interface CpyDialog {
        "close": () => Promise<void>;
        "dialogTitle": string;
        "open": () => Promise<void>;
        "size": 'small' | 'default' | 'large' | 'full-screen';
        "zIndex": string;
    }
    interface CpyDrawer {
        "opened": boolean;
    }
    interface CpyDrawerContainer {
        "opened": boolean;
        "toggle": () => Promise<void>;
    }
    interface CpyExpandCollapse {
        "collapse": () => Promise<void>;
        "duration": number;
        "expand": () => Promise<void>;
        "expanded": boolean;
        "toggle": () => Promise<void>;
    }
    interface CpyIcon {
    }
    interface CpyInput {
        "disabled": boolean;
        "isValid": () => Promise<boolean>;
        "label": string;
        "markAsTouched": () => Promise<void>;
        "placeholder": string;
        "required": boolean;
        "size": InputSize;
        "type": 'text' | 'number' | 'email' | 'password';
        "validators": Array<string | ValidatorEntry | Validator<string | number>>;
        "value": string | number;
    }
    interface CpyInputBase {
        "disabled": boolean;
        "error": string;
        "interacted": boolean;
        "label": string;
        "noContainer": boolean;
        "required": boolean;
        "size": InputSize;
        "value": any;
    }
    interface CpyInputToggle {
        "disabled": boolean;
        "isValid": () => Promise<boolean>;
        "label": string;
        "markAsTouched": () => Promise<void>;
        "required": boolean;
        "size": 'small' | 'default' | 'large';
        "switchAfter": boolean;
        "validators": Array<string | ValidatorEntry | Validator<boolean>>;
        "value": boolean;
    }
    interface CpyLink {
        "func": () => void;
        "href": string;
        "newTab": boolean;
        "type": 'primary' | 'secondary' | 'basic';
    }
    interface CpyNavMenu {
        "items": NavMenuItem[];
    }
    interface CpyNavMenuItem {
        "item": NavMenuItem;
    }
    interface CpyOverlay {
        "close": () => Promise<void>;
        "hasBackdropClick": boolean;
        "open": () => Promise<void>;
        "show": boolean;
        "toggle": (show: boolean) => Promise<void>;
        "zIndex": string;
    }
    interface CpyPageContainer {
    }
    interface CpyPageContent {
        "contentsTitle": string;
        "hideContentsList": boolean;
    }
    interface CpyPopup {
        "activeOn": 'hover' | 'click';
        "position": 'bottom-start' | 'top-start' | 'left-start' | 'right-start';
        "recalculatePosition": () => Promise<void>;
    }
    interface CpyProgressBar {
        "border": boolean;
        "indeterminate": boolean;
        "size": ProgressBarSize;
        "type": ProgressBarAppearance;
        "value": number;
    }
    interface CpyShowMore {
        "lines": number;
        "showLessText": string;
        "showMoreText": string;
        "text": string;
        "type": 'primary' | 'secondary' | 'basic';
    }
    interface CpySpinner {
        "size": SpinnerSize;
        "type": SpinnerAppearance;
    }
    interface CpySplash {
        "disabled": boolean;
    }
    interface CpyStack {
        "direction": 'left' | 'right';
        "overlap": number;
    }
    interface CpyTabContent {
        "select": () => Promise<void>;
        "unselect": () => Promise<void>;
    }
    interface CpyTabHeader {
        "headerId": string;
        "tabTitle": string;
    }
    interface CpyTable {
        "tableData": TableData[];
    }
    interface CpyTabs {
        "activeIndex": number;
    }
    interface CpyToast {
        "close": () => Promise<void>;
        "dismissible": boolean;
        "duration": number;
        "icon": string;
        "open": () => Promise<void>;
        "position": ToastPosition;
        "toastTitle": string;
        "type": AlertType;
        "zIndex": string;
    }
    interface CpyToolbar {
    }
    interface CpyTooltip {
        "hideArrow": boolean;
        "position": 'bottom' | 'left' | 'right' | 'top';
        "text": string;
    }
}
export interface CpyAccordionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyAccordionElement;
}
export interface CpyAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyAlertElement;
}
export interface CpyContentsListItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyContentsListItemElement;
}
export interface CpyDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDialogElement;
}
export interface CpyDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDrawerElement;
}
export interface CpyDrawerContainerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyDrawerContainerElement;
}
export interface CpyExpandCollapseCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyExpandCollapseElement;
}
export interface CpyInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyInputElement;
}
export interface CpyInputBaseCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyInputBaseElement;
}
export interface CpyInputToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyInputToggleElement;
}
export interface CpyNavMenuItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyNavMenuItemElement;
}
export interface CpyOverlayCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyOverlayElement;
}
export interface CpyTabHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyTabHeaderElement;
}
export interface CpyTabsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyTabsElement;
}
export interface CpyToastCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCpyToastElement;
}
declare global {
    interface HTMLCpyAccordionElement extends Components.CpyAccordion, HTMLStencilElement {
    }
    var HTMLCpyAccordionElement: {
        prototype: HTMLCpyAccordionElement;
        new (): HTMLCpyAccordionElement;
    };
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
    interface HTMLCpyBadgeElement extends Components.CpyBadge, HTMLStencilElement {
    }
    var HTMLCpyBadgeElement: {
        prototype: HTMLCpyBadgeElement;
        new (): HTMLCpyBadgeElement;
    };
    interface HTMLCpyButtonElement extends Components.CpyButton, HTMLStencilElement {
    }
    var HTMLCpyButtonElement: {
        prototype: HTMLCpyButtonElement;
        new (): HTMLCpyButtonElement;
    };
    interface HTMLCpyCardElement extends Components.CpyCard, HTMLStencilElement {
    }
    var HTMLCpyCardElement: {
        prototype: HTMLCpyCardElement;
        new (): HTMLCpyCardElement;
    };
    interface HTMLCpyCarouselElement extends Components.CpyCarousel, HTMLStencilElement {
    }
    var HTMLCpyCarouselElement: {
        prototype: HTMLCpyCarouselElement;
        new (): HTMLCpyCarouselElement;
    };
    interface HTMLCpyCodeBlockElement extends Components.CpyCodeBlock, HTMLStencilElement {
    }
    var HTMLCpyCodeBlockElement: {
        prototype: HTMLCpyCodeBlockElement;
        new (): HTMLCpyCodeBlockElement;
    };
    interface HTMLCpyCodeExampleElement extends Components.CpyCodeExample, HTMLStencilElement {
    }
    var HTMLCpyCodeExampleElement: {
        prototype: HTMLCpyCodeExampleElement;
        new (): HTMLCpyCodeExampleElement;
    };
    interface HTMLCpyCodeSnippetElement extends Components.CpyCodeSnippet, HTMLStencilElement {
    }
    var HTMLCpyCodeSnippetElement: {
        prototype: HTMLCpyCodeSnippetElement;
        new (): HTMLCpyCodeSnippetElement;
    };
    interface HTMLCpyCommentElement extends Components.CpyComment, HTMLStencilElement {
    }
    var HTMLCpyCommentElement: {
        prototype: HTMLCpyCommentElement;
        new (): HTMLCpyCommentElement;
    };
    interface HTMLCpyContentsListElement extends Components.CpyContentsList, HTMLStencilElement {
    }
    var HTMLCpyContentsListElement: {
        prototype: HTMLCpyContentsListElement;
        new (): HTMLCpyContentsListElement;
    };
    interface HTMLCpyContentsListItemElement extends Components.CpyContentsListItem, HTMLStencilElement {
    }
    var HTMLCpyContentsListItemElement: {
        prototype: HTMLCpyContentsListItemElement;
        new (): HTMLCpyContentsListItemElement;
    };
    interface HTMLCpyContextMenuElement extends Components.CpyContextMenu, HTMLStencilElement {
    }
    var HTMLCpyContextMenuElement: {
        prototype: HTMLCpyContextMenuElement;
        new (): HTMLCpyContextMenuElement;
    };
    interface HTMLCpyContextMenuItemElement extends Components.CpyContextMenuItem, HTMLStencilElement {
    }
    var HTMLCpyContextMenuItemElement: {
        prototype: HTMLCpyContextMenuItemElement;
        new (): HTMLCpyContextMenuItemElement;
    };
    interface HTMLCpyContextMenuTriggerElement extends Components.CpyContextMenuTrigger, HTMLStencilElement {
    }
    var HTMLCpyContextMenuTriggerElement: {
        prototype: HTMLCpyContextMenuTriggerElement;
        new (): HTMLCpyContextMenuTriggerElement;
    };
    interface HTMLCpyDialogElement extends Components.CpyDialog, HTMLStencilElement {
    }
    var HTMLCpyDialogElement: {
        prototype: HTMLCpyDialogElement;
        new (): HTMLCpyDialogElement;
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
    interface HTMLCpyExpandCollapseElement extends Components.CpyExpandCollapse, HTMLStencilElement {
    }
    var HTMLCpyExpandCollapseElement: {
        prototype: HTMLCpyExpandCollapseElement;
        new (): HTMLCpyExpandCollapseElement;
    };
    interface HTMLCpyIconElement extends Components.CpyIcon, HTMLStencilElement {
    }
    var HTMLCpyIconElement: {
        prototype: HTMLCpyIconElement;
        new (): HTMLCpyIconElement;
    };
    interface HTMLCpyInputElement extends Components.CpyInput, HTMLStencilElement {
    }
    var HTMLCpyInputElement: {
        prototype: HTMLCpyInputElement;
        new (): HTMLCpyInputElement;
    };
    interface HTMLCpyInputBaseElement extends Components.CpyInputBase, HTMLStencilElement {
    }
    var HTMLCpyInputBaseElement: {
        prototype: HTMLCpyInputBaseElement;
        new (): HTMLCpyInputBaseElement;
    };
    interface HTMLCpyInputToggleElement extends Components.CpyInputToggle, HTMLStencilElement {
    }
    var HTMLCpyInputToggleElement: {
        prototype: HTMLCpyInputToggleElement;
        new (): HTMLCpyInputToggleElement;
    };
    interface HTMLCpyLinkElement extends Components.CpyLink, HTMLStencilElement {
    }
    var HTMLCpyLinkElement: {
        prototype: HTMLCpyLinkElement;
        new (): HTMLCpyLinkElement;
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
    interface HTMLCpyOverlayElement extends Components.CpyOverlay, HTMLStencilElement {
    }
    var HTMLCpyOverlayElement: {
        prototype: HTMLCpyOverlayElement;
        new (): HTMLCpyOverlayElement;
    };
    interface HTMLCpyPageContainerElement extends Components.CpyPageContainer, HTMLStencilElement {
    }
    var HTMLCpyPageContainerElement: {
        prototype: HTMLCpyPageContainerElement;
        new (): HTMLCpyPageContainerElement;
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
    interface HTMLCpyProgressBarElement extends Components.CpyProgressBar, HTMLStencilElement {
    }
    var HTMLCpyProgressBarElement: {
        prototype: HTMLCpyProgressBarElement;
        new (): HTMLCpyProgressBarElement;
    };
    interface HTMLCpyShowMoreElement extends Components.CpyShowMore, HTMLStencilElement {
    }
    var HTMLCpyShowMoreElement: {
        prototype: HTMLCpyShowMoreElement;
        new (): HTMLCpyShowMoreElement;
    };
    interface HTMLCpySpinnerElement extends Components.CpySpinner, HTMLStencilElement {
    }
    var HTMLCpySpinnerElement: {
        prototype: HTMLCpySpinnerElement;
        new (): HTMLCpySpinnerElement;
    };
    interface HTMLCpySplashElement extends Components.CpySplash, HTMLStencilElement {
    }
    var HTMLCpySplashElement: {
        prototype: HTMLCpySplashElement;
        new (): HTMLCpySplashElement;
    };
    interface HTMLCpyStackElement extends Components.CpyStack, HTMLStencilElement {
    }
    var HTMLCpyStackElement: {
        prototype: HTMLCpyStackElement;
        new (): HTMLCpyStackElement;
    };
    interface HTMLCpyTabContentElement extends Components.CpyTabContent, HTMLStencilElement {
    }
    var HTMLCpyTabContentElement: {
        prototype: HTMLCpyTabContentElement;
        new (): HTMLCpyTabContentElement;
    };
    interface HTMLCpyTabHeaderElement extends Components.CpyTabHeader, HTMLStencilElement {
    }
    var HTMLCpyTabHeaderElement: {
        prototype: HTMLCpyTabHeaderElement;
        new (): HTMLCpyTabHeaderElement;
    };
    interface HTMLCpyTableElement extends Components.CpyTable, HTMLStencilElement {
    }
    var HTMLCpyTableElement: {
        prototype: HTMLCpyTableElement;
        new (): HTMLCpyTableElement;
    };
    interface HTMLCpyTabsElement extends Components.CpyTabs, HTMLStencilElement {
    }
    var HTMLCpyTabsElement: {
        prototype: HTMLCpyTabsElement;
        new (): HTMLCpyTabsElement;
    };
    interface HTMLCpyToastElement extends Components.CpyToast, HTMLStencilElement {
    }
    var HTMLCpyToastElement: {
        prototype: HTMLCpyToastElement;
        new (): HTMLCpyToastElement;
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
        "cpy-accordion": HTMLCpyAccordionElement;
        "cpy-alert": HTMLCpyAlertElement;
        "cpy-avatar": HTMLCpyAvatarElement;
        "cpy-badge": HTMLCpyBadgeElement;
        "cpy-button": HTMLCpyButtonElement;
        "cpy-card": HTMLCpyCardElement;
        "cpy-carousel": HTMLCpyCarouselElement;
        "cpy-code-block": HTMLCpyCodeBlockElement;
        "cpy-code-example": HTMLCpyCodeExampleElement;
        "cpy-code-snippet": HTMLCpyCodeSnippetElement;
        "cpy-comment": HTMLCpyCommentElement;
        "cpy-contents-list": HTMLCpyContentsListElement;
        "cpy-contents-list-item": HTMLCpyContentsListItemElement;
        "cpy-context-menu": HTMLCpyContextMenuElement;
        "cpy-context-menu-item": HTMLCpyContextMenuItemElement;
        "cpy-context-menu-trigger": HTMLCpyContextMenuTriggerElement;
        "cpy-dialog": HTMLCpyDialogElement;
        "cpy-drawer": HTMLCpyDrawerElement;
        "cpy-drawer-container": HTMLCpyDrawerContainerElement;
        "cpy-expand-collapse": HTMLCpyExpandCollapseElement;
        "cpy-icon": HTMLCpyIconElement;
        "cpy-input": HTMLCpyInputElement;
        "cpy-input-base": HTMLCpyInputBaseElement;
        "cpy-input-toggle": HTMLCpyInputToggleElement;
        "cpy-link": HTMLCpyLinkElement;
        "cpy-nav-menu": HTMLCpyNavMenuElement;
        "cpy-nav-menu-item": HTMLCpyNavMenuItemElement;
        "cpy-overlay": HTMLCpyOverlayElement;
        "cpy-page-container": HTMLCpyPageContainerElement;
        "cpy-page-content": HTMLCpyPageContentElement;
        "cpy-popup": HTMLCpyPopupElement;
        "cpy-progress-bar": HTMLCpyProgressBarElement;
        "cpy-show-more": HTMLCpyShowMoreElement;
        "cpy-spinner": HTMLCpySpinnerElement;
        "cpy-splash": HTMLCpySplashElement;
        "cpy-stack": HTMLCpyStackElement;
        "cpy-tab-content": HTMLCpyTabContentElement;
        "cpy-tab-header": HTMLCpyTabHeaderElement;
        "cpy-table": HTMLCpyTableElement;
        "cpy-tabs": HTMLCpyTabsElement;
        "cpy-toast": HTMLCpyToastElement;
        "cpy-toolbar": HTMLCpyToolbarElement;
        "cpy-tooltip": HTMLCpyTooltipElement;
    }
}
declare namespace LocalJSX {
    interface CpyAccordion {
        "headerTitle"?: string;
        "onAccordionOpened"?: (event: CpyAccordionCustomEvent<void>) => void;
        "opened"?: boolean;
        "size"?: 'small' | 'default' | 'large';
    }
    interface CpyAlert {
        "appearance"?: AlertAppearance;
        "container"?: boolean;
        "dismissible"?: boolean;
        "icon"?: string;
        "onClosed"?: (event: CpyAlertCustomEvent<void>) => void;
        "type"?: AlertType;
    }
    interface CpyAvatar {
        "border"?: boolean;
        "initials"?: string;
        "size"?: AvatarSize;
        "src"?: string;
        "type"?: 'rounded' | 'square';
    }
    interface CpyBadge {
        "appearance"?: BadgeAppearance;
        "size"?: BadgeSize;
        "type"?: BadgeType;
    }
    interface CpyButton {
        "appearance"?: ButtonStyle;
        "disabled"?: boolean;
        "icon"?: boolean;
        "size"?: ButtonSize;
        "type"?: ButtonAppearance;
    }
    interface CpyCard {
    }
    interface CpyCarousel {
        "carouselTitle"?: string;
    }
    interface CpyCodeBlock {
        "code"?: string;
        "language"?: CodeLanguage;
    }
    interface CpyCodeExample {
        "code"?: string;
        "header"?: any;
        "language"?: CodeLanguage;
    }
    interface CpyCodeSnippet {
    }
    interface CpyComment {
        "comment"?: CommentItem;
        "maxLines"?: number;
        "rightAligned"?: boolean;
        "showLessText"?: string;
        "showMoreText"?: string;
        "size"?: CommentSize;
        "type"?: 'primary' | 'secondary' | 'basic';
    }
    interface CpyContentsList {
        "activeIndex"?: number;
        "headerTitle"?: string;
        "items"?: ContentsListItem[];
    }
    interface CpyContentsListItem {
        "active"?: boolean;
        "item"?: ContentsListItem;
        "onClicked"?: (event: CpyContentsListItemCustomEvent<void>) => void;
    }
    interface CpyContextMenu {
        "items"?: ContextMenuItem[];
    }
    interface CpyContextMenuItem {
        "item"?: ContextMenuItem;
    }
    interface CpyContextMenuTrigger {
        "items"?: ContextMenuItem[];
    }
    interface CpyDialog {
        "dialogTitle"?: string;
        "onClosed"?: (event: CpyDialogCustomEvent<void>) => void;
        "size"?: 'small' | 'default' | 'large' | 'full-screen';
        "zIndex"?: string;
    }
    interface CpyDrawer {
        "onToggleOpened"?: (event: CpyDrawerCustomEvent<void>) => void;
        "opened"?: boolean;
    }
    interface CpyDrawerContainer {
        "onToggleDrawer"?: (event: CpyDrawerContainerCustomEvent<void>) => void;
        "opened"?: boolean;
    }
    interface CpyExpandCollapse {
        "duration"?: number;
        "expanded"?: boolean;
        "onToggleExpanded"?: (event: CpyExpandCollapseCustomEvent<boolean>) => void;
    }
    interface CpyIcon {
    }
    interface CpyInput {
        "disabled"?: boolean;
        "label"?: string;
        "onValueChange"?: (event: CpyInputCustomEvent<string | number>) => void;
        "placeholder"?: string;
        "required"?: boolean;
        "size"?: InputSize;
        "type"?: 'text' | 'number' | 'email' | 'password';
        "validators"?: Array<string | ValidatorEntry | Validator<string | number>>;
        "value"?: string | number;
    }
    interface CpyInputBase {
        "disabled"?: boolean;
        "error"?: string;
        "interacted"?: boolean;
        "label"?: string;
        "noContainer"?: boolean;
        "onValueChange"?: (event: CpyInputBaseCustomEvent<string>) => void;
        "required"?: boolean;
        "size"?: InputSize;
        "value"?: any;
    }
    interface CpyInputToggle {
        "disabled"?: boolean;
        "label"?: string;
        "onValueChange"?: (event: CpyInputToggleCustomEvent<boolean>) => void;
        "required"?: boolean;
        "size"?: 'small' | 'default' | 'large';
        "switchAfter"?: boolean;
        "validators"?: Array<string | ValidatorEntry | Validator<boolean>>;
        "value"?: boolean;
    }
    interface CpyLink {
        "func"?: () => void;
        "href"?: string;
        "newTab"?: boolean;
        "type"?: 'primary' | 'secondary' | 'basic';
    }
    interface CpyNavMenu {
        "items"?: NavMenuItem[];
    }
    interface CpyNavMenuItem {
        "item"?: NavMenuItem;
        "onItemActive"?: (event: CpyNavMenuItemCustomEvent<void>) => void;
    }
    interface CpyOverlay {
        "hasBackdropClick"?: boolean;
        "onBackdropClick"?: (event: CpyOverlayCustomEvent<void>) => void;
        "onClosed"?: (event: CpyOverlayCustomEvent<void>) => void;
        "show"?: boolean;
        "zIndex"?: string;
    }
    interface CpyPageContainer {
    }
    interface CpyPageContent {
        "contentsTitle"?: string;
        "hideContentsList"?: boolean;
    }
    interface CpyPopup {
        "activeOn"?: 'hover' | 'click';
        "position"?: 'bottom-start' | 'top-start' | 'left-start' | 'right-start';
    }
    interface CpyProgressBar {
        "border"?: boolean;
        "indeterminate"?: boolean;
        "size"?: ProgressBarSize;
        "type"?: ProgressBarAppearance;
        "value"?: number;
    }
    interface CpyShowMore {
        "lines"?: number;
        "showLessText"?: string;
        "showMoreText"?: string;
        "text"?: string;
        "type"?: 'primary' | 'secondary' | 'basic';
    }
    interface CpySpinner {
        "size"?: SpinnerSize;
        "type"?: SpinnerAppearance;
    }
    interface CpySplash {
        "disabled"?: boolean;
    }
    interface CpyStack {
        "direction"?: 'left' | 'right';
        "overlap"?: number;
    }
    interface CpyTabContent {
    }
    interface CpyTabHeader {
        "headerId"?: string;
        "onSelected"?: (event: CpyTabHeaderCustomEvent<string>) => void;
        "tabTitle"?: string;
    }
    interface CpyTable {
        "tableData"?: TableData[];
    }
    interface CpyTabs {
        "activeIndex"?: number;
        "onTabChanged"?: (event: CpyTabsCustomEvent<number>) => void;
    }
    interface CpyToast {
        "dismissible"?: boolean;
        "duration"?: number;
        "icon"?: string;
        "onClosed"?: (event: CpyToastCustomEvent<void>) => void;
        "onOpened"?: (event: CpyToastCustomEvent<void>) => void;
        "position"?: ToastPosition;
        "toastTitle"?: string;
        "type"?: AlertType;
        "zIndex"?: string;
    }
    interface CpyToolbar {
    }
    interface CpyTooltip {
        "hideArrow"?: boolean;
        "position"?: 'bottom' | 'left' | 'right' | 'top';
        "text"?: string;
    }
    interface IntrinsicElements {
        "cpy-accordion": CpyAccordion;
        "cpy-alert": CpyAlert;
        "cpy-avatar": CpyAvatar;
        "cpy-badge": CpyBadge;
        "cpy-button": CpyButton;
        "cpy-card": CpyCard;
        "cpy-carousel": CpyCarousel;
        "cpy-code-block": CpyCodeBlock;
        "cpy-code-example": CpyCodeExample;
        "cpy-code-snippet": CpyCodeSnippet;
        "cpy-comment": CpyComment;
        "cpy-contents-list": CpyContentsList;
        "cpy-contents-list-item": CpyContentsListItem;
        "cpy-context-menu": CpyContextMenu;
        "cpy-context-menu-item": CpyContextMenuItem;
        "cpy-context-menu-trigger": CpyContextMenuTrigger;
        "cpy-dialog": CpyDialog;
        "cpy-drawer": CpyDrawer;
        "cpy-drawer-container": CpyDrawerContainer;
        "cpy-expand-collapse": CpyExpandCollapse;
        "cpy-icon": CpyIcon;
        "cpy-input": CpyInput;
        "cpy-input-base": CpyInputBase;
        "cpy-input-toggle": CpyInputToggle;
        "cpy-link": CpyLink;
        "cpy-nav-menu": CpyNavMenu;
        "cpy-nav-menu-item": CpyNavMenuItem;
        "cpy-overlay": CpyOverlay;
        "cpy-page-container": CpyPageContainer;
        "cpy-page-content": CpyPageContent;
        "cpy-popup": CpyPopup;
        "cpy-progress-bar": CpyProgressBar;
        "cpy-show-more": CpyShowMore;
        "cpy-spinner": CpySpinner;
        "cpy-splash": CpySplash;
        "cpy-stack": CpyStack;
        "cpy-tab-content": CpyTabContent;
        "cpy-tab-header": CpyTabHeader;
        "cpy-table": CpyTable;
        "cpy-tabs": CpyTabs;
        "cpy-toast": CpyToast;
        "cpy-toolbar": CpyToolbar;
        "cpy-tooltip": CpyTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cpy-accordion": LocalJSX.CpyAccordion & JSXBase.HTMLAttributes<HTMLCpyAccordionElement>;
            "cpy-alert": LocalJSX.CpyAlert & JSXBase.HTMLAttributes<HTMLCpyAlertElement>;
            "cpy-avatar": LocalJSX.CpyAvatar & JSXBase.HTMLAttributes<HTMLCpyAvatarElement>;
            "cpy-badge": LocalJSX.CpyBadge & JSXBase.HTMLAttributes<HTMLCpyBadgeElement>;
            "cpy-button": LocalJSX.CpyButton & JSXBase.HTMLAttributes<HTMLCpyButtonElement>;
            "cpy-card": LocalJSX.CpyCard & JSXBase.HTMLAttributes<HTMLCpyCardElement>;
            "cpy-carousel": LocalJSX.CpyCarousel & JSXBase.HTMLAttributes<HTMLCpyCarouselElement>;
            "cpy-code-block": LocalJSX.CpyCodeBlock & JSXBase.HTMLAttributes<HTMLCpyCodeBlockElement>;
            "cpy-code-example": LocalJSX.CpyCodeExample & JSXBase.HTMLAttributes<HTMLCpyCodeExampleElement>;
            "cpy-code-snippet": LocalJSX.CpyCodeSnippet & JSXBase.HTMLAttributes<HTMLCpyCodeSnippetElement>;
            "cpy-comment": LocalJSX.CpyComment & JSXBase.HTMLAttributes<HTMLCpyCommentElement>;
            "cpy-contents-list": LocalJSX.CpyContentsList & JSXBase.HTMLAttributes<HTMLCpyContentsListElement>;
            "cpy-contents-list-item": LocalJSX.CpyContentsListItem & JSXBase.HTMLAttributes<HTMLCpyContentsListItemElement>;
            "cpy-context-menu": LocalJSX.CpyContextMenu & JSXBase.HTMLAttributes<HTMLCpyContextMenuElement>;
            "cpy-context-menu-item": LocalJSX.CpyContextMenuItem & JSXBase.HTMLAttributes<HTMLCpyContextMenuItemElement>;
            "cpy-context-menu-trigger": LocalJSX.CpyContextMenuTrigger & JSXBase.HTMLAttributes<HTMLCpyContextMenuTriggerElement>;
            "cpy-dialog": LocalJSX.CpyDialog & JSXBase.HTMLAttributes<HTMLCpyDialogElement>;
            "cpy-drawer": LocalJSX.CpyDrawer & JSXBase.HTMLAttributes<HTMLCpyDrawerElement>;
            "cpy-drawer-container": LocalJSX.CpyDrawerContainer & JSXBase.HTMLAttributes<HTMLCpyDrawerContainerElement>;
            "cpy-expand-collapse": LocalJSX.CpyExpandCollapse & JSXBase.HTMLAttributes<HTMLCpyExpandCollapseElement>;
            "cpy-icon": LocalJSX.CpyIcon & JSXBase.HTMLAttributes<HTMLCpyIconElement>;
            "cpy-input": LocalJSX.CpyInput & JSXBase.HTMLAttributes<HTMLCpyInputElement>;
            "cpy-input-base": LocalJSX.CpyInputBase & JSXBase.HTMLAttributes<HTMLCpyInputBaseElement>;
            "cpy-input-toggle": LocalJSX.CpyInputToggle & JSXBase.HTMLAttributes<HTMLCpyInputToggleElement>;
            "cpy-link": LocalJSX.CpyLink & JSXBase.HTMLAttributes<HTMLCpyLinkElement>;
            "cpy-nav-menu": LocalJSX.CpyNavMenu & JSXBase.HTMLAttributes<HTMLCpyNavMenuElement>;
            "cpy-nav-menu-item": LocalJSX.CpyNavMenuItem & JSXBase.HTMLAttributes<HTMLCpyNavMenuItemElement>;
            "cpy-overlay": LocalJSX.CpyOverlay & JSXBase.HTMLAttributes<HTMLCpyOverlayElement>;
            "cpy-page-container": LocalJSX.CpyPageContainer & JSXBase.HTMLAttributes<HTMLCpyPageContainerElement>;
            "cpy-page-content": LocalJSX.CpyPageContent & JSXBase.HTMLAttributes<HTMLCpyPageContentElement>;
            "cpy-popup": LocalJSX.CpyPopup & JSXBase.HTMLAttributes<HTMLCpyPopupElement>;
            "cpy-progress-bar": LocalJSX.CpyProgressBar & JSXBase.HTMLAttributes<HTMLCpyProgressBarElement>;
            "cpy-show-more": LocalJSX.CpyShowMore & JSXBase.HTMLAttributes<HTMLCpyShowMoreElement>;
            "cpy-spinner": LocalJSX.CpySpinner & JSXBase.HTMLAttributes<HTMLCpySpinnerElement>;
            "cpy-splash": LocalJSX.CpySplash & JSXBase.HTMLAttributes<HTMLCpySplashElement>;
            "cpy-stack": LocalJSX.CpyStack & JSXBase.HTMLAttributes<HTMLCpyStackElement>;
            "cpy-tab-content": LocalJSX.CpyTabContent & JSXBase.HTMLAttributes<HTMLCpyTabContentElement>;
            "cpy-tab-header": LocalJSX.CpyTabHeader & JSXBase.HTMLAttributes<HTMLCpyTabHeaderElement>;
            "cpy-table": LocalJSX.CpyTable & JSXBase.HTMLAttributes<HTMLCpyTableElement>;
            "cpy-tabs": LocalJSX.CpyTabs & JSXBase.HTMLAttributes<HTMLCpyTabsElement>;
            "cpy-toast": LocalJSX.CpyToast & JSXBase.HTMLAttributes<HTMLCpyToastElement>;
            "cpy-toolbar": LocalJSX.CpyToolbar & JSXBase.HTMLAttributes<HTMLCpyToolbarElement>;
            "cpy-tooltip": LocalJSX.CpyTooltip & JSXBase.HTMLAttributes<HTMLCpyTooltipElement>;
        }
    }
}

import { Controller } from '@hotwired/stimulus';
import Component from './Component';
export { Component };
export declare const getComponent: (element: HTMLElement) => Promise<Component>;
export interface LiveEvent extends CustomEvent {
    detail: {
        controller: LiveController;
        component: Component;
    };
}
export interface LiveController {
    element: HTMLElement;
    component: Component;
}
export default class LiveControllerDefault extends Controller<HTMLElement> implements LiveController {
    static values: {
        url: StringConstructor;
        props: ObjectConstructor;
        nestedProps: {
            type: ObjectConstructor;
            default: {};
        };
        csrf: StringConstructor;
        debounce: {
            type: NumberConstructor;
            default: number;
        };
        id: StringConstructor;
        fingerprint: StringConstructor;
    };
    readonly urlValue: string;
    readonly propsValue: any;
    readonly nestedPropsValue: any;
    readonly csrfValue: string;
    readonly hasDebounceValue: boolean;
    readonly debounceValue: number;
    readonly fingerprintValue: string;
    private proxiedComponent;
    component: Component;
    pendingActionTriggerModelElement: HTMLElement | null;
    private elementEventListeners;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    update(event: any): void;
    action(event: any): void;
    $render(): Promise<import("./Backend/BackendResponse").default>;
    $updateModel(model: string, value: any, shouldRender?: boolean, debounce?: number | boolean): Promise<import("./Backend/BackendResponse").default>;
    private handleInputEvent;
    private handleChangeEvent;
    private updateModelFromElementEvent;
    handleConnectedControllerEvent(event: LiveEvent): void;
    handleDisconnectedChildControllerEvent(event: LiveEvent): void;
    private dispatchEvent;
}

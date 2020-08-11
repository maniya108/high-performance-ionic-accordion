/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface MyAccordionGroup {
    }
    interface MyAccordionItem {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLMyAccordionGroupElement extends Components.MyAccordionGroup, HTMLStencilElement {
    }
    var HTMLMyAccordionGroupElement: {
        prototype: HTMLMyAccordionGroupElement;
        new (): HTMLMyAccordionGroupElement;
    };
    interface HTMLMyAccordionItemElement extends Components.MyAccordionItem, HTMLStencilElement {
    }
    var HTMLMyAccordionItemElement: {
        prototype: HTMLMyAccordionItemElement;
        new (): HTMLMyAccordionItemElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "my-accordion-group": HTMLMyAccordionGroupElement;
        "my-accordion-item": HTMLMyAccordionItemElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface MyAccordionGroup {
    }
    interface MyAccordionItem {
        "onToggle"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "my-accordion-group": MyAccordionGroup;
        "my-accordion-item": MyAccordionItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "my-accordion-group": LocalJSX.MyAccordionGroup & JSXBase.HTMLAttributes<HTMLMyAccordionGroupElement>;
            "my-accordion-item": LocalJSX.MyAccordionItem & JSXBase.HTMLAttributes<HTMLMyAccordionItemElement>;
        }
    }
}

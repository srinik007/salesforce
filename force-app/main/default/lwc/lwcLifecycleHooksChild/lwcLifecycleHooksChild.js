import { LightningElement } from 'lwc';

export default class LwcLifecycleHooksChild extends LightningElement {
    /**
     * Author: Kanuri Srinivas
     * This lightning web component (lwc) helps to understand the lwc lifecycle hooks flow from parent - child
     */

    constructor(){
        super();
        console.log('Child Constructor');
    }

    connectedCallback(){
        console.log('Child connectedCallback');
    }

    renderedCallback(){
        console.log('Child renderedCallback');
    }

    disconnectedCallback(){
        console.log('Child disconnectedCallback');
    }
}
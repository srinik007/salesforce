import { LightningElement } from 'lwc';

export default class LwcLifecycleHooks extends LightningElement {
    /**
     * Author: Kanuri Srinivas
     * This lightning web component (lwc) helps to understand the lwc lifecycle hooks flow from parent - child
     */

    /*
    1. Invoked when the instance of the component is created
    2. This hook is fired in the parent component first since it flows from parent to child
    3. Child elements can’t be accessed because they don’t exist yet
    4. It is necessary to invoke super() from the constructor, since the Lightning web component 
       extends LightningElement which has a constructor and is not supposed to bypass the parent class constructor
    5. Element properties are assigned to the component after construction, so do not access them 
       as they are not yet in existence (public properties decorated with @api)
    */
    constructor(){
        super();
        console.log('Parent Constructor');
    }

    /*
    1. ConnectedCallback() Invoked when the component is inserted into DOM.
    2. Child elements can’t be accessed because they don’t exist yet
    3. This hook flows from parent component to child component
    4. All the public properties would have been received from the parent component
    5. Parent elements can be accessed and modified in this lifecycle hook
    */
    connectedCallback(){
        console.log('Parent connectedCallback');
    }

    /* 
    1. Invoked when a component is completely rendered on UI
    2. Flows from child component to parent component
    3. Should be used cautiously so that an infinite loop is not created since this is called every time
       component rendered
    4. Make sure to use a private boolean property like isRendered to track whether renderedCallback has
       executed
    5. Not recommended to use to change the state of the component instead use getter and setter. It will
       lead to infinite loop
    6. Reactive property leads to infinite loop
    */
    renderedCallback(){
        console.log('Parent renderedCallback');
    }

    /*
    1. Invoked when a component is removed from DOM
    2. Flows from parent component to child component
    */
    disconnectedCallback(){
        console.log('Parent disconnectedCallback');
    }

}
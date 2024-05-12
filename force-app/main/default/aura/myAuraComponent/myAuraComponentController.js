({
    doInit: function(component, event, helper) {
        // LWCコンポーネントのメソッドを呼び出す
        component.find('myLWC').myLWCMethod();
    }
})
// Aura コントローラ
({
    loadLWC: function(component, event, helper) {
        $A.createComponent(
            "c:LWCComponentName",
            {},
            function(newComponent, status, errorMessage) {
                if (status === "SUCCESS") {
                    component.set("v.body", newComponent);
                } else {
                    console.error("Error creating LWC component: " + errorMessage);
                }
            }
        );
    }
})
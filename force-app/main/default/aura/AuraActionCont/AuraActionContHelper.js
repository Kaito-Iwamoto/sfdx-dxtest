({
    /**
     * 初期化
     * @param {*} component
     */
    init: function(component) {
        var lwcName = component.get('v.lwcName');
        this.createComponent(component, lwcName);
    },

    /**
     * LWCコンポーネント作成
     * @param {*} component
     * @param {*} lwcName LWCコンポーネント名
     */
    createComponent: function(component, lwcName) {
        const recordId = component.get("v.recordId");
        const sObjectName = component.get("v.sObjectName");
        $A.createComponent(
            `c:${lwcName}`, {
                recordId: recordId,
                sObjectName: sObjectName,
                onauraevent: component.getReference("c.onAuraEvent"),
                onsetloading: component.getReference("c.onSetLoading")
            },
            (lwcCmp, status, errorMessage) => {
                if (status === "SUCCESS") {
                    const body = component.get("v.body");
                    body.push(lwcCmp);
                    component.set("v.body", body);
                } else {
                    this.displayError(
                        `The '${lwcName}' can't be find. Check if it's exposed. More details in DevTools.`,
                        errorMessage
                    );
                    $A.enqueueAction(component.get("c.closeAction"));
                }
            }
        );
    },

    /**
     * Auraイベント
     * @param {*} name イベント名
     * @param {*} params パラメータ
     */
    fireAuraEvent: function(name, params) {
        const event = $A.get(name);
        if (params) event.setParams(params);
        event.fire();
    },

    /**
     * ロードフラグ設定
     * @param {*} component
     * @param {*} loading ロードフラグ
     */
    setLoading: function(component, loading) {
        component.set("v.isLoading", loading);
    },

    /**
     * Toastエラーメッセージ表示
     * @param {*} message メッセージ
     * @param {*} errorMessage エラーメッセージ
     */
    displayError: function(message, errorMessage) {
        console.error("Error: ", errorMessage);
        this.showToast(message, "error");
    },

    /**
     * Toastメッセージ表示
     * @param {*} message メッセージ
     * @param {*} type タイプ
     */
    showToast: function(message, type) {
        const toast = $A.get("e.force:showToast");
        toast.setParams({
            message: message,
            type: type
        });
        toast.fire();
    }
});
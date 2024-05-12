import { LightningElement, api } from "lwc";
export default class LwcAction extends LightningElement {
    //レコードId
    @api recordId;
    //オブジェクト名
    @api sObjectName;

    //準備完了フラグ
    isReady = false;

    /**
     * ロード完了
     */
    ready() {
        this.hideSpinner();
        this.isReady = true;
    }

    /**
     * QuickActionを閉じる
     */
    closeAction() {
        this.dispatchEvent(LwcAction.getCloseQuickAction());
    }

    /**
     * 画面リフレッシュ
     */
    refreshView() {
        this.dispatchEvent(LwcAction.getRefreshView());

    }

    /**
     * ロード表示
     */
    showSpinner() {
        this.dispatchEvent(LwcAction.getSpinnerEvent(true));
    }

    /**
     * ロール非表示
     */
    hideSpinner() {
        this.dispatchEvent(LwcAction.getSpinnerEvent(false));
    }

    /**
     * Auraイベント
     * @param {*} name イベント名
     * @param {*} params パラメータ
     */
    fireAuraEvent(name, params) {
        this.dispatchEvent(LwcAction.getAuraEvent(name, params));
    }

    /**
     * 静的メソッド
     * QuickActionを閉じる
     * @param {*} element
     */
    static fireCloseAction(element) {
        element.dispatchEvent(LwcAction.getCloseQuickAction());
    }

    /**
     * 静的メソッド
     * 画面リフレッシュ
     * @param {*} element
     */
    static fireRefreshView(element) {
        element.dispatchEvent(LwcAction.getRefreshView());
    }

    /**
     * 静的メソッド
     * ロード表示
     * @param {*} element
     */
    static fireShowSpinner(element) {
        element.dispatchEvent(LwcAction.getSpinnerEvent(true));
    }

    /**
     * 静的メソッド
     * ロード非表示
     * @param {*} element
     */
    static fireHideSpinner(element) {
        element.dispatchEvent(LwcAction.getSpinnerEvent(false));
    }

    /**
     * 静的メソッド
     * Auraイベント
     * @param {*} element
     * @param {*} name
     * @param {*} params
     */
    static fireAuraEvent(element, name, params) {
        element.dispatchEvent(LwcAction.getAuraEvent(name, params));
    }

    /**
     * 静的メソッド
     * ロード制御
     * @param {*} isLoading
     * @returns
     */
    static getSpinnerEvent(isLoading) {
        return new CustomEvent("setloading", {
            detail: { isLoading: isLoading },
            composed: true,
            bubbles: true,
        });
    }

    /**
     * QuickActionを閉じる
     */
    static getCloseQuickAction() {
        return LwcAction.getAuraEvent("e.force:closeQuickAction");
    }

    /**
     * 静的メソッド
     * 画面リフレッシュ
     */
    static getRefreshView() {
        return LwcAction.getAuraEvent("e.force:refreshView");
    }

    /**
     * Auraイベント
     * @param {*} name 名
     * @param {*} params パラメータ
     * @returns
     */
    static getAuraEvent(name, params) {
        return new CustomEvent("auraevent", {
            detail: { name: name, params: params },
            composed: true,
            bubbles: true,
        });
    }
}
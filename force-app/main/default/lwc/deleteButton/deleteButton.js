import LwcAction from "c/lwcAction";

export default class DeleteButton extends LwcAction {

    /**
     *  「はい」
     */
     async confirm(e) {
        try {
           //はいの処理TODO
        } catch (error) {
           console.error(error);
        } finally {
            this.closeAction();
        }
    }

    /**
     * 「いええ」
     */
    cancel(e) {
        e.preventDefault();
        this.closeAction();
    }


    /**
     * 初期化処理
     */
     connectedCallback() {
        this.ready();
    }
}
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MyLWCComponent extends LightningElement {
    @api
    myLWCMethod() {
        // トースト通知を表示する処理
        const event = new ShowToastEvent({
            title: '成功',
            message: 'LWCメソッドが正常に呼び出されました',
            variant: 'success'
        });
        this.dispatchEvent(event);

        console.log('LWCメソッドが呼び出されました');
    }

    connectedCallback() {
        // コンポーネントがDOMに挿入された直後に実行される処理
        this.myLWCMethod();
    }
}
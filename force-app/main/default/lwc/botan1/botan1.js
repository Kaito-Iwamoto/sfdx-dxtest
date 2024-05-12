import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class botan1 extends LightningElement {
    @api recordId;

    submit1() {
        this.dispatchEvent(new CloseActionScreenEvent());
        this.dispatchEvent(
            new ShowToastEvent({
                title: '処理完了',
                message: '正常に処理が完了しました。',
                variant: 'success'
            })
        );
    }

    cancel() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}
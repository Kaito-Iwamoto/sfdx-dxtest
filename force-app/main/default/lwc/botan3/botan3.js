import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SimpleHeadlessAction extends LightningElement {
    @api
    handleAction() {
        console.log('ボタンが押下されました');
        // ここでShowToastEventを使用するロジックを追加することができます
    }
}
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SimpleHeadlessAction extends LightningElement {
  @api invoke() {
    //ログ上でボタンが押下されたことを確認
    console.log('ボタンが押下されました');

    // 処理が完了した後にToastメッセージを表示
    this.dispatchEvent(
        new ShowToastEvent({
            title: '成功',
            message: '正常に処理が完了しました',
            variant: 'success'
      })
    );
  }
}
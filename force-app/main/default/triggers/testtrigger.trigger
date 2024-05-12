trigger testtrigger on Account (before update) {
    for (Account acc : Trigger.new) {
        Account oldAcc = Trigger.oldMap.get(acc.Id);
        // Field1__cが更新されようとしているかをチェック
        if (acc.Field1__c != oldAcc.Field1__c) {
            // エラーを追加して更新を阻止
            acc.Field1__c.addError('この項目は修正できません');
        }
    }
}
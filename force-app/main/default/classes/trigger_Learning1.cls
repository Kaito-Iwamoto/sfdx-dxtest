public with sharing class trigger_Learning1 {
    public void beforeInsert(List <Diary__c> objList) {
        //before insert の処理
        for(Diary__c element:objList){
            element.Trigger_field__c='beforeinsert処理が動きました';
        }
    }
}
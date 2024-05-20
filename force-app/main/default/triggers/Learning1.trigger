trigger Learning1 on Diary__c (before insert) {
    trigger_Learning1 handler =new trigger_Learning1();
    if(Trigger.isInsert){
        handler.beforeInsert(Trigger.new);
    }

}
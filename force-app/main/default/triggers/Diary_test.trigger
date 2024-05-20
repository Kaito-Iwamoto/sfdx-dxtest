trigger Diary_test on Diary__c (before Update) {
    Diary_test_handler handler = new Diary_test_handler();
    if(Trigger.isUpdate){
        handler.Diary_test_handler(Trigger.new);
    }
}
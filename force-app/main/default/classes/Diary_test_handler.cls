public with sharing class Diary_test_handler {
    public void Diary_test_handler(List<Diary__c> objList) {
        // before update の処理
        List<Event> eventsToUpdate = new List<Event>();
        for (Diary__c element : objList) {
            List<Event> events = [SELECT Id, ActivityDate, Field1__c FROM Event WHERE ActivityDate = :element.date__c];
            for (Event a : events) {
                a.Field1__c = element.Id;
                eventsToUpdate.add(a);
            }
        }
        update eventsToUpdate;
    }
}

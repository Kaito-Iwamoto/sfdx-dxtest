public with sharing class ToDoController {
    @AuraEnabled(cacheable=true)
    public static List<Task> getToDosByAccountId(String accountId) {
        return [SELECT Id, Subject
                FROM Task
                WHERE Accountid = :accountId];
    }
}
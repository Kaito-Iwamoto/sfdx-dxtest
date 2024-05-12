import { LightningElement, wire, api, track } from 'lwc';
import getToDosByAccountId from '@salesforce/apex/ToDoController.getToDosByAccountId';
import ToDo_Subject from '@salesforce/schema/Task.Subject'

export default class ToDoList extends LightningElement {
    @api recordId;
    @track toDoList;
    @track error;

    columns = [
        { label: 'ToDo名', fieldName: ToDo_Subject.fieldApiName, type: 'Picklist' },
        { label: '期限', fieldName: 'Due_Date__c', type: 'date' },
        { label: 'ステータス', fieldName: 'Status__c', type: 'text' },
        { label: '優先度', fieldName: 'Priority__c', type: 'text' }
    ];

    @wire(getToDosByAccountId, { accountId: '$recordId' })
    wiredToDos({ error, data }) {
        if (data) {
            this.toDoList = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.toDoList = undefined;
        }
    }
}
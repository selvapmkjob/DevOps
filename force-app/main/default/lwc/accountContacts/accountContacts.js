import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/AccountContactsController.getContacts';

export default class AccountContacts extends LightningElement {
    @api recordId;
    contacts;
    error;

    @wire(getContacts, { accountId: '$recordId' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}

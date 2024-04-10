import { LightningElement, track } from 'lwc';
import { reduceErrors } from 'c/ldsUtilities';
import getDummyApiUsers from '@salesforce/apex/DAP_DummyApiProxyAuraCtrl.getDummyApiUsers';

export default class DapUserList extends LightningElement {
    @track users = [];
    @track errors = false;
    connectedCallback() {
                         getDummyApiUsers({
                                 birthdate: this.minimumBirthDate
                             })
                     .then(users => {
                             if (users) {
                                this.users = users;
                                this.errors = false;
                             }
                        })
                         .catch(error => {
                                 this.users = [];
                                 this.errors = reduceErrors(error);
                             });
                     }

    get showNoUsers() {
        return !this.errors && !this.users?.length;
    }
}
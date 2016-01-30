import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector:'contact-manager'
})
@View({
    template:'<h1>Welcome to {{title}}</h1>'
})
export class ContactManager {
    title:string;

    constructor(){
        this.title = "Contact Manager";
    }
}

bootstrap(ContactManager);
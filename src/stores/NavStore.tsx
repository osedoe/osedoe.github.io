import { action, observable } from 'mobx';

export class NavStore {
    constructor() {
        this.toggleNav = this.toggleNav.bind(this);
    }
    @observable navTitle: string = `_Menu`;
    @observable display: boolean = false;
    @observable navigation: string[] = [
        `Home`,
        `About`,
        `Work`,
        `Blog`
    ];
    @action toggleNav(): void {
        const currentState = this.display;
        this.display = !currentState;
    }

}

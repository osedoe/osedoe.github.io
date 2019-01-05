import { action, observable } from 'mobx';

export class LandingStore {
    @observable heading1: string = 'Hola.';
    @observable heading2: string = `I'm Jose`;
    @observable heading3: string = `A Full Stack Developer from the Canary Islands`;
}
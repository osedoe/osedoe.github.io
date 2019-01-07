import { observable } from 'mobx';

export interface ILandingStore {
    heading: string;
    heading2: string;
    heading3: string;
}

export class LandingStore {
    @observable heading1 = 'Hola.';
    @observable heading2 = `I'm Jose`;
    @observable heading3 = `A Full Stack Developer from the Canary Islands`;
}
import { observable } from 'mobx';

export class LandingStore {
  @observable headingText = {
    greeting: 'Hola.',
    introduction: 'I\'m Jose Diaz',
    job: 'Full Stack Developer | Nologis',
    description: 'Specialized in JavaScript, TypeScript, ReactJS and NodeJS.'
  };
  @observable heading1: string = 'I\'m Jose Diaz';
  @observable heading2: string = `Full Stack Developer at Nologis`;
  @observable heading3: string = `Specialized in `;
}

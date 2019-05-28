import { observable } from 'mobx';

export class WorkStore {
  @observable sectionTitle: string = 'Work';
  @observable sectionSubtitle: string = 'All my work is uploaded on GitHub. I tend to only showcase here some FrontEnd stuff.';
}

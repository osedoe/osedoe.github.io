import { observable } from 'mobx';

export class AboutStore {
    @observable sectionTitle: string = `About`;
    @observable sectionSubtitles: string[] = [
        `Foreword`,
        `The Developer`,
        `The Person`,
        `Skills`
    ];
    @observable sectionTexts: string[] = [
        // tslint:disable-next-line:max-line-length
        `My name is Jose Diaz Gonzalez, and I am a Full Stack Web Developer based in Tenerife, Spain. In 2015, I moved to Bristol, UK. There I found my passion and started learning everything about Web Development In 2017, I moved back to Spain and got a Diploma in Development of Web Applications. I also went through the EOI's Full Stack Web Development Bootcamp.`,
        // tslint:disable-next-line:max-line-length
        `I am truly passionate about the craft of programming and problem-solving, and love all things web. I specialize in the Front-End, ReactJS and NodeJS, but I can dive into Back-End, databases and DevOps easily. I am a JavaScript/TypeScript advocate but I have dabbled with Java SE/EE and PHP in the past.`,
        // tslint:disable-next-line:max-line-length
        `When I'm not building websites, going through CodeWars or promoting OSS -I like indie games, cooking, and playing pool. Oh, also I\'m a dog lover and the proud son of Suka, a half a staffy half dalmatian dog.`
    ];
    @observable sectionSkills: string[][] = [
        ['HTML/CSS', 'JavaScript', 'TypeScript'],
        ['ReactJS', 'NodeJS', 'Java SE/EE'],
        ['SASS/SCSS', 'MySQL', 'Git'],
        ['Docker']
    ];
}

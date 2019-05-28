import { NavStore } from './NavStore';
import { LandingStore } from './LandingStore';
import { AboutStore } from './AboutStore';
import { WorkStore } from './WorkStore';

const stores = {
    navStore: new NavStore(),
    landingStore: new LandingStore(),
    aboutStore: new AboutStore(),
    workStore: new WorkStore()
};

export default stores;
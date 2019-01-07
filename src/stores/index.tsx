import { NavStore } from './NavStore';
import { LandingStore } from './LandingStore';
import { AboutStore } from './AboutStore';

const stores = {
    navStore: new NavStore(),
    landingStore: new LandingStore(),
    aboutStore: new AboutStore()
};

export default stores;
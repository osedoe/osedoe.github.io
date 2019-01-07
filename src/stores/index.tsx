import { LandingStore } from './LandingStore';
import { AboutStore } from './AboutStore';

const stores = {
    landingStore: new LandingStore(),
    aboutStore: new AboutStore()
};

export default stores;
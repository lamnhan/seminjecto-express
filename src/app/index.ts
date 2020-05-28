import {LibModule} from '../public-api';

export class App {
  private libModule: LibModule;

  constructor() {
    this.libModule = new LibModule();
  }

}

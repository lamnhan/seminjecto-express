import {Lib as LibModule} from '../lib/index';

export class App {
  private libModule: LibModule;

  constructor() {
    this.libModule = new LibModule();
  }

}

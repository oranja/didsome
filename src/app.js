import dict from 'dict';
import uuid from 'uuid';
import {Deed} from './deed';

export class App {
  constructor() {
    this.deeds = dict();

    this.reset();
  }

  addDeed() {
    let who = new Who(this.who);
    let deed = new Deed(this.cute, this.good, who, this.how);
    this.deeds.set(uuid(), deed);

    this.reset();
  }

  getDeed(id) {
    if (! this.deeds.has(id)) {
      return "bla";
    }
    return this.deeds.get(deed);
  }

  getDeeds() {
    deeds_array = [];
    this.deeds.forEach(function (deed, id) {
      deeds_array.push(deed);
    });
    return deeds_array;
  }

  reset() {
    this.cute = '';
    this.good = false;
    this.who = '';
    this.how = '';
  }
}

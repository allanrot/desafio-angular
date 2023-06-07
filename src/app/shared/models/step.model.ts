export class Step {
  order: number = 0;
  name: string = '';
  active: boolean = false;

  constructor(object = {}) {
    Object.assign(this, object);
  }
}

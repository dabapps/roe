declare module 'jsdom' {

  export class JSDOM extends Document {
    public window: Window;
    constructor (markup?: string, config?: any);
  }

}

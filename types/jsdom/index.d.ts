declare module 'jsdom' {

  export declare class JSDOM extends Document {
    public window: Window;
    constructor (markup?: string, config?: any);
  }

}

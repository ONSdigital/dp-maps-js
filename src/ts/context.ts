
 export type Context = { hasMoved: boolean };

 export class MapState {
   public context: Context;
    constructor() {
        this.context = {
            hasMoved: false,
        };
    }

    public update(val: {[k: string]: any}): void {
        this.context = {
            ...this.context,
             ...val,
        };
    }
}

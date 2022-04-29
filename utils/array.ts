declare global {
  interface Array<T = any> {
    mapEach<U = any, V = any>(
      callbackfn: (value: U, index: number, array: U[]) => V,
      thisArg?: any
    ): T[];
    concatLeft(...args: T[]): T[];
    chain<U = any>(callbackfn: (value: T[]) => U[]): U[];
    cast<U = any>(): U[];
  }
}

Array.prototype.cast = function <U = any>() {
  return this.map((item) => item as U);
};

Array.prototype.mapEach = function (callbackfn, thisArg) {
  return this.map((item: any[]) => item.map(callbackfn), thisArg);
};

Array.prototype.concatLeft = function (...args) {
  return args.concat(this);
};

Array.prototype.chain = function (callbackfn) {
  return callbackfn(this);
};

export {};

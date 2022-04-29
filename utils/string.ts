declare global {
  interface String {
    truncate: (max: number) => string;
    capitalize: () => string;
    concatLeft: (str: string) => string;
  }
}

String.prototype.truncate = function (max: number): string {
  if (this.length < max) {
    return this.toString();
  }
  return this.substring(0, max) + "...";
};

String.prototype.capitalize = function (): string {
  if (this.length === 0) {
    return "";
  }
  if (this.length === 1) {
    return this.toUpperCase();
  }
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.concatLeft = function (str: string): string {
  return str + this.toString();
};

export {};

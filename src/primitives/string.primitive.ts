export class StringPrimitive {
  private readonly string: string;

  constructor(string: string) {
    this.string = string;
  }

  getValue(): string {
    return this.string;
  }
}

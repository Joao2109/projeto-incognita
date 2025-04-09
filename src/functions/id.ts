export class ID {
  static generateText() {
    return Math.random().toString(36).substring(2, 9);
  }
  static generateNumber() {
    return Number(Math.random().toString().substring(2, 9));
  }
}

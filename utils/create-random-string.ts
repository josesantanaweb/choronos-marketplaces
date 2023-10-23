export default function createRandomString(): string {
  return (+new Date).toString(36).slice(-5);
}

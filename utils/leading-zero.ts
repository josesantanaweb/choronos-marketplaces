export const leadingZero = (num: number, size: number) => {

  let stringNumber = num.toString();

  while (stringNumber.length < size) stringNumber = "0" + stringNumber;

  return stringNumber;
}

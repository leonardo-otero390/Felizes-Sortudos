function numbersSum(number: Number): Number {
  const numbersArray = number.toString().split('');
  return numbersArray.reduce((acc, curr) => acc + Number(curr) ** 2, 0);
}

function isHappy(number: Number): Boolean {
  let candidate = number;
  for (let i = 0; i < 100; i++) {
    const sum = numbersSum(candidate);
    if (sum === 1) {
      return true;
    }
    candidate = sum;
  }
  return false;
}

function buildArray(number: Number): Number[] {
  const result = [];
  for (let index = 1; index <= number; index++) {
    result.push(index);
  }
  return result;
}

function isLucky(number: Number): Boolean {
  let array = buildArray(number);
  array = array.filter((item) => Number(item) % 2 !== 0);
  if (!array.includes(number)) return false;
  let position = 1;
  while (array.length > 1 && position < array.length) {
    const multiplyer = Number(array[position]);
    array = array.filter((item, index) => (index + 1) % multiplyer !== 0);
    if (!array.includes(number)) return false;
    position++;
  }
  return true;
}

export default function app(number: Number): String {
  const happy = isHappy(number) ? 'Feliz' : 'Não-Feliz';
  const lucky = isLucky(number) ? 'Sortudo' : 'Não-Sortudo';

  return `Número ${lucky} e ${happy}.`;
}

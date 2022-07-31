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

export default function app(number: Number): String {
  const happy = isHappy(number) ? 'Feliz' : 'Não-Feliz';

  return `Número Sortudo e ${happy}.`;
}

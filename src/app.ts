class LuckyHappyNumber {
  number: Number;

  constructor(number: Number) {
    this.number = number;
  }

  public isHappy(): Boolean {
    function numbersSum(num: Number): Number {
      const numbersArray = num.toString().split('');
      return numbersArray.reduce((acc, curr) => acc + Number(curr) ** 2, 0);
    }

    let candidate = this.number;
    for (let i = 0; i < 100; i++) {
      const sum = numbersSum(candidate);
      if (sum === 1) {
        return true;
      }
      candidate = sum;
    }
    return false;
  }

  public isLucky(): Boolean {
    function buildArray(number: Number): Number[] {
      const result = [];
      for (let index = 1; index <= number; index++) {
        result.push(index);
      }
      return result;
    }

    let array = buildArray(this.number);
    array = array.filter((item) => Number(item) % 2 !== 0);
    if (!array.includes(this.number)) return false;

    let position = 1;
    while (array.length > 1 && position < array.length) {
      const multiplyer = Number(array[position]);
      array = array.filter((item, index) => (index + 1) % multiplyer !== 0);
      if (!array.includes(this.number)) return false;
      position++;
    }
    return true;
  }

  public getMessage(): String {
    const happy = this.isHappy() ? 'Feliz' : 'Não-Feliz';
    const lucky = this.isLucky() ? 'Sortudo' : 'Não-Sortudo';

    return `Número ${lucky} e ${happy}.`;
  }
}

export default function app(number: Number): String {
  const result = new LuckyHappyNumber(number);
  const happy = result.isHappy() ? 'Feliz' : 'Não-Feliz';
  const lucky = result.isLucky() ? 'Sortudo' : 'Não-Sortudo';

  return `Número ${lucky} e ${happy}.`;
}

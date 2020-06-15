interface IRequest {
  num: number;
  workWith?: 'numbers' | 'strings';
}

function digitalRootWithNumbers(num: number): number {
  let answer = num;

  const numberMagnitude = Math.floor(Math.log(num) / Math.log(10));

  if (numberMagnitude > 0) {
    const normalDiv = num / 10 ** numberMagnitude;

    if (Number.isInteger(normalDiv)) {
      answer = normalDiv;
    } else {
      answer = Math.floor(normalDiv);
      answer += digitalRootWithNumbers(num % 10 ** numberMagnitude);
    }
  }

  return answer >= 10 ? digitalRootWithNumbers(answer) : answer;
}

function digitalRootWithStrings(num: number): number {
  let answer = 0;

  const parts = num.toString().split('');

  for (let i = 0; i < parts.length; i += 1) {
    answer += Number(parts[i]);
  }

  return answer >= 10 ? digitalRootWithStrings(answer) : answer;
}

export default ({ num, workWith = 'numbers' }: IRequest): number => {
  switch (workWith) {
    case 'numbers':
      return digitalRootWithNumbers(num);
    case 'strings':
      return digitalRootWithStrings(num);
    default:
      return num;
  }
};

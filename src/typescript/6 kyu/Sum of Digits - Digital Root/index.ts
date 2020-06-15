const digitalRoot = (num: number): number => {
  let answer = num;

  const numberMagnitude = Math.floor(Math.log(num) / Math.log(10));

  if (numberMagnitude > 0) {
    // Math.pow(10, numberMagnitude)
    const normalDiv = num / 10 ** numberMagnitude;

    if (Number.isInteger(normalDiv)) {
      answer = normalDiv;
    } else {
      answer = Math.floor(normalDiv);
      answer += digitalRoot(num % 10 ** numberMagnitude);
    }
  }

  return answer >= 10 ? digitalRoot(answer) : answer;
};

export default digitalRoot;

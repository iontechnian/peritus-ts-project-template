const test = 1;
setInterval(() => {
  console.log(test);
}, 500);

[].map(arr => {});

function callTest(
  param1: number,
  param2: string,
  param3: any,
  param4?: boolean,
  param5?: boolean,
  param6?: boolean,
) {
  console.log('hello');
}

callTest(1, 'a', {});


const includesStr = (values, str) => {
  console.log('data---', values)
  return values.map(function (value) {
    console.log("xxx",value)
    return String(value);
  }).find(function (value) {
    console.log("xxx",value)
    return value.includes(str);
  });
}

export const filter = {
  arrayOfObject: (data, keyWord) => data.filter(function(item) {
    return includesStr(Object.values(item), keyWord);
  })
}


function counter(i) {
  return function () {
    console.log(i++);
  };
}

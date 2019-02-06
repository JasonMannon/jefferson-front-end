export default (array, value) => {
  const filteredArray = array.filter((element) => {
    return element.id !== value.id;
  });

  return filteredArray;
};

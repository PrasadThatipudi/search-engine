const searchByStart = (array, start) =>
  array.filter((item) => item.toLowerCase().startsWith(start.toLowerCase()));

export { searchByStart };

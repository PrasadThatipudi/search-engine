const searchByStart = (array: string[], start: string) =>
  array.filter((item) => item.toLowerCase().startsWith(start.toLowerCase()));

export { searchByStart };

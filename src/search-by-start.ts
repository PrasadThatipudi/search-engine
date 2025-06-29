const searchByStart = (items: string[], start: string) =>
  items.filter((item) => item.toLowerCase().startsWith(start.toLowerCase()));

export { searchByStart };

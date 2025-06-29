const searchByWordStart = (items: string[], start: string): string[] =>
  items.filter((item) => item.toLowerCase().startsWith(start.toLowerCase()));

export { searchByWordStart };

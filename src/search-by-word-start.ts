const searchByWordStart = (items: string[], start: string): string[] => {
  const startsWith = new RegExp(`${start}`, "i");

  return items.filter((item) => startsWith.test(item));
};

export { searchByWordStart };

const searchByStart = (items: string[], start: string) => {
  const startsWith = new RegExp(`^${start}`, "i");

  return items.filter((item) => startsWith.test(item));
};

export { searchByStart };

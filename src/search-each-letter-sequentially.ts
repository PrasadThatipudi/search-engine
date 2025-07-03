const searchEachLetterSequentially = (
  items: string[],
  search: string,
): string[] => {
  const searchPattern = `^.*?${search.split("").join(".*?")}`;
  const searchSequentially = new RegExp(searchPattern, "i");

  return items.filter((item) => searchSequentially.test(item));
};

export { searchEachLetterSequentially };

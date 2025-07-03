import { describe, it } from "@std/testing/bdd";
import { searchEachLetterSequentially } from "../src/search-each-letter-sequentially.ts";
import { assertEquals } from "@std/assert";

describe("searchEachLetterSequentially", () => {
  it("should return empty list when no letters are found", () => {
    const items = ["apple", "banana", "cherry"];
    const search = "xyz";

    assertEquals(searchEachLetterSequentially(items, search), []);
  });

  it("should return items which have the given letter in it", () => {
    const items = ["apple", "banana", "cherry"];
    const search = "a";

    assertEquals(searchEachLetterSequentially(items, search), [
      "apple",
      "banana",
    ]);
  });

  it("should return items which have the given letter in it, case insensitive", () => {
    const items = ["Apple", "Banana", "Cherry"];
    const search = "a";

    assertEquals(searchEachLetterSequentially(items, search), [
      "Apple",
      "Banana",
    ]);
  });

  it("should return items which have the given letters in it, in order", () => {
    const items = ["apple", "banana", "cherry"];
    const search = "an";

    assertEquals(searchEachLetterSequentially(items, search), ["banana"]);
  });

  it("should return items which have the given letters in it, in order, case insensitive", () => {
    const items = ["Apple", "Banana", "Cherry"];
    const search = "An";

    assertEquals(searchEachLetterSequentially(items, search), ["Banana"]);
  });

  it("should return items which have the given letters in it, in order, can have other letters in between", () => {
    const items = ["apple", "banana", "cherry"];
    const search = "al";

    assertEquals(searchEachLetterSequentially(items, search), ["apple"]);
  });

  it("should return items which have the given letters in it, in order, can have other letters in between, term can have multiple letters", () => {
    const items = ["pineapple", "banana", "cherry"];
    const search = "pape";

    assertEquals(searchEachLetterSequentially(items, search), ["pineapple"]);
  });
});

import { describe, it } from "@std/testing/bdd";
import { searchByWordStart } from "../src/search-by-word-start.ts";
import { assertEquals } from "@std/assert/equals";

describe("searchByWordStart", () => {
  it("should return an empty array for an empty array", () => {
    const result = searchByWordStart([], "test");
    assertEquals(result, []);
  });

  it("should return an empty array if no items start with the given string", () => {
    const result = searchByWordStart(["apple", "banana", "cherry"], "test");
    assertEquals(result, []);
  });

  it("should return items that start with the given string", () => {
    const result = searchByWordStart(["test1", "test2", "example"], "test");
    assertEquals(result, ["test1", "test2"]);
  });

  it("should be case-insensitive", () => {
    const result1 = searchByWordStart(["Test1", "test2", "example"], "test");
    const result2 = searchByWordStart(["Test1", "test2", "example"], "Test");

    assertEquals(result1, ["Test1", "test2"]);
    assertEquals(result2, ["Test1", "test2"]);
  });

  it("should return items that any word starts with the given string", () => {
    const result = searchByWordStart(
      ["test1 example", "example test2", "test3"],
      "test",
    );
    assertEquals(result, ["test1 example", "example test2", "test3"]);
  });
});

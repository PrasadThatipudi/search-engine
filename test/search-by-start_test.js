import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { searchByStart } from "../src/search-by-start.js";

describe("searchByStart", () => {
  it("should return an empty array for an empty array", () => {
    const result = searchByStart([], "test");
    assertEquals(result, []);
  });

  it("should return an empty array if no items start with the given string", () => {
    const result = searchByStart(["apple", "banana", "cherry"], "test");
    assertEquals(result, []);
  });

  it("should return items that start with the given string", () => {
    const result = searchByStart(["test1", "test2", "example"], "test");
    assertEquals(result, ["test1", "test2"]);
  });

  it("should be case-insensitive", () => {
    const result1 = searchByStart(["Test1", "test2", "example"], "test");
    const result2 = searchByStart(["Test1", "test2", "example"], "Test");

    assertEquals(result1, ["Test1", "test2"]);
    assertEquals(result2, ["Test1", "test2"]);
  });
});

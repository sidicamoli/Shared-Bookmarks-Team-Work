import test from "node:test";
import assert from "node:assert";
import { sortBookmarksByDate } from "./utils.js";

test("Sorts newest bookmarks first", () => {
  const bookmarks = [
    { title: "Old", createdAt: "2023-01-01T10:00:00Z" },
    { title: "New", createdAt: "2024-01-01T10:00:00Z" },
  ];

  const sorted = sortBookmarksByDate(bookmarks);

  assert.equal(sorted[0].title, "New");
  assert.equal(sorted[1].title, "Old");
});

test("Sorting does not mutate original array", () => {
  const bookmarks = [{ createdAt: "2023-01-01T00:00:00Z" }];
  const copy = [...bookmarks];

  sortBookmarksByDate(bookmarks);

  assert.deepEqual(bookmarks, copy);
});

test("Handles same-day different times", () => {
  const bookmarks = [
    { createdAt: "2024-01-01T10:00:00Z" },
    { createdAt: "2024-01-01T12:00:00Z" },
  ];

  const sorted = sortBookmarksByDate(bookmarks);

  assert.equal(sorted[0].createdAt, "2024-01-01T12:00:00Z");
});

test("Handles empty array", () => {
  assert.deepEqual(sortBookmarksByDate([]), []);
});

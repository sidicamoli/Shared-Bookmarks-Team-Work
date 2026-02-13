import { getUserIds, getData, setData } from "./storage.js";
import { sortBookmarksByDate, fixUrl } from "./utils.js";

const userSelect = document.getElementById("user");
const bookmarkList = document.getElementById("bookmark-list");
const form = document.getElementById("bookmark-form");
const urlInput = document.getElementById("url");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");

let currentUser = "";

function populateUserDropdown() {
  getUserIds().forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = `User ${id}`;
    userSelect.appendChild(option);
  });
}

function showBookmarks(userId) {
  bookmarkList.innerHTML = "";

  if (!userId) {
    return;
  }

  const data = getData(userId) || [];

  if (data.length === 0) {
    bookmarkList.innerHTML = '<li role="status">No bookmarks yet</li>';
    return;
  }

  const sorted = sortBookmarksByDate(data);

  sorted.forEach((bookmark) => {
    const li = document.createElement("li");

    const likes = Number(bookmark.likes || 0);

    const link = document.createElement("a");
    link.href = bookmark.url;
    link.textContent = bookmark.title;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const desc = document.createElement("p");
    desc.textContent = bookmark.description;

    const date = document.createElement("small");
    date.textContent = new Date(bookmark.createdAt).toLocaleString();

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.textContent = "Copy URL";
    copyBtn.setAttribute("aria-label", "Copy bookmark URL");

    copyBtn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(bookmark.url)
        .then(() => {
          copyBtn.textContent = "Copied";
          setTimeout(() => {
            copyBtn.textContent = "Copy URL";
          }, 1000);
        })
        .catch((error) => {
          console.log("Copy failed:", error);
        });
    });

    const likeBtn = document.createElement("button");
    likeBtn.type = "button";
    likeBtn.textContent = `Like (${likes})`;
    likeBtn.setAttribute("aria-label", "Like this bookmark");

    likeBtn.addEventListener("click", () => {
      const bookmarks = getData(userId) || [];

      const updated = bookmarks.map((b) => {
        if (b.createdAt === bookmark.createdAt) {
          return { ...b, likes: Number(b.likes || 0) + 1 };
        }
        return b;
      });

      setData(userId, updated);
      showBookmarks(userId);
    });

    li.append(link, desc, date, copyBtn, likeBtn);
    bookmarkList.appendChild(li);
  });
}

userSelect.addEventListener("change", () => {
  currentUser = userSelect.value;
  showBookmarks(currentUser);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!currentUser) {
    alert("Please select a user first");
    return;
  }

  const fixedUrl = fixUrl(urlInput.value);

  if (!fixedUrl) {
    alert("Invalid URL. Please check the address.");
    urlInput.focus();
    return;
  }

  const newBookmark = {
    url: fixedUrl,
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    createdAt: new Date().toISOString(),
    likes: 0,
  };

  const existing = getData(currentUser) || [];
  existing.push(newBookmark);
  setData(currentUser, existing);

  form.reset();
  showBookmarks(currentUser);
});

populateUserDropdown();
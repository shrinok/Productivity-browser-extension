import React, { useState, useEffect } from "react";

const BookmarkOrganizer = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [newBookmark, setNewBookmark] = useState("");

  useEffect(() => {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      setBookmarks(bookmarkTreeNodes[0].children[0].children);
    });
  }, []);

  const addBookmark = () => {
    chrome.bookmarks.create({ title: newBookmark, url: newBookmark });
    setNewBookmark("");
  };

  const deleteBookmark = (id) => {
    chrome.bookmarks.remove(id);
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <div className="bookmark-organizer">
      <h2>Bookmark Organizer</h2>
      <input
        type="text"
        value={newBookmark}
        onChange={(e) => setNewBookmark(e.target.value)}
        placeholder="Add a new bookmark"
      />
      <button onClick={addBookmark}>Add Bookmark</button>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            {bookmark.title}{" "}
            <button onClick={() => deleteBookmark(bookmark.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkOrganizer;

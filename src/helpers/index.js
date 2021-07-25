export function getNextPath(maxLen, bookId, chapterId) {
  const nextChapter = Number(chapterId) + 1;

  return nextChapter > maxLen
    ? "/"
    : `/books/${bookId}/chapters/${nextChapter}`;
}

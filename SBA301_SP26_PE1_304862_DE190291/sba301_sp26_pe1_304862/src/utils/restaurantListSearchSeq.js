/** Số tăng mỗi lần gọi search list — không dùng Abort, chỉ bỏ qua response cũ. */
let latestSeq = 0;

export function beginRestaurantListSearch() {
  return ++latestSeq;
}

export function isLatestRestaurantListSearch(seq) {
  return seq === latestSeq;
}

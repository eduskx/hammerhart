import HeartFilled from "./HeartFilled.svg";
import Heart from "./Heart.svg";

export default function BookmarkButton({ $onBookmark, isFavorite }) {
  return (
    <button onClick={$onBookmark}>
      {isFavorite ? <HeartFilled width={50} /> : <Heart width={50} />}
    </button>
  );
}

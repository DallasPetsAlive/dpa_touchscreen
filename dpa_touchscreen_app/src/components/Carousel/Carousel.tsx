import classNames from "classnames";
import { FC, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface props {
  cards: Array<JSX.Element>;
  size?: string;
}

export const Carousel: FC<props> = (props) => {
  const { cards, size = "" } = props;
  const [current, setCurrent] = useState(0);

  const isAtEnd = current === cards.length - 1;
  const isAtStart = current === 0;

  const handleSwipe = (direction: "left" | "right") => {
    console.log("swiped");
    if (direction === "left") {
      if (isAtEnd) setCurrent(0);
      else setCurrent(current + 1);
    } else {
      if (isAtStart) setCurrent(cards.length - 1);
      else setCurrent(current - 1);
    }
  };

  const handleClickLeft = () => {
    if (isAtStart) setCurrent(cards.length - 1);
    else setCurrent(current - 1);
  };

  const handleClickRight = () => {
    if (isAtEnd) setCurrent(0);
    else setCurrent(current + 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  if (cards.length === 0) return null;

  const leftCard = isAtStart ? cards[cards.length - 1] : cards[current - 1];
  const rightCard = isAtEnd ? cards[0] : cards[current + 1];
  const currentCard = cards[current];

  return (
    <div className="carousel" {...handlers}>
      <div className={classNames("carousel-left", `carousel-left-${size}`)}>
        <div className="carousel-left-card" onClick={handleClickLeft}>{leftCard}</div>
      </div>
      <div className="carousel-current">
        <div className="carousel-current-card" draggable>{currentCard}</div>
      </div>
      <div className={classNames("carousel-right", `carousel-right-${size}`)}>
        <div className="carousel-right-card" onClick={handleClickRight}>{rightCard}</div>
      </div>
    </div>
  );
};
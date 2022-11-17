import { getImgClearName } from "../utils/functions";

export interface card {
  pairId: number;
  isOpen: boolean;
  text: string;
  imgSrc: string;
  onClick?: () => void;
}

const CardImgModel = require.context(
  "../assets/img/cards",
  false,
  /\.(png|jpe?g|svg)$/
);

export const cards: card[] = CardImgModel.keys().map((item, index) => {
  return {
    pairId: index,
    isOpen: false,
    imgSrc: CardImgModel(item),
    text: getImgClearName(CardImgModel.keys()[index]),
  };
});

// console.log(cards);

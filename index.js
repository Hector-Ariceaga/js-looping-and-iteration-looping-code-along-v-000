const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGift(gifts) {
  for (let i = 0; i < gifts.length; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);
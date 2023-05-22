function area(side1, side2, side3) {
  const perimeter = (side1 + side2 + side3) / 2;

  const areas = Math.sqrt(
    perimeter *
      ((perimeter - side1) * (perimeter * side2) * (perimeter - side3))
  );
  return areas;
}

const result = area(5, 6, 7);
console.log(result);

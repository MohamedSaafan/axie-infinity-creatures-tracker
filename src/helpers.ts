export const isIntersect = (axieString: string, anotherString: string) => {
  let shouldContains = false;

  if (axieString === anotherString && axieString === "undefined") {
    shouldContains = false;
    return shouldContains;
  }
  if (axieString && anotherString) {
    let axieStringList = axieString.split(",");
    axieStringList = axieStringList.map((string) => string.trim());
    let anotherSringList = anotherString.split(",");
    anotherSringList = anotherSringList.map((string) => string.trim());

    anotherSringList.forEach((anotherString) => {
      axieStringList.forEach((axieString) => {
        if (anotherString === axieString) shouldContains = true;
      });
    });
  }

  return shouldContains;
};

export const sortByCreatureBreedType = (axies: AxieType[]) => {
  axies.sort((a, b) => {
    return a.breed_type.localeCompare(b.breed_type);
  });
};

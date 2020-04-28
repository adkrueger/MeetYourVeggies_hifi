alts = {
  chicken: [
    "Quorn Chick'n Patties",
    "Gardein Chick'n Tenders",
    "Tofu",
    "Seitan",
    "Tempeh",
    "TVP (Textured Vegetable Protein)",
    "Beans or Lentils",
    "Jackfruit",
  ],
  steak: [
    "Impossible Meat",
    "Beyond Meat",
    "Seitan",
    "Tofu",
    "TVP (Textured Vegetable Protein)",
    "Tempeh",
  ],
  pork: [
    "Jackfruit",
    "Impossible Meat",
    "Oumph! Pieces",
    "Oumph! Chef Style",
    "Tofu",
    "Seitan",
  ],
};

function getRandomAlt(keyword) {
  let contained = false;
  Object.keys(alts).forEach((key) => {
    if (key === keyword) {
      contained = true;
    }
  });

  if (contained) {
    let choice =
      alts[keyword][Math.floor(Math.random() * alts[keyword].length)];
    console.log(choice);
  } else {
    console.log("not found");
  }
}

function searchAlts(keyword) {
  keyword = keyword.toLowerCase();

  let contained = false;
  Object.keys(alts).forEach((key) => {
    if (key === keyword) {
      contained = true;
    }
  });

  let choice = [];
  if (contained) {
    choice = alts[keyword];
  } else {
    choice = ["No results found for query '" + keyword + "'"];
  }

  result = "";
  choice.forEach((i) => {
    result += "<li>" + i + "</li>";
  });

  document.getElementById("results").innerHTML = result;
}

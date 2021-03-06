const alts = {
  chicken: [
    "Quorn Chickn Patties",
    "Gardein Chickn Tenders",
    "Tofu",
    "Beans or Lentils",
  ],
  steak: [
    "Impossible Meat",
    "Beyond Meat",
    "Seitan",
    "TVP (Textured Vegetable Protein)",
  ],
  beef: [
    "Impossible Meat",
    "Beyond Meat",
    "Seitan",
    "TVP (Textured Vegetable Protein)",
  ],
  pork: ["Jackfruit", "Oumph! Pieces", "Oumph! Chef Style", "Tempeh"],
  milk: ["almond milk", "soy milk", "rice milk", "cashew milk"],
  yogurt: [
    "So Delicious Coconut Milk Yogurt",
    "Stonyfield Osoy Yogurt",
    "Silk Almond Milk Yogurt",
    "daiya Dairy and Soy Free Greek Yogurt",
  ],
  egg: [
    "Follow Your Heart VeganEgg",
    "Orgran Vegan Easy Egg",
    "Firm Tofu (for scrambling)",
  ],
  eggs: [
    "Follow Your Heart VeganEgg",
    "Orgran Vegan Easy Egg",
    "Firm Tofu (for scrambling)",
  ],
  "ice cream": [
    "So Delicious Ice Cream",
    "sorbet",
    "Ben & Jerrys Non-Dairy Pints",
    "Daiya Chocolate Fudge Crunch dessert bars",
    "Tofutti Premium Pints",
    "Haagen-Dazs Non-Dairy Ice Cream",
  ],
};

let itemMap = [];

/**
 * returns a random alternative from the list based on the
 * keyword, or null if the keyword is not in the list
 */
function getRandomAlt(keyword) {
  keyword = keyword.toLowerCase().trim();

  let contained = false;
  Object.keys(alts).forEach((key) => {
    if (key === keyword) {
      contained = true;
    }
  });

  if (contained) {
    return alts[keyword][Math.floor(Math.random() * alts[keyword].length)];
  } else {
    return null;
  }
}

/**
 * returns the list associated with a keyword
 */
function searchAlts(keyword) {
  keyword = keyword.toLowerCase().trim();

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

/**
 * sets up the #output field by taking in input and changing each
 * value for its plant based alternative
 */
function setupOutput(listInput) {
  // <input type="checkbox" id="broccoli" /><span>Broccoli</span><br />
  let splitInput = !Array.isArray(listInput)
    ? listInput.split("\n")
    : listInput;

  let result = "";
  let counter = 0;
  splitInput.forEach((i) => {
    i = i.trim();
    if (i !== "") {
      itemMap[counter] = i.toLowerCase().trim();
      let item = getRandomAlt(i);
      item = item === null ? i : item;
      result +=
        "<input type='checkbox' class='output_item' id='" +
        item +
        "' /><span>" +
        item +
        "</span><br />";
      counter++;
    }
  });

  document.getElementById("output_title").style.display = "block";
  document.getElementById("shuffle_btn").style.display = "inline-block";
  document.getElementById("change_btn").style.display = "inline-block";

  document.getElementById("output").innerHTML = result;
}

function shuffleOutput() {
  setupOutput(itemMap);
}

function changeOutput() {
  let listOfItems = document.getElementsByClassName("output_item");

  let result = "";
  for (let i = 0; i < listOfItems.length; i++) {
    if (!listOfItems[i].checked) {
      result +=
        "<input type='checkbox' class='output_item' id='" +
        listOfItems[i].id +
        "' /><span>" +
        listOfItems[i].id +
        "</span><br />";
    } else {
      let item = getRandomAlt(itemMap[i]);

      if (item === null) {
        item = listOfItems[i].id;
      }
      result +=
        "<input type='checkbox' class='output_item' id='" +
        item +
        "' checked /><span>" +
        item +
        "</span><br />";
    }
  }

  document.getElementById("output").innerHTML = result;
}

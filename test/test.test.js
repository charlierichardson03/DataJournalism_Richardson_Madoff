const data = require("../data/data.json")

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

test('No empty year objects', () => {
  for (let i = 0; i < data.length; i++) {
    expect(data[i]).not.toBe("")
  }
});

test('Correct number of industries in each year', () => {
  expect(data.length).toBe(410)
});


test('Correct number of months in each year', () => {
  for (let i = 0; i < data.length; i++) {
    expect(Object.keys(data[i].month).length).toBe(12);
  }
});

test('No undefined values', () => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < months.length; j++) {
      expect(data[i].month[months[j]]).not.toBe(undefined);
    }
  }
});

test('No commas in the months numbers', () => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < months.length; j++) {
      let num = data[1].month[months[j]];
      let strang = num.toString();
      let strang2 = strang.split("");
      for (let z = 0; z < strang2.length; z++) {
        expect(strang2[z]).not.toBe(",");
      }
    }
  }
});

test('No spaces in the months numbers', () => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < months.length; j++) {
      let num = data[1].month[months[j]];
      let strang = num.toString();
      let strang2 = strang.split("");
      for (let z = 0; z < strang2.length; z++) {
        expect(strang2[z]).not.toBe(" ");
      }
    }
  }
});

test('No spaces in the annual numbers', () => {
  for (let i = 0; i < data.length; i++) {
    let annuals = data[i]["annual"].toString();
    for (let z = 0; z < annuals.length; z++) {
      expect(annuals[z]).not.toBe(" ");
    }
  }
});

test('No commas in the annual numbers', () => {
  for (let i = 0; i < data.length; i++) {
    let annuals = data[i]["annual"].toString();
    for (let z = 0; z < annuals.length; z++) {
      expect(annuals[z]).not.toBe(",");
    }
  }
});


test('First letter of each industry is capitalized', () => {
  for (let i = 0; i < data.length; i++) {
    let industryName = data[i]["industry"];
    let firstLetter = industryName.charAt(0);
    expect(firstLetter.toUpperCase()).toBe(firstLetter);
  }
});

test('No commas in the year', () => {
  for (let i = 0; i < data.length; i++) {
    let years = data[i]["year"].toString();
    for (let z = 0; z < years.length; z++) {
      expect(years[z]).not.toBe(",");
    }
  }
});

test('No spaces in the year', () => {
  for (let i = 0; i < data.length; i++) {
    let years = data[i]["year"].toString();
    for (let z = 0; z < years.length; z++) {
      expect(years[z]).not.toBe(" ");
    }
  }
});

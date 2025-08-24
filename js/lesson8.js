const names = ['Mango', 'Kiwi', 'Poly', 'Sara'];
let string = " ";
for (let i = 0; i <= names.length; i += 1) {
    string += names;
    break
}
console.log(string);

const names2 = ["Mango", "Kiwi", "Poly", "Sara"];
const copy = names2.join(",");
console.log(copy);


const cards = [
    'Card-1',
    'Card-2',
    'Card-3',
    'Card-4',
    'Card-5',
]

const copy2 = cards.slice()
const cardToRemove = "Card-3";
const index = copy2.indexOf(cardToRemove);
copy2.splice(index, 1);
const cardToAdd = "Card-6";
copy2.push(cardToAdd);
copy2.splice(2, 0, cardToRemove)
console.log(copy2);


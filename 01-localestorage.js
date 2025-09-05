const LS_Key = "Array of names";
const names = ["Alise", "Kate", "Emma"];

localStorage.setItem(LS_Key, JSON.stringify(names));

const value = JSON.parse(localStorage.getItem(LS_Key));
console.log(value);

// localStorage.removeItem(LS_Key);
// localStorage.clear();

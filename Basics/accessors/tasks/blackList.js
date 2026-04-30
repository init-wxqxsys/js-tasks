let blackList = {
  list: [],
  set addName(name) {
    if (!name || this.list.some((currentName) => currentName === name)) return;

    this.list.push(name);
  },
  get formattedList() {
    return this.list
      .map((name) => name.toUpperCase())
      .toSorted()
      .join(", ");
  },
};

console.log(blackList.list);

blackList.addName = "Andrey";

console.log(blackList.formattedList);

blackList.addName = "Andrey";
blackList.addName = "German";
blackList.addName = "Alice";

console.log(blackList.formattedList);

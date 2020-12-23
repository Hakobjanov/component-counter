import Counter from "./counter.js";
import dataClerk from "./dataClerk.js";

const counter = new Counter(dataClerk.getCount());
counter.appendTo(document.body);
counter.addEventListener("change", () => {
  dataClerk.setCount(counter.count);
});

const dataClerk = {
  getCount: () => +localStorage.count || 0,
  setCount: (count) => (localStorage.count = count),
};

export default dataClerk;

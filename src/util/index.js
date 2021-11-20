export const isFalsy = (value) => (value === 0 ? false : !value);
export const clearObject = (object) => {
  const ret = { ...object };
  Object.keys(ret).forEach((key) => {
    if (isFalsy(ret[key])) {
      delete ret[key];
    }
  });
  return ret;
};

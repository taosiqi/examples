export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const clearObject = <T>(object: T) => {
  const ret = { ...object };
  for (const retKey in ret) {
    if (isFalsy(ret[retKey])) {
      delete ret[retKey];
    }
  }
  return ret;
};

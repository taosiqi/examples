interface clearObjectType {
  [key: string]: value;
}
type value = string | number | undefined | null;
export const isFalsy = (value: value) => (value === 0 ? false : !value);
export const clearObject = (object: clearObjectType) => {
  const ret = { ...object };
  Object.keys(ret).forEach((key) => {
    if (isFalsy(ret[key])) {
      delete ret[key];
    }
  });
  return ret;
};

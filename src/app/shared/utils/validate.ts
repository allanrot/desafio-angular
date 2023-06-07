export const validate = {
  emptyObject(obj: object) {
    if (obj === null || obj === undefined) return true;
    return Object.keys(obj).length === 0;
  },
};

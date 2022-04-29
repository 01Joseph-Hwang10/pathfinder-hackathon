export const undefinedIfFalsy = (condition: any, value: any): any => {
  return !!condition && value ? value : undefined;
};

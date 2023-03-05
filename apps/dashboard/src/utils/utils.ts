export const trim = (value: string): string => {
  if (value && value.trim) {
    return value.trim();
  } else {
    return value;
  }
};

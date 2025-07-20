export interface Option {
  label: string;
  value: string;
}

export function enumToOptions<T extends Record<string, string>>(
  enumObj: T
): Option[] {
  return Object.entries(enumObj).map(([key, value]) => ({
    label: value,
    value: key,
  }));
}

export default function filterObject(obj: Record<any, any>) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      (entry) => entry[1] !== null && entry[1] !== undefined,
    ),
  );
}

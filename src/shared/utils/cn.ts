import clsx from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx takes arrays, objects, and strings, and flattens them into a single string.
// twMerge takes that single string, looks at conflicting Tailwind classes (like p-4 vs p-2), and removes the duplicates.
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

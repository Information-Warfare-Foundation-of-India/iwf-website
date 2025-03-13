import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Safely get a parameter from useParams
 * @param params The params object from useParams
 * @param key The parameter key to get
 * @param defaultValue The default value to return if the parameter is not found
 * @returns The parameter value or the default value
 */
export function getParam<T extends string | number>(
  params: Record<string, string | string[]> | null | undefined,
  key: string,
  defaultValue: T
): T {
  if (!params) return defaultValue;
  const value = params[key];
  if (value === undefined) return defaultValue;
  
  // Handle string array (should be a single value in our case)
  const strValue = Array.isArray(value) ? value[0] : value;
  
  // Convert to number if the default value is a number
  if (typeof defaultValue === 'number') {
    const num = Number(strValue);
    return (isNaN(num) ? defaultValue : num) as T;
  }
  
  return strValue as T;
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
} 
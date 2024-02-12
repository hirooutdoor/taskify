import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// NOTE: デフォルトのtailwind-mergeの設定関数のため無視。
// eslint-disable-next-line func-style
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

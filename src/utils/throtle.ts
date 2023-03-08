type ThrottleFn = (...args: unknown[]) => void;

export function throttle<T extends ThrottleFn>(func: T, delay: number): T {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  const throttledFunction = function (this: unknown, ...args: Parameters<T>) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        timeoutId = null;
      }, delay);
    }
  } as T;

  return throttledFunction;
}

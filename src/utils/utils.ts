export function debounce<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
  delay = 300,
) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function (this: ThisParameterType<typeof fn>, ...args: Args): void {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

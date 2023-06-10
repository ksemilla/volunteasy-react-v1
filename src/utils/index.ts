export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const useCount = () => useState<number>("count", () => 0)
export const useColor = () => useState<string>("color", () => "pink")

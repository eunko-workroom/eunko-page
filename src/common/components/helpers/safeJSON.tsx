export function safeParseJSON(data: string, fallbackValue: any = null) {
  try {
    if (data && typeof data === "object") {
      return data;
    } else {
      return JSON.parse(data);
    }
  } catch {
    return fallbackValue;
  }
}

export function safeStringifyJSON(data: object, fallbackValue: any = null) {
  try {
    return JSON.stringify(data);
  } catch {
    return fallbackValue;
  }
}

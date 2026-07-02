declare const fbq:
  | ((type: string, event: string, params?: Record<string, unknown>) => void)
  | undefined;

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof fbq !== "undefined") {
    fbq("track", event, params);
  }
}

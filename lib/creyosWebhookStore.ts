export type CreyosWebhookEvent = {
  receivedAt: string;
  verified: boolean;
  payload: unknown;
};

// In-memory only — resets on server restart/redeploy. Fine for local testing,
// swap for a real datastore before relying on this in production.
const MAX_EVENTS = 20;
const events: CreyosWebhookEvent[] = [];

export function addWebhookEvent(event: CreyosWebhookEvent) {
  events.unshift(event);
  events.length = Math.min(events.length, MAX_EVENTS);
}

export function getWebhookEvents() {
  return events;
}

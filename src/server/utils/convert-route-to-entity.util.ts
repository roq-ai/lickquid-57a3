const mapping: Record<string, string> = {
  bookings: 'booking',
  organizations: 'organization',
  users: 'user',
  'washing-machines': 'washing_machine',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

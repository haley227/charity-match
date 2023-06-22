declare global{
  interface Window{
    optimizely: any;
    gtag: any;
  }
}

export const isBrowser = typeof window !== 'undefined';

if (isBrowser) window.optimizely = window.optimizely || [];

export const sendEvent = (eventName, tags = {}) => {
  if (!isBrowser) return;
  window.optimizely.push({
    type: 'event',
    eventName,
    tags,
  });
  window.gtag('event', eventName, {
    // 'event_label': 'none',
    // 'event_category': 'custom',
    non_interaction: true,
  });
};

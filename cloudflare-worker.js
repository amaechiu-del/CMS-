/**
 * ═══════════════════════════════════════════════════════════════
 * DOMISLINK DOMAIN PARKING - CLOUDFLARE WORKER
 * All parked domains redirect to https://domislink.com
 * ═══════════════════════════════════════════════════════════════
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to Cloudflare Dashboard → Workers & Pages
 * 2. Create a new Worker
 * 3. Paste this code
 * 4. Add routes for each parked domain:
 *    - domislink.ng/* → this worker
 *    - domislink.io/* → this worker
 *    - etc.
 * ═══════════════════════════════════════════════════════════════
 */

// List of all parked domains that should redirect to domislink.com
const PARKED_DOMAINS = [
  // Primary Brand
  'domislink.ng',
  'domislink.io',
  'domislink.ai',
  'domis.link',
  'getdomislink.com',
  
  // Hosting
  'domishost.com',
  'domiscloud.com',
  'hostdomis.com',
  'aihost.ng',
  
  // CMS
  'domiscms.com',
  'domisbuilder.com',
  'buildwithdomis.com',
  
  // Nigerian Market
  'domislink.com.ng',
  'nairahost.com',
  'hostnaija.com',
  
  // Creative/Branding
  'zeroeffort.host',
  'autopilothost.com',
  'aiwebhost.com',
  'hostmars.com',
  'mars.host',
  'tomars.io',
  'directstack.com',
  '99ai.host'
];

const TARGET_DOMAIN = 'https://domislink.com';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const hostname = url.hostname.replace(/^www\./, '');
  
  // Check if this domain should be redirected
  if (PARKED_DOMAINS.includes(hostname) || hostname.startsWith('www.')) {
    // Preserve the path and query string
    const targetUrl = TARGET_DOMAIN + url.pathname + url.search;
    
    // Return 301 permanent redirect
    return Response.redirect(targetUrl, 301);
  }
  
  // If not a parked domain, pass through (shouldn't happen if routes are set correctly)
  return fetch(request);
}

/**
 * ═══════════════════════════════════════════════════════════════
 * CLOUDFLARE PAGE RULES ALTERNATIVE (No Worker needed)
 * ═══════════════════════════════════════════════════════════════
 * 
 * For each domain, create a Page Rule:
 * 
 * URL: *domislink.ng/*
 * Setting: Forwarding URL (301 Permanent)
 * Destination: https://domislink.com/$2
 * 
 * Repeat for all domains.
 * ═══════════════════════════════════════════════════════════════
 */

const disposableEmailDomains = require('disposable-email-domains');
const wildcards = require('disposable-email-domains/wildcard.json');

export function isDisposableEmail(email) {
  const domain = email.split('@')[1];
  
  return disposableEmailDomains.includes(domain) ||
    wildcards.some(wildcard => domain.endsWith(wildcard));
  }
  
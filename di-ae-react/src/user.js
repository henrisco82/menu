/**
 * getEmail()
 * Returns the signed-in user's email.
 * Replace with a real session/auth lookup as needed.
 */
export function getEmail() {
  // TODO: sessionStorage.getItem('userEmail') or JWT parse
  return 'john.doe@dell.com';
}

/**
 * getInitials(email)
 * Derives up to 2 uppercase initials from an email address.
 *
 * Examples:
 *   john.doe@dell.com   → "JD"
 *   henry_unah@dell.com → "HU"
 *   alice@dell.com      → "A"
 */
export function getInitials(email) {
  if (!email || typeof email !== 'string') return '?';
  const local = email.split('@')[0];
  const words = local.split(/[._\-+]+/).filter(w => w.length > 0);
  const initials = words.slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return initials || email[0].toUpperCase();
}

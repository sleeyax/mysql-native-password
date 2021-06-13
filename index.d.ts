/**
 * Apply the password hashing algorithm introduced in MySQL 4.1, 
 * which is also used by the PASSWORD() SQL function. 
 * 
 * WARNING: This hashing algorithm is outdated and thus it is NOT recommended to use it for modern applications that require high password security.
 */
export function password(text: string): string;

/**
 * Alias of `password(text)` .
 */
export function PASSWORD(text: string): string;

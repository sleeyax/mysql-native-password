const crypto = require('crypto');

/**
 * Get SHA1 hash of given input data.
 * @param {string | Buffer} text 
 * @returns string
 */
function sha1(data) {
    const shasum = crypto.createHash('sha1');
    shasum.update(data);
    return shasum.digest('hex');
}

/**
 * Hex to buffer.
 * @param {string} text 
 */
function unhex(text) {
    return Buffer.from(text, 'hex');
}

/**
 * Apply the password hashing algorithm introduced in MySQL 4.1, 
 * which is also used by the PASSWORD() SQL function. 
 * 
 * WARNING: This hashing algorithm is outdated and thus it is NOT recommended to use it for modern applications that require high password security.
 * @param {string} text plaintext
 */
function password(text) {
    return '*' + sha1(unhex(sha1(text))).toUpperCase();
}

/**
 * Alias of `password(text)` .
 * @param {string} text plaintext
 * @returns 
 */
function PASSWORD(text) {
    return password(text);
}

module.exports = {
    password,
    PASSWORD
};

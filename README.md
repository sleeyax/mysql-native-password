# mysql-native-password
Drop in implementation of the legacy `mysql_native_password` authentication plugin that was introduced in MySQL 4.1.

**WARNING: if you care about security, do NOT use this. This library only exists to allow integration with legacy systems.**

## Installation
`$ npm i mysql-native-password`

## Usage
```javascript
const { password } = require('mysql-native-password');
const hash = password('MyPlaintextPassword');
console.log(hash); // Output: *298A0D9CE846C7139B5F57C35302EC0F735DBABB
```

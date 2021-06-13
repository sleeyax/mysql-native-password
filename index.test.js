const { password } = require('./index');

test('generates valid hash', () => {
    const plaintext = 'MyAmazingPassw0rd!123';
    const wanted = '*3FD2EED8AC4D778AFDE548ECCAC5BF2CB39DBDFA';
    const actual = password(plaintext);
    expect(actual).toBe(wanted);
});

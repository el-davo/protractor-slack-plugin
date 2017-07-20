let welcomePo = require('./page-objects/welcome.po');

describe('Welcome Page', () => {

    beforeEach(() => {
        welcomePo.go();
    });

    it('should have a welcome message', () => {
        expect(welcomePo.welcome.getText()).toBe('Welcome1');
    });
});
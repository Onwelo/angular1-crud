describe('humanizeIsoDuration', function () {
  // Load module, which contains the directive
  beforeEach(module('app'));

  it('should convert IS08601 duration string to humanized version in english locale',
    inject(function (humanizeIsoDurationFilter) {
      expect(humanizeIsoDurationFilter('PT8H')).toBe('8 hours');
      expect(humanizeIsoDurationFilter('P5D')).toBe('5 days');
    }));
});

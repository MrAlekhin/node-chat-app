var expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', ()=>{
  it('should reject non-string values', ()=>{
    var check = isRealString(1234);
    expect(check).toBe(false);
  });
  it('should reject string with only spaces', ()=>{
    var check = isRealString('    ');
    expect(check).toBe(false);
  });
  it('should allow string with non-space characters', ()=>{
    var check = isRealString('andrew');
    expect(check).toBe(true);
  });
});

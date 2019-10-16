import { PowPipe } from './pow.pipe';

describe('PowPipe', () => {

  let pipe: PowPipe;

  beforeEach(() => {
    pipe = new PowPipe();
  });

  it('should create instance', () =>{
    expect(pipe).toBeTruthy();
    expect(pipe.transform).toBeDefined();
  });

  it('should determine exemple 2**3=8', () => {
    const result = pipe.transform(2, 3);
    expect(result).toBe(8);
  });
})
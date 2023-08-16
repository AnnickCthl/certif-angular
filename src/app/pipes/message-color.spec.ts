import { TestBed, waitForAsync } from '@angular/core/testing';
import { MessageColorPipe } from './message-color.pipe';

describe('MessageColorPipe', () => {
  let pipe: MessageColorPipe;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [],
        imports: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    pipe = new MessageColorPipe();
  });

  describe('Test [transform]', () => {
    it('should return red when number is less than 2', () => {
      expect(pipe.transform(0)).toEqual('red-color');
      expect(pipe.transform(1)).toEqual('red-color');
    });

    it('should return yellow when number 2 or 3', () => {
      expect(pipe.transform(2)).toEqual('yellow-color');
      expect(pipe.transform(3)).toEqual('yellow-color');
    });

    it('should return gree when number is greater than 3', () => {
      expect(pipe.transform(4)).toEqual('green-color');
      expect(pipe.transform(5)).toEqual('green-color');
    });
  });
});

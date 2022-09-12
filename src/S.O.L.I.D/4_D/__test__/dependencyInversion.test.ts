import { Soccer } from '../Soccer';
import { Basketball } from '../Basketball';
import {IPlay} from '../IPlay';

import { Provider } from '../Provider';

describe('Dependency Inversion Principle', () =>{
  it('should create class soccers and basketball', () =>{
    const provider: IPlay = new Provider();

    const soccer = new Soccer(provider);
    const basketball = new Basketball(provider);

    expect(soccer.play()).toBe('kick the ball')
    expect(basketball.play()).toBe('bounce the ball')
  })
})
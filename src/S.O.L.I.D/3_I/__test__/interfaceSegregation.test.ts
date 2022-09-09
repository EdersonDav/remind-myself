import { Soccer } from '../Soccer';
import { Basketball } from '../Basketball';
import {IPlayBasketball, IPlaySoccers } from '../IPlaySegregation';

import { IPlayNoSegregation } from '../IPlayNoSegregation';
import { SoccerNoSegregation } from '../SoccerNoSegregation';
import { BasketballNoSegregation } from '../BasketballNoSegregation';

describe('Interface Segregation Test', ()=>{
  it('should create play soccer and play basketball, implements only interface IPlayNoSegregation', () =>{
    const playSoccer:IPlayNoSegregation = new SoccerNoSegregation();

    const playBasketball:IPlayNoSegregation = new BasketballNoSegregation();

    expect(playSoccer.play()).toBe('start!!');
    expect(playSoccer.kickTheBall()).toBe('goal!!');

    expect(playBasketball.play()).toBe('start!!');
    expect(() => playBasketball.kickTheBall()).toThrowError('Basketball not kick the ball');
  });

  it('should create play soccer and play basketball, implements only interface IPlaySegregation', () =>{
    const playSoccer:IPlaySoccers = new Soccer();

    const playBasketball:IPlayBasketball = new Basketball();

    expect(playSoccer.play()).toBe('start!!');
    expect(playSoccer.kickTheBall()).toBe('goal!!');

    expect(playBasketball.play()).toBe('start!!');
    expect(playBasketball.makePoints()).toBe('point!!');
  });
})
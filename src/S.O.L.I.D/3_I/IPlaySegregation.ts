export interface IPlaySegregation{
  play():string;
}


export interface IPlaySoccers extends IPlaySegregation{
  kickTheBall():string;
}

export interface IPlayBasketball extends IPlaySegregation{
  makePoints():string;
}
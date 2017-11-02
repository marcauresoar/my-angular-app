export class CounterService {
  countActive: number = 0;
  countInactive: number = 0;

  incrementActive(){
    console.log('inactive -> active. Total: ' + ++this.countActive);
  }
  incrementInactive(){
    console.log('active -> inactive. Total: ' + ++this.countInactive);
  }
}

export {};

// abstract state
abstract class State {
  private human!: Human;

  setHuman(human: Human) {
    this.human = human;
    human.changeState(this);
  }

  relax() {
    return 'Human is relaxing';
  }

  rideBike() {
    return 'Human is relaxing';
  }

  abstract doWork(): string;

  abstract goSleep(): string;
}

// concrete state
class FreshState extends State {
  doWork(): string {
    return 'Fresh human is working';
  }

  goSleep(): string {
    return 'Fresh human can not sleep';
  }
}

// concrete state
class TiredState extends State {
  doWork(): string {
    return 'Tired human can not work';
  }

  goSleep(): string {
    return 'Tired human is sleeping';
  }
}

// Human objects can schange their state
class Human {
  private state: State;

  constructor(state: State) {
    this.state = state;
    state.setHuman(this);
  }

  changeState(state: State) {
    this.state = state;
  }

  doWork(): void {
    this.state.doWork();
  }

  goSleep(): void {
    this.state.goSleep();
  }

  relax(): void {
    this.state.relax();
  }

  rideBike(): void {
    this.state.rideBike();
  }
}

function clientCode() {
  // tired state
  let tiredState = new TiredState();
  // Human initial state is tired
  let human = new Human(tiredState);
  human.doWork(); // 'Tired human can not work'

  // change Humans state from tired to fresh
  let freshState = new FreshState();
  human.changeState(freshState);
  human.doWork(); // 'Fresh human is working'
}

clientCode();
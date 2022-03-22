export {};

interface Mediator {
  notify(sender: BaseComponent, event: string): void;
}

// mediator notifies related components
class ConcreteMediator implements Mediator {
  private footballer: Footballer;
  private fan: Fan;
  private scoreBoard: ScoreBoard;
  private announcer: Announcer;

  constructor(footballer: Footballer, fan: Fan,
    scoreBoard: ScoreBoard, announcer: Announcer) {
    this.footballer = footballer;
    this.footballer.setMediator(this);
    this.fan = fan;
    this.fan.setMediator(this);
    this.scoreBoard = scoreBoard;
    this.scoreBoard.setMediator(this);
    this.announcer = announcer;
    this.announcer.setMediator(this);
  }

  notify(sender: BaseComponent, event: string) {
    if (event === 'Goal is scored') {
      this.fan.celebrateGoal();
      this.scoreBoard.changeScore();
    } else if (event === 'Score is changed') {
      this.announcer.announceScore();
    }
  }
}

// base component class common mediator for related components
class BaseComponent {
  protected mediator!: Mediator;

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

// concrete component
class Footballer extends BaseComponent {
  scoreGoal(): void {
    let event = 'Goal is scored.';
    this.mediator.notify(this, event);
  }
}

// concrete component
class Fan extends BaseComponent {
  celebrateGoal(): void {
    let event = 'Fans are celebrating.';
    this.mediator.notify(this, event);
  }
}

// concrete component
class ScoreBoard extends BaseComponent {
  changeScore(): void {
    let event = 'Score is changed.';
    this.mediator.notify(this, event);
  }
}

// concrete component
class Announcer extends BaseComponent {
  announceScore(): void {
    let event = 'Announcer announced score.';
    this.mediator.notify(this, event);
  }
}

function clientCode() {
  let footballer = new Footballer();
  let fan = new Fan();
  let scoreBoard = new ScoreBoard();
  let announcer = new Announcer();

  let mediator = new ConcreteMediator(footballer, fan, scoreBoard, announcer);

  footballer.scoreGoal(); /* Goal is scored. Fans are celebrating. Score is
    changed. Announcer announced score. */
}

clientCode();
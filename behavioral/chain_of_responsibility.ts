interface IHandler {
  setNextHandler(handler: IHandler): IHandler;
  handle(): string;
}

abstract class AbstractHandler implements IHandler {
  private nextHandler!: IHandler;

  setNextHandler(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(): string {
    if (this.nextHandler)
      return this.nextHandler.handle();
    else
      return 'Nobody can take you to club';
  }
}

class Friend extends AbstractHandler {
  private canTakeToTheClub: boolean = false;

  handle(): string {
    if (this.canTakeToTheClub)
      return 'Friend took you to the club';
    else
      return super.handle();
  }
}

class ClubMember extends AbstractHandler {
  private canTakeToTheClub: boolean = false;

  handle(): string {
    if (this.canTakeToTheClub)
      return 'Club member took you to the club';
    else
      return super.handle();
  }
}

class ClubVicePresident extends AbstractHandler {
  private canTakeToTheClub: boolean = true;

  handle(): string {
    if (this.canTakeToTheClub)
      return 'Club vice president took you to the club';
    else
      return super.handle();
  }
}

class ClubPresident extends AbstractHandler {
  private canTakeToTheClub: boolean = true;

  handle(): string {
    if (this.canTakeToTheClub)
      return 'Club president took you to the club';
    else
      return super.handle();
  }
}

function clientsCode() {
  const friend = new Friend();
  const clubMember = new ClubMember();
  const vicePresident = new ClubVicePresident();
  const president = new ClubPresident();

  // setting chain of responsibility
  friend.setNextHandler(clubMember)
    .setNextHandler(vicePresident)
    .setNextHandler(president);

  // start from first handler
  friend.handle(); // 'Club vice president took you to the club'

  // start with last handler
  president.handle(); // 'Club president took you to the club'
}

clientsCode();
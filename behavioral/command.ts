export {};

interface Receiver {
  prepare(): string;
  startShooting(): string;
};

class Operator implements Receiver {
  prepare() {
    return 'Operator set camera';
  }

  startShooting() {
    return 'Operator started shooting';
  }
}

class Actor implements Receiver {
  prepare() {
    return 'Actor prepared for shooting'
  }
  startShooting() {
    return 'Actor started acting';
  }
}

// interface for commands
interface CommandInterface {
  execute(): string;
}

// concrete command
class PreparationCommand implements CommandInterface {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.prepare();
  }
}

// concrete command
class ShootingCommand implements CommandInterface {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.startShooting();
  }
}

// command sender
class DirectorSender {
  private command: CommandInterface;

  constructor(command: CommandInterface) {
    this.command = command;
  }

  executeCommand() {
    return this.command.execute();
  }
}

function clientCode() {
  const operator = new Operator();
  const prepCommand = new PreparationCommand(operator);
  const director = new DirectorSender(prepCommand);
  director.executeCommand(); // 'Operator set camera'
}

clientCode();
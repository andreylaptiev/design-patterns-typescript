// interface for drawing tools (pen and pencil)
interface Tool {
  name: string;
  drawLine(): string;
  drawCircle(): string;
}

class Pen implements Tool {
  readonly name = 'Pen';
  drawLine() {
    return `Draw line with ${this.name}`;
  }
  drawCircle() {
    return `Draw circle with ${this.name}`;
  }
}

class Pencil implements Tool {
  readonly name = 'Pencil';
  drawLine() {
    return `Draw line with ${this.name}`;
  }
  drawCircle() {
    return `Draw circle with ${this.name}`;
  }
}

abstract class Creator {
  // factory method
  abstract createTool(): Tool;
}

// concrete Creator
class PenCreator extends Creator {
  createTool(): Tool {
    return new Pen();
  }
}

// concrete Creator
class PencilCreator extends Creator {
  createTool(): Tool {
    return new Pencil();
  }
}

// cliend code
function clientCode(creator: Creator) {
  let tool = creator.createTool();
  console.log(`Created ${tool.name}`);
  console.log(tool.drawLine());
  console.log(tool.drawCircle() + '\n');
}

clientCode(new PenCreator());
clientCode(new PencilCreator());

export { PenCreator, PencilCreator, Pen, Pencil };
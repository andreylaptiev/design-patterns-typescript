// abstract classes for concrete factory products
abstract class Disk {
  protected abstract diskType: string;

  abstract toPaint(): string;

  checkQuality() {
    return 'Disk quality is OK'
  }
}

abstract class Tire {
  protected abstract tireType: string;

  abstract getFromWarehouse(): string;

  checkState() {
    return 'Tire state is OK'
  }
}

abstract class Bolt {
  protected abstract boltType: string;

  abstract countQuantity(): string;

  checkStrength() {
    return 'Bolt strength is OK'
  }
}

// concrete classes for concrete factory products
class CastDisk extends Disk {
  protected diskType = 'Cast';
  toPaint() {
    return `${this.diskType} disc is painted`;
  }
}

class CastTire extends Tire {
  protected tireType = 'Cast';

  getFromWarehouse() {
    return `Got ${this.tireType} tire from warehouse`;
  }
}

class StampDisk extends Disk {
  protected diskType = 'Stamp';
  toPaint() {
    return `${this.diskType} disc is painted`;
  }
}

class CastBolt extends Bolt {
  protected boltType = 'Cast';

  countQuantity() {
    return `${this.boltType} bolt quantity is correct`;
  }
}

class StampTire extends Tire {
  protected tireType = 'Stamp';

  getFromWarehouse() {
    return `Got ${this.tireType} tire from warehouse`;
  }
}

class StampBolt extends Bolt {
  protected boltType = 'Stamp';

  countQuantity() {
    return `${this.boltType} bolt quantity is correct`;
  }
}

// abstract factory
interface WheelFactory {
  createDisk(): Disk;
  createTire(): Tire;
  createBolt(): Bolt;
}

// concrete factory for cast products
class CastWheelFactory implements WheelFactory {
  createDisk() {
    console.log('Created a cast Disk');
    return new CastDisk();
  }

  createTire() {
    console.log('Created cast Tire');
    return new CastTire();
  }

  createBolt() {
    console.log('Created a cast Bolt');
    return new CastBolt();
  }
}

// concrete factory for stamp products
class StampWheelFactory implements WheelFactory {
  createDisk() {
    console.log('Created a stamp Disk');
    return new StampDisk();
  }

  createTire() {
    console.log('Created stamp Tire');
    return new StampTire();
  }

  createBolt() {
    console.log('Created a stamp Bolt');
    return new StampBolt();
  }
}

function clientCode(factory: WheelFactory): void {
  let disk: Disk = factory.createDisk();
  disk.toPaint();

  let tire: Tire = factory.createTire();
  tire.checkState();

  let bolt: Bolt = factory.createBolt();
  bolt.checkStrength();
}

clientCode(new CastWheelFactory());
clientCode(new StampWheelFactory());
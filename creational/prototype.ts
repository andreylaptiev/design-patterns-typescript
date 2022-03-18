// interface for classes which objects
// can clone themselvese
interface Prototype {
  clone(): this;
}

// class Auto supports cloning
// so its objects can clone themselves
class Auto implements Prototype {
  public autoType: string;
  public wheelsQuantity: number;
  // a property with back reference
  public manual!: AutoManual;

  constructor(autoType: string, wheelsQuantity: number) {
    this.autoType = autoType;
    this.wheelsQuantity = wheelsQuantity;
  }

  clone() {
    // clones primitive type properties
    const clone = Object.create(this);
    /*
      if we need to clone an object type property (not primivive):
      clone.objectTypeProperty = Object.create(this.objectTypeProperty)
    */
    // clone property with back reference
    clone.manual = {
      ...this.manual,
      auto: { ...this },
  };
    return clone;
  }
}

class AutoManual {
  public auto: Prototype;

  constructor(auto: Prototype) {
    this.auto = auto;
  }
}

function clientCode() {
  const a1 = new Auto('Sport', 4);
  a1.manual = new AutoManual(a1);
  const a2 = a1.clone();
}

clientCode();
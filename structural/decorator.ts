interface HumanClothes {
  wearClothes(): string;
}

// default object behavior
class DefaultClothes implements HumanClothes {
  private defClothes: string;

  constructor(defClothes: string = 'Underwear') {
    this.defClothes = defClothes;
  }

  wearClothes() {
    return `Default clothes: ${this.defClothes}`;
  }
}

// base decorator wraps object without changing its default behavior
class BaseClothes implements HumanClothes {
  protected baseClothes: HumanClothes;

  constructor(baseClothes: HumanClothes) {
    this.baseClothes = baseClothes;
  }

  wearClothes() {
    return this.baseClothes.wearClothes();
  }
}

// concrete decorator changes behavior of wrapped object
class InsideClothes extends BaseClothes {
  wearClothes() {
    return `${this.baseClothes.wearClothes()}. And inside clothes.`;
  }
}

// concrete decorator changes behavior of wrapped object
class OutsideClothes extends BaseClothes {
  wearClothes() {
    return `${this.baseClothes.wearClothes()}. And outside clothes.`;
  }
}

function clientCode() {
  // object with default behavior
  let defClothes = new DefaultClothes();
  defClothes.wearClothes(); // 'Default clothes: Underwear'

  // wrap object without changing its default behavior
  let baseClothes = new BaseClothes(defClothes);
  baseClothes.wearClothes(); // 'Default clothes: Underwear'

  // wrap object and change its behavior
  let insideClothes = new InsideClothes(baseClothes);
  insideClothes.wearClothes(); /* 'Default clothes: Underwear. And inside
    clothes.' */

  // add second wrapping layer to object and change its behavior again
  let outsideClothes = new OutsideClothes(insideClothes);
  outsideClothes.wearClothes(); /* 'Default clothes: Underwear. And inside
  clothes. And outside clothes.' */
}

clientCode();
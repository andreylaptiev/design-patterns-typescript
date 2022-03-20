// part of a complex subsystem
class PhotoImporter {
  private photo: string;

  constructor(photo: string) {
    this.photo = photo;
  }

  importPhoto() {
    return `${this.photo} imported`
  }
}

// part of a complex subsystem
interface EffectApplier {
  applyEffect(): string;
}

// part of a complex subsystem
class BlackWhiteEffect implements EffectApplier {
  private photo: string;

  constructor(photo: string) {
    this.photo = photo;
  }

  applyEffect() {
    return `Black and white effect allpied to ${this.photo}`;
  }
}

// part of a complex subsystem
class PictureEffect implements EffectApplier {
  private photo: string;

  constructor(photo: string) {
    this.photo = photo;
  }

  applyEffect() {
    return `Picture effect allpied to ${this.photo}`;
  }
}

// part of a complex subsystem
class PhotoExporter {
  private photo: string;

  constructor(photo: string) {
    this.photo = photo;
  }

  exportPhoto() {
    return `${this.photo} exported`
  }
}

// facade
class PhotoEditor {
  importer: PhotoImporter;
  effect: EffectApplier;
  exporter: PhotoExporter;

  constructor(photo: string) {
    this.importer = new PhotoImporter(photo);
    this.effect = new BlackWhiteEffect(photo);
    this.exporter = new PhotoExporter(photo);
  }

  editPhoto() {
    let result: string[] = [];
    let importPhoto = this.importer.importPhoto();
    result.push(importPhoto);
    let applyEffect = this.effect.applyEffect();
    result.push(applyEffect);
    let exportPhoto = this.exporter.exportPhoto();
    result.push(exportPhoto);
    return result.join('.');
  }
}

function clientCode() {
  const myPhoto = 'Photo';
  let editMyPhoto = new PhotoEditor(myPhoto);
  editMyPhoto.editPhoto(); /* 'Photo imported.Black and white effect allpied to
    Photo.Photo exported' */
}

clientCode();
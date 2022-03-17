class VideoPlayer {
  parts: string[] = [];
}

interface BuilderInterface {
  setBox(): void;
  setElectronics(): void;
  setDrive(): void;
}

class VideoPlayerBuilder implements BuilderInterface {
  private videoPlayer!: VideoPlayer;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.videoPlayer = new VideoPlayer();
  }

  setBox() {
    this.videoPlayer.parts.push('Video box');
  }

  setElectronics() {
    this.videoPlayer.parts.push('Video electronics');
  }

  setDrive() {
    this.videoPlayer.parts.push('Video drive');
  }

  getProduct(): string[] {
    const result = this.videoPlayer.parts;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: BuilderInterface;

  setBuilder(builder: BuilderInterface): void {
    this.builder = builder;
  }

  buildPlayer() {
    this.builder.setBox();
    this.builder.setElectronics();
    this.builder.setDrive();
  }
}

function clientCode(director: Director) {
  const builder = new VideoPlayerBuilder();
  director.setBuilder(builder);
  director.buildPlayer();
  let product = builder.getProduct();
  console.log(`Video player: ${product}`);
}

clientCode(new Director());
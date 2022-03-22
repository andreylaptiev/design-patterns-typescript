export {};

class Memento {
  private editor: PhotoEditor;
  private effect: string;

  constructor(editor: PhotoEditor, effect: string) {
    this.editor = editor;
    this.effect = effect;
  }

  getState(): string {
    return this.effect;
  }
}

class PhotoEditor {
  effect: string | null;

  constructor(effect: string | null = null) {
    this.effect = effect;
  }

  addEffect(newEffect: string): void {
    this.effect = newEffect;
  }

  saveState(): Memento {
    if (this.effect)
      return new Memento(this, this.effect);
    else
      throw 'Error: no new effect applied';
  }

  restorePrevState(memento: Memento): void {
    this.effect = memento.getState();
  }
}

class StateManager {
  private editor: PhotoEditor;
  private history: Memento[] = [];

  constructor(editor: PhotoEditor) {
    this.editor = editor;
  }

  backup(): void {
    const backup = this.editor.saveState();
    this.history.push(backup);
  }

  undo(): void {
    const memento = this.history[this.history.length-2];
    if (memento)
      this.editor.restorePrevState(memento);
    else
      throw 'Error: no previous states saved';
  }
}

function clientCode() {
  let editor = new PhotoEditor();
  let stateManager = new StateManager(editor);

  // add 'sepia' effect and save it
  editor.addEffect('Sepia');
  stateManager.backup();

  // add 'black and white' effect and save it
  editor.addEffect('Black and white');
  stateManager.backup();

  // current effect is 'black and white' (last saved)
  // restore previous effect ('sepia') by undoing last effect
  stateManager.undo();
}

clientCode();
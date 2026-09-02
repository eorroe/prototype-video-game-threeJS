export class AudioSystem {
  static id = 'audio';
  static deps = ['player'];

  async init(ctx) {
    this.ctx_ = new (window.AudioContext || window.webkitAudioContext)();
    console.log('[audio] context ready');
  }

  update(dt, ctx) {}

  dispose() {
    if (this.ctx_) {
      this.ctx_.close();
      this.ctx_ = null;
    }
  }
}

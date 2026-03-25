/**
 * DialogSystem.js
 * Gestiona los diálogos de Gandalf y otros NPCs
 */
const DialogSystem = {
  queue: [],
  currentIndex: 0,
  isOpen: false,
  onComplete: null,
  typingInterval: null,
  fullText: '',
  displayedText: '',

  // Muestra una secuencia de diálogos
  // lines: array de {speaker, text} o simplemente strings
  // onComplete: función a ejecutar al terminar
  show(lines, onComplete) {
    this.queue = lines.map(l => typeof l === 'string' ? { speaker: '🧙 Gandalf', text: l } : l);
    this.currentIndex = 0;
    this.onComplete = onComplete || null;
    this.isOpen = true;
    document.getElementById('dialog-overlay').classList.add('active');
    this._showLine(0);
  },

  _showLine(index) {
    if (index >= this.queue.length) {
      this.close();
      return;
    }
    const line = this.queue[index];
    document.getElementById('dialog-speaker').textContent = line.speaker || '🧙 Gandalf';
    this.fullText = line.text;
    this.displayedText = '';
    this._typeText();
  },

  _typeText() {
    clearInterval(this.typingInterval);
    const el = document.getElementById('dialog-text');
    let i = 0;
    this.typingInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.displayedText += this.fullText[i];
        el.textContent = this.displayedText;
        i++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 22);
  },

  // Avanza al siguiente diálogo (llamar con ESPACIO)
  advance() {
    if (!this.isOpen) return;
    clearInterval(this.typingInterval);
    // Si aún está escribiendo, mostrar el texto completo
    if (this.displayedText.length < this.fullText.length) {
      this.displayedText = this.fullText;
      document.getElementById('dialog-text').textContent = this.fullText;
      return;
    }
    // Avanzar al siguiente
    this.currentIndex++;
    if (this.currentIndex < this.queue.length) {
      this._showLine(this.currentIndex);
    } else {
      this.close();
    }
  },

  close() {
    this.isOpen = false;
    clearInterval(this.typingInterval);
    document.getElementById('dialog-overlay').classList.remove('active');
    if (this.onComplete) {
      const cb = this.onComplete;
      this.onComplete = null;
      cb();
    }
  }
};

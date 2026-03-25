/**
 * PuzzleSystem.js
 * Gestiona los puzzles y enigmas dentro de las mazmorras
 */
const PuzzleSystem = {
  currentPuzzle: null,
  onSolve: null,
  onFail: null,
  attempts: 0,

  /**
   * Abre un puzzle
   * puzzle: {
   *   id: string,
   *   title: string,
   *   question: string,
   *   type: 'multiple' | 'input',
   *   options: [{text, correct}],   // para tipo multiple
   *   answer: string,               // para tipo input
   *   saKey: 'sa1'|'sa2'|...
   *   feedback_correct: string,
   *   feedback_wrong: string
   * }
   * onSolve: función al resolver correctamente
   * onFail: función al fallar (opcional)
   */
  open(puzzle, onSolve, onFail) {
    this.currentPuzzle = puzzle;
    this.onSolve = onSolve;
    this.onFail = onFail || null;
    this.attempts = 0;

    document.getElementById('puzzle-title').textContent = puzzle.title || '📜 Enigma';
    document.getElementById('puzzle-question').innerHTML = puzzle.question;
    document.getElementById('puzzle-feedback').textContent = '';
    document.getElementById('puzzle-close').style.display = 'none';

    const optionsDiv = document.getElementById('puzzle-options');
    optionsDiv.innerHTML = '';

    if (puzzle.type === 'multiple') {
      puzzle.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'puzzle-option';
        btn.textContent = opt.text;
        btn.onclick = () => this._checkAnswer(opt.correct, btn, puzzle);
        optionsDiv.appendChild(btn);
      });
    } else if (puzzle.type === 'input') {
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.placeholder = 'Escribe tu respuesta...';
      inp.style.cssText = 'width:100%;padding:10px;background:#1a0e00;border:2px solid #8b6914;color:#f5deb3;font-size:14px;border-radius:4px;font-family:Georgia,serif;margin-bottom:8px;';
      const btn = document.createElement('button');
      btn.className = 'puzzle-option';
      btn.textContent = '✔ Confirmar respuesta';
      btn.onclick = () => {
        const val = inp.value.trim().toLowerCase();
        const correct = puzzle.answer.toLowerCase();
        this._checkAnswer(val === correct || val.includes(correct), btn, puzzle);
      };
      optionsDiv.appendChild(inp);
      optionsDiv.appendChild(btn);
    }

    document.getElementById('puzzle-overlay').classList.add('active');
  },

  _checkAnswer(isCorrect, btn, puzzle) {
    const feedback = document.getElementById('puzzle-feedback');
    const options = document.querySelectorAll('.puzzle-option');

    if (isCorrect) {
      btn.classList.add('correct');
      feedback.style.color = '#4caf50';
      feedback.textContent = '✅ ' + (puzzle.feedback_correct || '¡Correcto! Has superado el enigma.');
      document.getElementById('puzzle-close').style.display = 'block';
      options.forEach(o => o.disabled = true);
      // Guardar en playerData
      if (window.Game && window.Game.player) {
        SaveSystem.completePuzzle(window.Game.player, puzzle.id, puzzle.saKey);
        GameUI.updateProgressBar();
      }
      if (this.onSolve) {
        setTimeout(() => { /* esperamos a que el usuario cierre */ }, 0);
      }
    } else {
      this.attempts++;
      btn.classList.add('wrong');
      setTimeout(() => btn.classList.remove('wrong'), 600);
      feedback.style.color = '#f44336';
      feedback.textContent = '❌ ' + (puzzle.feedback_wrong || 'Incorrecto. ¡Inténtalo de nuevo!');
      if (this.onFail) this.onFail(this.attempts);
    }
  },

  close() {
    document.getElementById('puzzle-overlay').classList.remove('active');
    if (this.onSolve && window.Game && window.Game.player &&
        SaveSystem.isPuzzleDone(window.Game.player, this.currentPuzzle?.id)) {
      const cb = this.onSolve;
      this.onSolve = null;
      cb();
    }
  }
};

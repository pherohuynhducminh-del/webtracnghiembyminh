/**
 * ỨNG DỤNG THI TRẮC NGHIỆM TRỰC TUYẾN (EXAM SIMULATOR)
 * Kiến trúc tách biệt các module xử lý:
 * 1. StorageManager: Quản lý lưu trữ và khôi phục LocalStorage.
 * 2. ExamImporter: Đọc, phân tích (JSON/TXT) và kiểm tra tính hợp lệ dữ liệu.
 * 3. ShuffleEngine: Thuật toán trộn câu hỏi và phương án bảo toàn ánh xạ đáp án.
 * 4. GradingEngine: Chấm điểm, phân loại đúng/sai/bỏ trống.
 * 5. UIController (App): Điều phối hiển thị câu hỏi, làm bài và màn hình ôn tập.
 */

const STORAGE_KEY = "exam_simulator_state_v1";

/* ==========================================================================
   1. MODULE LƯU TIẾN TRÌNH (LOCALSTORAGE)
   ========================================================================== */
const StorageManager = {
  save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Lỗi lưu tiến trình vào LocalStorage:", error);
    }
  },

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.error("Lỗi đọc tiến trình từ LocalStorage:", error);
      return null;
    }
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
};

/* ==========================================================================
   2. MODULE NHẬP VÀ KIỂM TRA DỮ LIỆU ĐỀ THI (JSON & TXT)
   ========================================================================== */
const ExamImporter = {
  async parseFile(file) {
    const fileName = file.name.toLowerCase();
    const content = await file.text();

    if (fileName.endsWith(".json")) {
      return this.parseJSON(content);
    }
    if (fileName.endsWith(".txt")) {
      return this.parseTXT(content);
    }
    throw new Error("Định dạng file không được hỗ trợ. Vui lòng chọn file .JSON hoặc .TXT.");
  },

  parseJSON(rawText) {
    let data;
    try {
      data = JSON.parse(rawText);
    } catch (e) {
      throw new Error("File JSON không đúng cú pháp. Vui lòng kiểm tra lại dấu ngoặc hoặc dấu phẩy.");
    }
    return this.validateExamData(data);
  },

  parseTXT(rawText) {
    const lines = rawText.split(/\r?\n/);
    let examTitle = "Đề thi trắc nghiệm";
    const blocks = [];
    let currentBlock = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("TITLE:")) {
        examTitle = trimmed.replace("TITLE:", "").trim() || examTitle;
        continue;
      }
      if (trimmed === "---") {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock);
          currentBlock = [];
        }
      } else if (trimmed !== "") {
        currentBlock.push(trimmed);
      }
    }
    if (currentBlock.length > 0) {
      blocks.push(currentBlock);
    }

    const questions = blocks.map((blockLines, idx) => {
      const qObj = {
        id: `Q${String(idx + 1).padStart(3, "0")}`,
        type: "single",
        question: "",
        options: {},
        correctAnswers: [],
        explanation: "",
        image: ""
      };

      blockLines.forEach((line) => {
        if (line.startsWith("ID:")) {
          qObj.id = line.replace("ID:", "").trim();
        } else if (line.startsWith("Q:")) {
          qObj.question = line.replace("Q:", "").trim();
        } else if (/^[A-Z]:/.test(line)) {
          const key = line.charAt(0);
          qObj.options[key] = line.slice(2).trim();
        } else if (line.startsWith("ANS:")) {
          const ansList = line
            .replace("ANS:", "")
            .split(",")
            .map((s) => s.trim().toUpperCase())
            .filter(Boolean);
          qObj.correctAnswers = ansList;
          if (ansList.length > 1) {
            qObj.type = "multiple";
          }
        } else if (line.startsWith("EXP:")) {
          qObj.explanation = line.replace("EXP:", "").trim();
        } else if (line.startsWith("IMG:")) {
          qObj.image = line.replace("IMG:", "").trim();
        }
      });

      return qObj;
    });

    return this.validateExamData({ examTitle, questions });
  },

  validateExamData(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Dữ liệu đề thi trống hoặc không hợp lệ.");
    }

    if (!Array.isArray(data.questions) || data.questions.length === 0) {
      throw new Error("Đề thi không chứa câu hỏi nào (mảng questions rỗng).");
    }

    const seenIds = new Set();
    const normalizedQuestions = data.questions.map((q, index) => {
      const pos = index + 1;
      const id = String(q.id || `Q${String(pos).padStart(3, "0")}`).trim();

      if (seenIds.has(id)) {
        throw new Error(`Trùng lặp mã câu hỏi (ID: ${id}) tại câu số ${pos}.`);
      }
      seenIds.add(id);

      if (!q.question || typeof q.question !== "string" || !q.question.trim()) {
        throw new Error(`Câu hỏi số ${pos} (ID: ${id}) bị thiếu nội dung câu hỏi.`);
      }

      if (!q.options || typeof q.options !== "object") {
        throw new Error(`Câu hỏi số ${pos} (ID: ${id}) thiếu danh sách phương án trả lời.`);
      }

      const optionKeys = Object.keys(q.options).filter(
        (k) => q.options[k] !== undefined && String(q.options[k]).trim() !== ""
      );

      if (optionKeys.length < 2) {
        throw new Error(`Câu hỏi số ${pos} (ID: ${id}) phải có ít nhất 2 phương án trả lời.`);
      }

      if (!Array.isArray(q.correctAnswers) || q.correctAnswers.length === 0) {
        throw new Error(`Câu hỏi số ${pos} (ID: ${id}) chưa thiết lập đáp án chính xác.`);
      }

      const normalizedAnswers = q.correctAnswers.map((a) => String(a).trim().toUpperCase());
      for (const ansKey of normalizedAnswers) {
        if (!optionKeys.includes(ansKey)) {
          throw new Error(
            `Câu hỏi số ${pos} (ID: ${id}) có đáp án "${ansKey}" không khớp với các phương án hiện có (${optionKeys.join(", ")}).`
          );
        }
      }

      const type =
        q.type === "multiple" || normalizedAnswers.length > 1 ? "multiple" : "single";

      const cleanOptions = {};
      optionKeys.forEach((k) => {
        cleanOptions[k] = String(q.options[k]).trim();
      });

      return {
        id,
        type,
        question: q.question.trim(),
        options: cleanOptions,
        correctAnswers: normalizedAnswers,
        explanation: q.explanation ? String(q.explanation).trim() : "",
        image: q.image ? String(q.image).trim() : ""
      };
    });

    return {
      examTitle: data.examTitle ? String(data.examTitle).trim() : "Đề thi trắc nghiệm",
      questions: normalizedQuestions
    };
  }
};

/* ==========================================================================
   3. MODULE TRỘN CÂU HỎI VÀ ĐÁP ÁN (SHUFFLE ENGINE)
   ========================================================================== */
const ShuffleEngine = {
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  prepareExamSession(rawExamData, { shuffleQuestions, shuffleOptions }) {
    let workingQuestions = rawExamData.questions.map((q) => ({
      ...q,
      options: { ...q.options },
      correctAnswers: [...q.correctAnswers]
    }));

    if (shuffleQuestions) {
      workingQuestions = this.shuffleArray(workingQuestions);
    }

    if (shuffleOptions) {
      const displayLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

      workingQuestions = workingQuestions.map((q) => {
        const entries = Object.keys(q.options).map((oldKey) => ({
          text: q.options[oldKey],
          isCorrect: q.correctAnswers.includes(oldKey)
        }));

        const shuffledEntries = this.shuffleArray(entries);
        const newOptions = {};
        const newCorrectAnswers = [];

        shuffledEntries.forEach((entry, idx) => {
          const newKey = displayLabels[idx] || String(idx + 1);
          newOptions[newKey] = entry.text;
          if (entry.isCorrect) {
            newCorrectAnswers.push(newKey);
          }
        });

        return {
          ...q,
          options: newOptions,
          correctAnswers: newCorrectAnswers
        };
      });
    }

    return {
      examTitle: rawExamData.examTitle,
      questions: workingQuestions
    };
  }
};

/* ==========================================================================
   4. MODULE CHẤM ĐIỂM VÀ PHÂN TÍCH KẾT QUẢ (GRADING ENGINE)
   ========================================================================== */
const GradingEngine = {
  evaluate(questions, userAnswersMap) {
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    const details = questions.map((q) => {
      const selected = userAnswersMap[q.id] || [];
      const isSkipped = selected.length === 0;

      const sortedUser = [...selected].sort();
      const sortedCorrect = [...q.correctAnswers].sort();

      const isCorrect =
        !isSkipped &&
        sortedUser.length === sortedCorrect.length &&
        sortedUser.every((val, idx) => val === sortedCorrect[idx]);

      if (isSkipped) {
        skippedCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }

      return {
        question: q,
        userSelected: selected,
        status: isSkipped ? "skipped" : isCorrect ? "correct" : "wrong"
      };
    });

    const total = questions.length;
    const score = total > 0 ? ((correctCount / total) * 10).toFixed(2) : "0.00";
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    return {
      total,
      correctCount,
      wrongCount,
      skippedCount,
      score,
      accuracy,
      details
    };
  }
};

/* ==========================================================================
   5. BỘ ĐIỀU KHIỂN TRẠNG THÁI VÀ GIAO DIỆN (UI CONTROLLER)
   ========================================================================== */
const App = {
  pendingExamData: null,

  state: {
    status: "idle",
    examTitle: "",
    questions: [],
    currentIndex: 0,
    userAnswers: {},
    flaggedIds: [],
    startTime: null,
    endTime: null
  },

  timerInterval: null,
  currentReviewFilter: "all",

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.restoreSessionIfAvailable();
  },

  cacheDOM() {
    this.screens = {
      setup: document.getElementById("setupScreen"),
      exam: document.getElementById("examScreen"),
      review: document.getElementById("reviewScreen")
    };

    this.headerExamTitle = document.getElementById("headerExamTitle");
    this.btnResetProgress = document.getElementById("btnResetProgress");

    this.uploadDropZone = document.getElementById("uploadDropZone");
    this.fileInput = document.getElementById("fileInput");
    this.btnLoadSampleExam = document.getElementById("btnLoadSampleExam");
    this.importAlert = document.getElementById("importAlert");
    this.examConfigSection = document.getElementById("examConfigSection");
    this.previewExamTitle = document.getElementById("previewExamTitle");
    this.previewQuestionCount = document.getElementById("previewQuestionCount");
    this.chkShuffleQuestions = document.getElementById("chkShuffleQuestions");
    this.chkShuffleOptions = document.getElementById("chkShuffleOptions");
    this.btnStartExam = document.getElementById("btnStartExam");

    this.statTotal = document.getElementById("statTotal");
    this.statAnswered = document.getElementById("statAnswered");
    this.statUnanswered = document.getElementById("statUnanswered");
    this.statTimer = document.getElementById("statTimer");
    this.progressBarFill = document.getElementById("progressBarFill");

    this.currentQuestionNumber = document.getElementById("currentQuestionNumber");
    this.currentQuestionType = document.getElementById("currentQuestionType");
    this.btnToggleFlag = document.getElementById("btnToggleFlag");
    this.flagText = document.getElementById("flagText");
    this.questionText = document.getElementById("questionText");
    this.questionImageContainer = document.getElementById("questionImageContainer");
    this.questionImage = document.getElementById("questionImage");
    this.optionsContainer = document.getElementById("optionsContainer");

    this.btnPrevQuestion = document.getElementById("btnPrevQuestion");
    this.btnNextQuestion = document.getElementById("btnNextQuestion");
    this.questionPaletteGrid = document.getElementById("questionPaletteGrid");
    this.btnSubmitExam = document.getElementById("btnSubmitExam");

    this.resScore = document.getElementById("resScore");
    this.resTotal = document.getElementById("resTotal");
    this.resCorrect = document.getElementById("resCorrect");
    this.resWrong = document.getElementById("resWrong");
    this.resSkipped = document.getElementById("resSkipped");
    this.resAccuracy = document.getElementById("resAccuracy");
    this.reviewQuestionsList = document.getElementById("reviewQuestionsList");
    this.btnRetryWrong = document.getElementById("btnRetryWrong");
    this.btnRetakeFull = document.getElementById("btnRetakeFull");

    this.confirmModal = document.getElementById("confirmModal");
    this.modalTitle = document.getElementById("modalTitle");
    this.modalMessage = document.getElementById("modalMessage");
    this.btnModalCancel = document.getElementById("btnModalCancel");
    this.btnModalConfirm = document.getElementById("btnModalConfirm");
  },

  bindEvents() {
    this.fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        this.handleFileUpload(e.target.files[0]);
      }
    });

    // Nạp nhanh đề mẫu từ thư mục assets/de_thi_mau.json
    this.btnLoadSampleExam.addEventListener("click", () => this.loadBuiltInSample());

    this.uploadDropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      this.uploadDropZone.classList.add("dragover");
    });

    this.uploadDropZone.addEventListener("dragleave", () => {
      this.uploadDropZone.classList.remove("dragover");
    });

    this.uploadDropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      this.uploadDropZone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        this.handleFileUpload(e.dataTransfer.files[0]);
      }
    });

    this.btnStartExam.addEventListener("click", () => this.startNewExam());

    this.btnPrevQuestion.addEventListener("click", () => {
      if (this.state.currentIndex > 0) {
        this.goToQuestion(this.state.currentIndex - 1);
      }
    });

    this.btnNextQuestion.addEventListener("click", () => {
      if (this.state.currentIndex < this.state.questions.length - 1) {
        this.goToQuestion(this.state.currentIndex + 1);
      }
    });

    this.btnToggleFlag.addEventListener("click", () => this.toggleCurrentQuestionFlag());
    this.btnSubmitExam.addEventListener("click", () => this.confirmSubmitExam());

    this.btnResetProgress.addEventListener("click", () => {
      this.openConfirmModal(
        "Xóa tiến trình làm bài?",
        "Toàn bộ dữ liệu bài thi hiện tại sẽ bị xóa khỏi trình duyệt để tải đề thi mới.",
        () => {
          this.stopTimer();
          StorageManager.clear();
          this.state = {
            status: "idle",
            examTitle: "",
            questions: [],
            currentIndex: 0,
            userAnswers: {},
            flaggedIds: [],
            startTime: null,
            endTime: null
          };
          this.pendingExamData = null;
          this.fileInput.value = "";
          this.examConfigSection.classList.add("hidden");
          this.importAlert.classList.add("hidden");
          this.headerExamTitle.textContent = "Hệ Thống Thi Trắc Nghiệm";
          this.switchScreen("setup");
        }
      );
    });

    document.querySelectorAll(".btn-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".btn-filter").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentReviewFilter = btn.dataset.filter;
        this.renderReviewList();
      });
    });

    this.btnRetryWrong.addEventListener("click", () => this.retryWrongQuestions());
    this.btnRetakeFull.addEventListener("click", () => this.retakeFullExam());
  },

  async loadBuiltInSample() {
    this.importAlert.classList.add("hidden");
    this.examConfigSection.classList.add("hidden");

    try {
      const response = await fetch("assets/de_thi_mau.json");
      if (!response.ok) {
        throw new Error("Không tìm thấy file assets/de_thi_mau.json trên máy chủ.");
      }
      const rawJson = await response.json();
      const parsedData = ExamImporter.validateExamData(rawJson);

      this.pendingExamData = parsedData;
      this.previewExamTitle.textContent = parsedData.examTitle;
      this.previewQuestionCount.textContent = parsedData.questions.length;

      this.showAlert(
        `Đã nạp đề mẫu thành công: "${parsedData.examTitle}" (${parsedData.questions.length} câu hỏi).`,
        "success"
      );
      this.examConfigSection.classList.remove("hidden");
    } catch (error) {
      this.showAlert(error.message, "error");
    }
  },

  async handleFileUpload(file) {
    this.importAlert.classList.add("hidden");
    this.examConfigSection.classList.add("hidden");

    try {
      const parsedData = await ExamImporter.parseFile(file);
      this.pendingExamData = parsedData;

      this.previewExamTitle.textContent = parsedData.examTitle;
      this.previewQuestionCount.textContent = parsedData.questions.length;

      this.showAlert(
        `Đã tải đề thi hợp lệ: "${parsedData.examTitle}" (${parsedData.questions.length} câu hỏi).`,
        "success"
      );
      this.examConfigSection.classList.remove("hidden");
    } catch (error) {
      this.pendingExamData = null;
      this.showAlert(error.message, "error");
    }
  },

  showAlert(message, type) {
    this.importAlert.textContent = message;
    this.importAlert.className = `alert alert-${type}`;
    this.importAlert.classList.remove("hidden");
  },

  startNewExam() {
    if (!this.pendingExamData) return;

    const prepared = ShuffleEngine.prepareExamSession(this.pendingExamData, {
      shuffleQuestions: this.chkShuffleQuestions.checked,
      shuffleOptions: this.chkShuffleOptions.checked
    });

    this.state = {
      status: "in_progress",
      examTitle: prepared.examTitle,
      questions: prepared.questions,
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      startTime: Date.now(),
      endTime: null
    };

    StorageManager.save(this.state);
    this.enterExamMode();
  },

  restoreSessionIfAvailable() {
    const saved = StorageManager.load();
    if (!saved || !saved.questions || saved.questions.length === 0) {
      this.switchScreen("setup");
      return;
    }

    this.state = saved;
    if (this.state.status === "in_progress") {
      this.enterExamMode();
    } else if (this.state.status === "submitted") {
      this.enterReviewMode();
    } else {
      this.switchScreen("setup");
    }
  },

  switchScreen(screenName) {
    Object.values(this.screens).forEach((el) => el.classList.add("hidden"));
    this.screens[screenName].classList.remove("hidden");

    if (screenName === "setup") {
      this.btnResetProgress.classList.add("hidden");
    } else {
      this.btnResetProgress.classList.remove("hidden");
    }
  },

  enterExamMode() {
    this.headerExamTitle.textContent = this.state.examTitle;
    this.switchScreen("exam");
    this.startTimer();
    this.renderExamStats();
    this.renderQuestionPalette();
    this.renderCurrentQuestion();
  },

  startTimer() {
    this.stopTimer();
    const updateClock = () => {
      if (!this.state.startTime) return;
      const elapsedSec = Math.floor((Date.now() - this.state.startTime) / 1000);
      const mins = String(Math.floor(elapsedSec / 60)).padStart(2, "0");
      const secs = String(elapsedSec % 60).padStart(2, "0");
      this.statTimer.textContent = `${mins}:${secs}`;
    };
    updateClock();
    this.timerInterval = setInterval(updateClock, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  renderExamStats() {
    const total = this.state.questions.length;
    const answered = this.state.questions.filter(
      (q) => Array.isArray(this.state.userAnswers[q.id]) && this.state.userAnswers[q.id].length > 0
    ).length;
    const unanswered = total - answered;
    const percent = total > 0 ? Math.round((answered / total) * 100) : 0;

    this.statTotal.textContent = total;
    this.statAnswered.textContent = answered;
    this.statUnanswered.textContent = unanswered;
    this.progressBarFill.style.width = `${percent}%`;
  },

  renderCurrentQuestion() {
    const idx = this.state.currentIndex;
    const total = this.state.questions.length;
    const q = this.state.questions[idx];

    this.currentQuestionNumber.textContent = `Câu ${idx + 1} / ${total}`;
    this.currentQuestionType.textContent =
      q.type === "multiple" ? "Chọn nhiều đáp án" : "Chọn một đáp án";

    const isFlagged = this.state.flaggedIds.includes(q.id);
    this.btnToggleFlag.classList.toggle("flagged", isFlagged);
    this.flagText.textContent = isFlagged ? "Đã đánh dấu" : "Đánh dấu xem lại";

    this.questionText.textContent = q.question;

    if (q.image) {
      this.questionImage.src = q.image;
      this.questionImageContainer.classList.remove("hidden");
    } else {
      this.questionImage.src = "";
      this.questionImageContainer.classList.add("hidden");
    }

    const selectedAnswers = this.state.userAnswers[q.id] || [];
    this.optionsContainer.innerHTML = "";

    Object.entries(q.options).forEach(([key, text]) => {
      const isSelected = selectedAnswers.includes(key);
      const optionEl = document.createElement("div");
      optionEl.className = `option-item ${isSelected ? "selected" : ""}`;
      optionEl.setAttribute("role", "button");
      optionEl.setAttribute("tabindex", "0");

      optionEl.innerHTML = `
        <span class="option-key">${key}</span>
        <span class="option-text">${this.escapeHTML(text)}</span>
      `;

      const selectHandler = () => this.handleSelectOption(q, key);
      optionEl.addEventListener("click", selectHandler);
      optionEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectHandler();
        }
      });

      this.optionsContainer.appendChild(optionEl);
    });

    this.btnPrevQuestion.disabled = idx === 0;
    this.btnNextQuestion.disabled = idx === total - 1;
  },

  handleSelectOption(question, optionKey) {
    const currentSelected = this.state.userAnswers[question.id] || [];

    if (question.type === "single") {
      this.state.userAnswers[question.id] = [optionKey];
    } else {
      if (currentSelected.includes(optionKey)) {
        this.state.userAnswers[question.id] = currentSelected.filter((k) => k !== optionKey);
      } else {
        this.state.userAnswers[question.id] = [...currentSelected, optionKey];
      }
    }

    StorageManager.save(this.state);
    this.renderCurrentQuestion();
    this.renderExamStats();
    this.renderQuestionPalette();
  },

  toggleCurrentQuestionFlag() {
    const q = this.state.questions[this.state.currentIndex];
    if (this.state.flaggedIds.includes(q.id)) {
      this.state.flaggedIds = this.state.flaggedIds.filter((id) => id !== q.id);
    } else {
      this.state.flaggedIds.push(q.id);
    }

    StorageManager.save(this.state);
    this.renderCurrentQuestion();
    this.renderQuestionPalette();
  },

  goToQuestion(index) {
    this.state.currentIndex = index;
    StorageManager.save(this.state);
    this.renderCurrentQuestion();
    this.renderQuestionPalette();
  },

  renderQuestionPalette() {
    this.questionPaletteGrid.innerHTML = "";
    this.state.questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = idx + 1;

      const isCurrent = idx === this.state.currentIndex;
      const isAnswered =
        Array.isArray(this.state.userAnswers[q.id]) && this.state.userAnswers[q.id].length > 0;
      const isFlagged = this.state.flaggedIds.includes(q.id);

      btn.className = "palette-btn";
      if (isAnswered) btn.classList.add("answered");
      if (isCurrent) btn.classList.add("current");
      if (isFlagged) btn.classList.add("flagged");

      btn.addEventListener("click", () => this.goToQuestion(idx));
      this.questionPaletteGrid.appendChild(btn);
    });
  },

  confirmSubmitExam() {
    const total = this.state.questions.length;
    const answered = this.state.questions.filter(
      (q) => Array.isArray(this.state.userAnswers[q.id]) && this.state.userAnswers[q.id].length > 0
    ).length;
    const unanswered = total - answered;

    const msg =
      unanswered > 0
        ? `Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`
        : "Bạn đã hoàn thành tất cả câu hỏi. Xác nhận nộp bài để xem kết quả?";

    this.openConfirmModal("Nộp bài thi?", msg, () => {
      this.submitExam();
    });
  },

  submitExam() {
    this.stopTimer();
    this.state.status = "submitted";
    this.state.endTime = Date.now();
    StorageManager.save(this.state);
    this.enterReviewMode();
  },

  enterReviewMode() {
    this.headerExamTitle.textContent = `${this.state.examTitle} (Kết quả)`;
    this.switchScreen("review");

    const evaluation = GradingEngine.evaluate(this.state.questions, this.state.userAnswers);
    this.lastEvaluation = evaluation;

    this.resScore.textContent = evaluation.score;
    this.resTotal.textContent = evaluation.total;
    this.resCorrect.textContent = evaluation.correctCount;
    this.resWrong.textContent = evaluation.wrongCount;
    this.resSkipped.textContent = evaluation.skippedCount;
    this.resAccuracy.textContent = `${evaluation.accuracy}%`;

    document.getElementById("countAll").textContent = evaluation.total;
    document.getElementById("countCorrect").textContent = evaluation.correctCount;
    document.getElementById("countWrong").textContent = evaluation.wrongCount;
    document.getElementById("countSkipped").textContent = evaluation.skippedCount;
    document.getElementById("countFlagged").textContent = this.state.flaggedIds.length;

    const wrongOrSkippedCount = evaluation.wrongCount + evaluation.skippedCount;
    this.btnRetryWrong.disabled = wrongOrSkippedCount === 0;

    this.currentReviewFilter = "all";
    document.querySelectorAll(".btn-filter").forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === "all");
    });

    this.renderReviewList();
  },

  renderReviewList() {
    if (!this.lastEvaluation) return;

    const filtered = this.lastEvaluation.details.filter((item) => {
      if (this.currentReviewFilter === "all") return true;
      if (this.currentReviewFilter === "flagged") {
        return this.state.flaggedIds.includes(item.question.id);
      }
      return item.status === this.currentReviewFilter;
    });

    this.reviewQuestionsList.innerHTML = "";

    if (filtered.length === 0) {
      this.reviewQuestionsList.innerHTML = `
        <div class="card">
          <p class="text-muted" style="margin:0; text-align:center;">
            Không có câu hỏi nào thuộc nhóm phân loại này.
          </p>
        </div>
      `;
      return;
    }

    filtered.forEach((item) => {
      const { question, userSelected, status } = item;
      const originalIndex = this.state.questions.findIndex((q) => q.id === question.id) + 1;
      const isFlagged = this.state.flaggedIds.includes(question.id);

      const statusLabels = {
        correct: { text: "Trả lời đúng", cls: "badge-correct" },
        wrong: { text: "Trả lời sai", cls: "badge-wrong" },
        skipped: { text: "Chưa trả lời", cls: "badge-skipped" }
      };

      const card = document.createElement("article");
      card.className = `card review-item status-${status}`;

      let optionsHTML = "";
      Object.entries(question.options).forEach(([key, text]) => {
        const isCorrectOpt = question.correctAnswers.includes(key);
        const isUserOpt = userSelected.includes(key);

        let optClass = "review-option";
        let tagHTML = "";

        if (isCorrectOpt) {
          optClass += " opt-correct";
          tagHTML = `<span class="opt-tag tag-correct">Đáp án đúng</span>`;
        } else if (isUserOpt && !isCorrectOpt) {
          optClass += " opt-wrong";
          tagHTML = `<span class="opt-tag tag-user-wrong">Bạn đã chọn</span>`;
        }

        if (isCorrectOpt && isUserOpt) {
          tagHTML = `<span class="opt-tag tag-correct">Bạn chọn đúng</span>`;
        }

        optionsHTML += `
          <div class="${optClass}">
            <span><strong>${key}.</strong> ${this.escapeHTML(text)}</span>
            ${tagHTML}
          </div>
        `;
      });

      const imageHTML = question.image
        ? `<div class="question-image"><img src="${this.escapeHTML(question.image)}" alt="Hình minh họa" /></div>`
        : "";

      const explanationHTML = question.explanation
        ? `<div class="explanation-box"><strong>Giải thích:</strong> ${this.escapeHTML(question.explanation)}</div>`
        : "";

      card.innerHTML = `
        <div class="review-item-header">
          <div>
            <strong>Câu ${originalIndex}</strong> <span class="text-muted">(${question.id})</span>
            ${isFlagged ? '<span class="status-badge badge-skipped">🚩 Đã đánh dấu</span>' : ""}
          </div>
          <span class="status-badge ${statusLabels[status].cls}">${statusLabels[status].text}</span>
        </div>
        <div class="question-text">${this.escapeHTML(question.question)}</div>
        ${imageHTML}
        <div>${optionsHTML}</div>
        ${explanationHTML}
      `;

      this.reviewQuestionsList.appendChild(card);
    });
  },

  retryWrongQuestions() {
    if (!this.lastEvaluation) return;

    const wrongQuestions = this.lastEvaluation.details
      .filter((item) => item.status === "wrong" || item.status === "skipped")
      .map((item) => item.question);

    if (wrongQuestions.length === 0) return;

    this.state = {
      status: "in_progress",
      examTitle: `Ôn tập câu sai - ${this.state.examTitle.replace(" (Kết quả)", "")}`,
      questions: wrongQuestions,
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      startTime: Date.now(),
      endTime: null
    };

    StorageManager.save(this.state);
    this.enterExamMode();
  },

  retakeFullExam() {
    this.state = {
      status: "in_progress",
      examTitle: this.state.examTitle.replace(" (Kết quả)", ""),
      questions: this.state.questions,
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      startTime: Date.now(),
      endTime: null
    };

    StorageManager.save(this.state);
    this.enterExamMode();
  },

  openConfirmModal(title, message, onConfirm) {
    this.modalTitle.textContent = title;
    this.modalMessage.textContent = message;
    this.confirmModal.classList.remove("hidden");

    const cleanup = () => {
      this.confirmModal.classList.add("hidden");
      this.btnModalConfirm.onclick = null;
      this.btnModalCancel.onclick = null;
    };

    this.btnModalCancel.onclick = cleanup;
    this.btnModalConfirm.onclick = () => {
      cleanup();
      onConfirm();
    };
  },

  escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());

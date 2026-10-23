const STORAGE_KEYS = {
  HISTORY: "kuis_pintar_sd_history_v1",
  AUDIO_MUTED: "kuis_pintar_sd_audio_muted"
};

const QuizStorage = (function () {
  let memoryStorageFallback = {};

  function isLocalStorageAvailable() {
    try {
      const testKey = "__test_storage__";
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn("LocalStorage tidak tersedia (mungkin mode privat atau pembatasan izin). Menggunakan penyimpanan sementara.");
      return false;
    }
  }

  const hasStorage = isLocalStorageAvailable();

  function getAllHistory() {
    try {
      let rawData;
      if (hasStorage) {
        rawData = window.localStorage.getItem(STORAGE_KEYS.HISTORY);
      } else {
        rawData = memoryStorageFallback[STORAGE_KEYS.HISTORY];
      }

      if (!rawData) return [];
      const parsed = JSON.parse(rawData);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("Gagal membaca riwayat kuis:", err);
      return [];
    }
  }

  function saveHistory(resultData) {
    try {
      const historyList = getAllHistory();

      const newRecord = {
        id: "kuis_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
        timestamp: Date.now(),
        dateFormatted: formatDateTime(new Date()),
        studentName: (resultData.studentName || "").trim() || "Murid Hebat",
        grade: resultData.grade,
        subjectId: resultData.subjectId,
        subjectName: resultData.subjectName,
        religion: resultData.religion || null,
        religionName: resultData.religionName || null,
        level: resultData.level || "mudah",
        totalQuestions: resultData.totalQuestions,
        correctCount: resultData.correctCount,
        wrongCount: resultData.wrongCount,
        score: resultData.score,
        reviewItems: resultData.reviewItems || []
      };

      historyList.unshift(newRecord);

      const trimmedList = historyList.slice(0, 100);

      const serialized = JSON.stringify(trimmedList);
      if (hasStorage) {
        window.localStorage.setItem(STORAGE_KEYS.HISTORY, serialized);
      } else {
        memoryStorageFallback[STORAGE_KEYS.HISTORY] = serialized;
      }

      return newRecord;
    } catch (err) {
      console.error("Gagal menyimpan riwayat kuis:", err);
      return null;
    }
  }

  function deleteHistoryById(id) {
    try {
      const historyList = getAllHistory();
      const filtered = historyList.filter(item => item.id !== id);

      const serialized = JSON.stringify(filtered);
      if (hasStorage) {
        window.localStorage.setItem(STORAGE_KEYS.HISTORY, serialized);
      } else {
        memoryStorageFallback[STORAGE_KEYS.HISTORY] = serialized;
      }
      return true;
    } catch (err) {
      console.error("Gagal menghapus riwayat ID " + id, err);
      return false;
    }
  }

  function clearAllHistory() {
    try {
      if (hasStorage) {
        window.localStorage.removeItem(STORAGE_KEYS.HISTORY);
      } else {
        delete memoryStorageFallback[STORAGE_KEYS.HISTORY];
      }
      return true;
    } catch (err) {
      console.error("Gagal mengosongkan riwayat kuis", err);
      return false;
    }
  }

  function getHistoryById(id) {
    const list = getAllHistory();
    return list.find(item => item.id === id) || null;
  }

  function getAudioMuted() {
    try {
      if (hasStorage) {
        return window.localStorage.getItem(STORAGE_KEYS.AUDIO_MUTED) === "true";
      }
      return memoryStorageFallback[STORAGE_KEYS.AUDIO_MUTED] === "true";
    } catch (e) {
      return false;
    }
  }

  function setAudioMuted(isMuted) {
    try {
      const val = isMuted ? "true" : "false";
      if (hasStorage) {
        window.localStorage.setItem(STORAGE_KEYS.AUDIO_MUTED, val);
      } else {
        memoryStorageFallback[STORAGE_KEYS.AUDIO_MUTED] = val;
      }
    } catch (e) {

    }
  }

  function formatDateTime(dateObj) {
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const d = dateObj.getDate();
    const m = months[dateObj.getMonth()];
    const y = dateObj.getFullYear();
    const hh = String(dateObj.getHours()).padStart(2, "0");
    const mm = String(dateObj.getMinutes()).padStart(2, "0");
    return `${d} ${m} ${y}, pukul ${hh}:${mm} WIB`;
  }

  return {
    isLocalStorageAvailable: () => hasStorage,
    getAllHistory,
    getHistoryById,
    saveHistory,
    deleteHistoryById,
    clearAllHistory,
    getAudioMuted,
    setAudioMuted,
    formatDateTime
  };
})();

if (typeof window !== "undefined") {
  window.QuizStorage = QuizStorage;
}

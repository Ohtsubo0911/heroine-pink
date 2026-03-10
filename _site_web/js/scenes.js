document.addEventListener('DOMContentLoaded', () => {

  const videoContainers = document.querySelectorAll('.scenes-detail');
  const trigger = document.getElementById('play-sequential');

  let sequentialMode = false;
  let currentIndex = -1;

  function parseTime(value) {
    if (!value) return NaN;
    if (value.includes(':')) {
      const parts = value.split(':').map(Number);
      if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
      if (parts.length === 2) return parts[0]*60 + parts[1];
    }
    return parseFloat(value);
  }

  // -----------------------------
  // 🔁 通常ループモード
  // -----------------------------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (sequentialMode) return;

      const video = entry.target.querySelector('video');
      if (!video) return;

      const start = parseTime(video.dataset.start) || 0;
      const end = parseTime(video.dataset.end);

      if (entry.isIntersecting) {

        const startPlayback = () => {
          video.currentTime = start;

          video.addEventListener('seeked', () => {
            video.play().catch(() => {});
          }, { once: true });
        };

        if (video.readyState >= 1) {
          startPlayback();
        } else {
          video.addEventListener('loadedmetadata', startPlayback, { once: true });
        }

      } else {
        video.pause();
      }

      // 🔥 ループ処理（sequential中は無効）
      if (!video._loopAttached) {

        video._loopAttached = true;

        video.addEventListener('timeupdate', () => {

          if (sequentialMode) return;

          const effectiveEnd = isNaN(end) ? video.duration : end;

          if (video.currentTime >= effectiveEnd) {

            video.pause();
            video.currentTime = start;

            video.addEventListener('seeked', () => {
              video.play().catch(() => {});
            }, { once: true });
          }
        });
      }

    });
  }, { threshold: 0.5 });

  videoContainers.forEach(container => {
    const video = container.querySelector('video');
    if (!video) return;

    video.muted = true;
    observer.observe(container);

    // マウスカーソルを指の形にしてタップ可能であることを示す
    container.style.cursor = 'pointer';

  });

  // -----------------------------
  // 🔊 【追加】タップでミュート切り替え
  // -----------------------------
  document.addEventListener('click', (e) => {
    // タップされた場所から一番近い .scenes-detail を取得
    const container = e.target.closest('.scenes-detail');
    if (!container) return;

    // もし連続再生ボタン自体をタップした場合は、このミュート処理はスキップ
    if (trigger && (e.target === trigger || trigger.contains(e.target))) return;

    const video = container.querySelector('video');
    if (!video) return;

    // ミュート状態を反転
    video.muted = !video.muted;
    
    console.log("Container clicked!");
    console.log("Muted state changed to:", video.muted);

    // ミュート解除時に確実に再生を促す（ブラウザ制約対策）
    if (!video.muted) {
      video.play().catch(err => console.error("Play error:", err));
    }
  });

  // -----------------------------
  // ▶ 連続再生モード
  // -----------------------------

  function stopAllVideos() {
    videoContainers.forEach(container => {
      const v = container.querySelector('video');
      if (!v) return;
      v.pause();
      v.muted = true;
    });
  }

  function playSequential() {

    currentIndex++;

    if (currentIndex >= videoContainers.length) {
      sequentialMode = false;
      currentIndex = -1;

      // 🔥 通常ループ再開
      videoContainers.forEach(container => {
        const video = container.querySelector('video');
        if (!video) return;

        const start = parseTime(video.dataset.start) || 0;
        video.muted = true;
        video.currentTime = start;

        video.addEventListener('seeked', () => {
          video.play().catch(() => {});
        }, { once: true });
      });
      return;
    }

    const container = videoContainers[currentIndex];
    const video = container.querySelector('video');

    const start = parseTime(video.dataset.start) || 0;
    const end = parseTime(video.dataset.end);
    const effectiveEnd = isNaN(end) ? video.duration : end;

    stopAllVideos();

    window.smoothScroll(container, {
      block: 'center'
    });

    video.muted = false;
    video.currentTime = start;

    video.addEventListener('seeked', () => {
      video.play().catch(() => {});
    }, { once: true });

    const onTimeUpdate = () => {
      if (video.currentTime >= effectiveEnd) {
        video.removeEventListener('timeupdate', onTimeUpdate);
        video.muted = true;
        playSequential();
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
  }

  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();

      sequentialMode = true;
      currentIndex = -1;

      stopAllVideos();
      playSequential();
    });
  }

});

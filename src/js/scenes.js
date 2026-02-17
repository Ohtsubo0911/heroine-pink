document.addEventListener('DOMContentLoaded', () => {

  const videoContainers = document.querySelectorAll('.scenes-detail');

  function parseTime(value) {
    if (!value) return NaN;
    if (value.includes(':')) {
      const parts = value.split(':').map(Number);
      if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
      if (parts.length === 2) return parts[0]*60 + parts[1];
    }
    return parseFloat(value);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
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

      // 🔥 end監視（毎回登録しないよう注意）
      if (!video._endListenerAttached) {
        video._endListenerAttached = true;

        video.addEventListener('timeupdate', () => {
            const effectiveEnd = isNaN(end) ? video.duration : end;

            if (video.currentTime >= effectiveEnd) {

                video.pause(); // いったん止める

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
    observer.observe(container);
  });

});

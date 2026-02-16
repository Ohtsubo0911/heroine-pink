document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.scenes-detail');

    // 時間文字列を秒数に変換する関数
    // "1:23:45" → 5025秒、"1:30" → 90秒、"5.2" → 5.2秒
    function parseTime(value) {
        if (!value) return NaN;
        if (value.includes(':')) {
            const parts = value.split(':').map(Number);
            if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
            if (parts.length === 2) return parts[0] * 60 + parts[1];
        }
        return parseFloat(value);
    }

    // 1. 画面内に入ったら再生、出たら停止（Intersection Observer）
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (!video) return;

            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 }); // 50%以上見えたら再生開始

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        if (!video) return;

        observer.observe(container);

        // メタデータ読み込み後に正確な開始・終了位置を確定させる
        video.addEventListener('loadedmetadata', () => {
            const start = parseTime(video.dataset.start) || 0;
            const end = parseTime(video.dataset.end) || video.duration;

            video.currentTime = start;

            video.addEventListener('timeupdate', () => {
                if (video.currentTime >= end) {
                    video.currentTime = start;
                    video.play();
                }
            });
        });
    });
});

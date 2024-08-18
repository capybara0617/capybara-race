window.onload = function() {
    const capybara = document.getElementById('capybara');
    const scareAudio = document.getElementById('scare-audio');
    
    // 播放音频
    scareAudio.volume = 1.0; // 设置音量最大
    scareAudio.play();
    
    // 控制图片闪烁
    let flashing = setInterval(() => {
        capybara.style.display = (capybara.style.display === 'none') ? 'block' : 'none';
    }, 0.1); // 每100毫秒闪烁一次

    };
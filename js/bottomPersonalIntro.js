// 创建一个点击事件处理函数
function handleButtonClick() {
  // 在这里添加你的导航逻辑，例如跳转到自定义 HTML 页面
  window.location.href = '/personalIntro.html';
}

// 获取按钮元素
const customButton = document.getElementById('customButton');

// 添加点击事件监听器
customButton.addEventListener('click', handleButtonClick);

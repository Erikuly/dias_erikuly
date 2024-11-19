document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tab = document.getElementById(button.dataset.tab);
  
        // Проверяем, активна ли вкладка
        if (tab.classList.contains('active')) {
          // Если активна, скрываем её
          tab.classList.remove('active');
        } else {
          // Если не активна, скрываем все другие вкладки и открываем текущую
          contents.forEach(content => content.classList.remove('active'));
          tab.classList.add('active');
        }
      });
    });
  });
  
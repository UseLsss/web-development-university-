document.querySelectorAll('.menu .main-menu > li').forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
        // Найти вложенный список
        const subMenu = menuItem.querySelector('.submenu');

        // Если есть вложенное подменю и клик не был на ссылке в подменю
        if (subMenu && !event.target.closest('.submenu a')) {
            const isVisible = subMenu.style.display === 'block';

            // Закрыть все вложенные списки
            document.querySelectorAll('.menu .submenu').forEach(function (submenu) {
                submenu.style.display = 'none';
            });

            // Открыть вложенный список текущего элемента, если он был скрыт
            subMenu.style.display = isVisible ? 'none' : 'block';

            // Отключить стандартное поведение перехода по ссылке в подменю
            event.preventDefault();
        }
    });
});

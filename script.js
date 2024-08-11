document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.icon');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.id.replace('tab', 'content');

            // Удаление активного класса со всех вкладок и контент-блоков
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Добавление активного класса к текущей вкладке и соответствующему контент-блоку
            tab.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
});
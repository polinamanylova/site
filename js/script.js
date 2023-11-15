$(document).ready(function() {
  $('#ratingForm').submit(function(event) {
    event.preventDefault();
    var rating = $('input[name=rating]:checked').val();
    alert('Вы поставили оценку ' + rating);
  });

  const addSkillForm = document.getElementById('addSkillForm');
  const newSkillInput = document.getElementById('newSkill');
  const authorInput = document.getElementById('authorInput');
  const skillsList = document.getElementById('skillsList');

  if (addSkillForm && newSkillInput && authorInput && skillsList) {
    addSkillForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const newSkill = newSkillInput.value;
      const author = authorInput.value;

      if (newSkill.trim() !== '' && author.trim() !== '') {
        const newSkillItem = document.createElement('div');
        
        // Создаем элемент p для отображения текста с классом
        const skillDetails = document.createElement('p');
        skillDetails.textContent = Рекомендованный навык: ${newSkill}, Автор: ${author};
        skillDetails.classList.add('skill-item'); // добавляем класс для стилизации

        // Добавляем элемент p к новому навыку
        newSkillItem.appendChild(skillDetails);

        // Добавляем новый навык к skillsList
        skillsList.appendChild(newSkillItem);

        // Очищаем поля ввода
        newSkillInput.value = '';
        authorInput.value = '';

        // Выводим информацию в консоль для отладки
        console.log('Навык и автор добавлены успешно.');
      } else {
        // Если поля пустые, выводим информацию в консоль
        console.log('Поля не должны быть пустыми.');
      }
    });
  } else {
    // Если не удается найти элементы, выводим информацию в консоль
    console.log('Не удается найти все необходимые элементы.');
  }

  const themeSwitch = document.querySelector('.theme-switch__checkbox');
  const body = document.body;

  themeSwitch.addEventListener('change', function () {
      if (themeSwitch.checked) {
          body.classList.add('dark-theme');
      } else {
          body.classList.remove('dark-theme');
      }
  });

  // Вызываем событие изменения темы при загрузке страницы
  themeSwitch.dispatchEvent(new Event('change'));
});




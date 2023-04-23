/* Сверстать форму с полями (name, surname, age) и кнопкой “submit”.
При нажатии на кнопку “submit” открывается модальное окно и в нём есть информация из заполненных полей.
Если какое-то поле не заполнено, окно не открывается, показывается ошибка.
В модальном окне есть кнопка “ok”, при нажатии на неё, окно закрывается. */

'use strict';

const setMessage = () => {
  const nI = document.querySelector('input[name=name]');
  const sI = document.querySelector('input[name=surname]');
  const aI = document.querySelector('input[name=age]');

  const fields = [nI, sI, aI];

  const emptyField = fields.find(el => !el.value);

  if (emptyField) {
    const label = emptyField.parentNode.querySelector('label').innerText;
    alert(`Поле '${label}' не заполнено`);
    return;
  }

  const modal = document.querySelector('.message');

  for (const f of fields) {
    const field = modal.querySelector(`.text[name=${f.getAttribute('name')}]`);
    if (field) field.innerText = f.value;
  }

  document.querySelector('.modal').classList.add('visible');
}

const closeModal = () => {
  document.querySelector('.modal').classList.remove('visible');
}


document.querySelector('button[name=submit]').addEventListener('click', setMessage);
document.querySelector('.modal .button').addEventListener('click', closeModal);
const display = document.getElementById('display');              // Получаем поле ввода для отображения
const buttons = document.querySelectorAll('.btn');               // Все кнопки с цифрами и операторами
const clearBtn = document.getElementById('clear');               // Кнопка очистки
const equalsBtn = document.getElementById('equals');             // Кнопка "равно"

let expression = '';                                             // Здесь накапливается всё введенное выражени

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;                          // Получаем значение из data-атрибута кнопки
    if (value) {
      expression += value;                                       // Добавляем значение к выражению
      display.value = expression;                                // Отображаем текущее выражение в поле ввода
    }
  });
});

clearBtn.addEventListener('click', () => {
  expression = '';                                               // Обнуляем выражение
  display.value = '';                                            // Очищаем поле ввода
});

equalsBtn.addEventListener('click', () => {
  try {
    const safeExpression = expression.replace(/\^/g, '**');      // Заменяем ^ на ** для JS-степени (адаптация)
    const result = eval(safeExpression);                         // Вычисляем выражение
    display.value = result;                                      // Вывод результата
    expression = result.toString();                              // Сохраняем результат для дальнейших операций
  } catch (error) {
    display.value = 'Ошибка';
    expression = '';                                             // Если вычисление невозможно, то сбрасываем
  }
});

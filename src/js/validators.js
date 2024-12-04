export function isValidInn(value) {
  // Удаляем пробелы и проверяем, что значение не пустое
  if (!value || typeof value !== "string") {
    return false; // Возвращаем false, если значение пустое или не строка
  }

  // Извлекаем только цифры из строки
  const cardNumber = value.match(/\d/g);

  // Если нет цифр, возвращаем false
  if (!cardNumber) {
    return false;
  }

  // Преобразуем массив цифр в строку
  const cardNumberString = cardNumber.join("");
  let sum = 0;

  // Определяем, четная или нечетная длина номера карты
  const isEvenLength = cardNumberString.length % 2 === 0;

  for (let i = 0; i < cardNumberString.length; i++) {
    let digit = +cardNumberString[i]; // Преобразуем символ в число

    // Увеличиваем сумму в зависимости от позиции цифры
    if ((isEvenLength && i % 2 === 0) || (!isEvenLength && i % 2 !== 0)) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  // Проверяем, делится ли сумма на 10
  return sum % 10 === 0;
}

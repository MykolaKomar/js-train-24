console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  function fetchWithError() {
    const errorMessage = "Помилка при з'єднанні з сервером";
    return Promise.reject(errorMessage);
  }

  // Викликаємо функцію fetchWithError
  fetchWithError()
    // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
    .then((data) => {
      console.log("Отримані дані:", data);
    })
    // Якщо проміс виконаний з помилкою виводимо в консоль помилку
    .catch((error) => {
      console.error("Помилка під час виконання промісу:", error);
    })
    .finally(() => {
      console.log("Завершено виконання промісу");
    });
}

// Викликаємо функцію task10
task9();

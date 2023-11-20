console.log("Завдання: 8 ==============================");

function task8() {
  // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
  // Створюємо fakeData константу з данними { name: "John",age: 30}
  // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
  const fetchFakeData = () => {
    const fakeData = { name: "John", age: 30 };
    return Promise.resolve(fakeData);
  };
  // Викликаємо функцію fetchFakeData
  fetchFakeData()
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

// Викликаємо функцію task8
task8();

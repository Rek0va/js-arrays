let array = [];

function processCommand(command) {
  let [action, value] = command.split(",").map((item) => item.trim());

  switch (action) {
    case "add":
      array.push(value);
      alert(`Элемент "${value}" успешно добавлен.`);
      console.log(`Элемент "${value}" успешно добавлен.`);
      break;
    case "del":
      let index = array.indexOf(value);
      if (index !== -1) {
        array.splice(index, 1);
        alert(`Элемент "${value}" успешно удален.`);
        console.log(`Элемент "${value}" успешно удален.`);
      } else {
        alert(`Элемент "${value}" не найден в массиве.`);
      }
      break;
    case "stop":
      alert("Программа завершена.");    
      return true;
    default:
      console.log("Некорректная команда.");
  }
  return false;
}

function inputLoop() {
  while (true) {
    let command = prompt(
      'Введите команду ("add, элемент", "del, элемент" или "stop"):'
    );
    if (command === null) {
      console.log("Программа прервана пользователем.");
      console.log("Конечный результат:");
      console.log(array);
      break;
    }
    if (processCommand(command)) {
      break;
    }
  }
}

inputLoop();

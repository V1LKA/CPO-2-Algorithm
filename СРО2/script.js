// создаём очередь
let queue = [];

// добавить клиента
function addClient() {
    const input = document.getElementById("clientName");
    const name = input.value.trim();

    if (name === "") {
        alert("Введите имя клиента");
        return;
    }

    queue.push(name); // добавление в конец (FIFO)
    input.value = "";

    updateQueue();
}

// обслужить клиента
function serveClient() {
    if (queue.length === 0) {
        alert("Очередь пуста");
        return;
    }

    const served = queue.shift(); // удаляем первого
    alert("Обслужен: " + served);

    updateQueue();
}

// обновление списка
function updateQueue() {
    const list = document.getElementById("queueList");
    list.innerHTML = "";

    queue.forEach((client, index) => {
        const li = document.createElement("li");
        li.textContent = (index + 1) + ". " + client;
        list.appendChild(li);
    });
}
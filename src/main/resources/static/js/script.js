const app = document.getElementById('app');

// Відображення дати та часу
const date = new Date();
const dateTimeElement = document.createElement('p');
dateTimeElement.textContent = `Дата та час: ${date.toLocaleString()}`;
app.appendChild(dateTimeElement);

// Зміна кольору тексту
const changeColorButton = document.createElement('button');
changeColorButton.textContent = 'Змінити колір тексту';
changeColorButton.addEventListener('click', () => {
    const elements = document.getElementsByTagName('p');
    for (const element of elements) {
        element.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
});
app.appendChild(changeColorButton);

// Створення динамічного контенту
const listElement = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    const listItemElement = document.createElement('li');
    listItemElement.textContent = `Пункт ${i}`;
    listElement.appendChild(listItemElement);
}
app.appendChild(listElement);

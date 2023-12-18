const userName = prompt("Как тебя зовут?");
const userAge = prompt("Сколько тебе лет?");
const formattedUserName = userName.trim().toLowerCase();
const formattedUserAge = Number(userAge.trim());

alert(`Вас зовут, ${formattedUserName} и вам ${formattedUserAge}`);
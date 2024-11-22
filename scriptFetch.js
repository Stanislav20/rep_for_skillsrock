//Задание 3: Асинхронный JavaScript (1.5 часа)
//1. Fetch API — Случайные пользователи

//ВНИМАНИЕ!!! Не получилось получить данные юзеров с Random User API, поэтому взял данные с другого сервиса.

const preloader = document.querySelector('.preloader')
const usersList = document.getElementById('users-list')

async function fetchUsers() { 
	try {
		const response = await fetch('https://reqres.in/api/users');
		const data = await response.json();
		addUserList(data.data)
		usersList.append(resultAddUserList)
		preloader.style.display='none'
		usersList.style.display='flex'
	} catch (error) {
		console.error('Error:', error);
		alert(error)
	}
}
fetchUsers();

function addUserList (arr) {  //функция добавления списка юзеров в разметку HTML.
  let ulElem = document.createElement('ul')
  ulElem.className = 'ulElem'
  arr.map((user) => {
    let liUser = document.createElement('li')
    liUser.className = 'liUser'
    
    let imgUser = document.createElement('img')
    imgUser.src = user.avatar
    imgUser.className = 'imgUser'
    liUser.appendChild(imgUser)

    let nameUser = document.createElement('h3')
    nameUser.innerHTML = `${user.first_name} ${user.last_name}`
    nameUser.className = 'nameUser'
    liUser.appendChild(nameUser)

    let emailUser = document.createElement('p')
    emailUser.innerHTML = user.email
    emailUser.className = 'emailUser'
    liUser.appendChild(emailUser)

    ulElem.appendChild(liUser)
  })
  resultAddUserList = ulElem;
}
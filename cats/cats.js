// Это приложение выводит то колличество котиков, которое вы указали в строке ввода. Работает как по кнопке, так и по клавише Enter.

// Нет адаптивнрой верстки

const btn = document.querySelector(".cat-section__input-button");
const card = document.querySelector(".card");
const input = document.querySelector(".cat-section__input-number");

const API_KEY =
  "live_WGwjuoqZKyE7sHH9ObXDprAHevOWYLS8kfEKC40YRLBEYhSQMDZc4URD3aZOhYTS";

let countOfCats = 0;

async function fetchData() {
    // Проверяем, чтобы функция не работала, если кол-во котиков === нулю.
    if (countOfCats === 0) {
        alert("Введите количество котиков!"); 
        return;
    }
    try {
    const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=${countOfCats}&breed_ids=beng&api_key=${API_KEY}`;
    const res = await fetch(apiUrl, {
        method: "GET",
        headers: {
        Autorization: `${API_KEY}`,
        "Content-type": "application/json",
        },
    });

    if (!res.ok) throw new Error("Error");

    const data = await res.json();
    await data.forEach((item, index) => {
        card.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="img">
            <img src="${data[index].url}" alt="" >
        </div>
        `
        );
    });
    } catch (error) {
    console.error(error);
    }
}

btn.addEventListener("click", () => {
    if (countOfCats === 0) {
        alert('Введите количество котиков!')
        return;
    }
    fetchData();
    setTimeout(() => (input.value = ""), 200);
    // Обнуляем счетик котов под капотом.
    countOfCats = 0;
})

input.addEventListener("input", (e) => {
    // Проверяем, чтобы velue не начиналось с 0.
    let catCounter = e.target.value;
    if (catCounter.startsWith(0)) setTimeout(() => (input.value = ""), 300);
    // Присваиваем счетчику значение input (кол-во котят) Для передачи в API.
    countOfCats = catCounter;
});

input.addEventListener("keydown", (e) => {
    // Фикс бага с двойным бекспейсом
    if (e.key === 'Backspace') {
        return;
    }
    // Проверяем, является ли значение числом + удаляем пробелы.
    if (Number(e.key).toString() === 'NaN' || e.key === ' ') setTimeout(() => (input.value = input.value.slice(0, -1)), 300);
    // Если Enter, то жмем кнопку и удаляем value в input.
    if (e.key === "Enter") {
        fetchData();
        input.value = "";
        // Обнуляем счетик котов под капотом.
        countOfCats = 0;
    }
});


// Асинхронная форма авторизации

// const contactForm = document.querySelector(".contact");
// const modal = document.querySelector(".modal");
// const closeButton = document.querySelector(".close");
// const url = "https://jsonplaceholder.typicode.com/posts";

// contactForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const formData = new FormData(contactForm);
//   const data = Object.fromEntries(formData.entries());

//   try {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!res.ok) throw new Error("Error");

//     const result = await res.json();
//     console.log("Success", result);

//     showModal();
//   } catch (error) {
//     console.error(error);
//   }
// });

// // modal

// function showModal() {
//   modal.style.opacity = 1;
// }

// closeButton.addEventListener("click", () => {
//   modal.style.opacity = 0;
// });

// window.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.opacity = 0;
//   }
// });


// Стили

// .contact {
//     text-align: center;
// }


// .form-group {
//     display: flex;
//     flex-direction: column;
//     max-width: 300px;
//     border: 1px solid rgb(245, 222, 178);
//     margin: 0 auto;
//     padding: 20px 20px;
//     padding-bottom: 35px;
//     border-radius: 5px;
//     background-color: #7c7761;
// }

// .form-group__name-label {
//     margin-bottom: 10px;
// }

// .form-group__text {
//     width: 200px;
//     height: 30px;
//     margin: 0 auto;
//     margin-bottom: 20px;
//     border-radius: 5px;
// }

// .form-group__email-label {
//     margin-bottom: 10px;
// }

// .form-group__email {
//     width: 200px;
//     height: 30px;
//     margin: 0 auto;
//     margin-bottom: 20px;
//     border-radius: 5px;
// }

// .form-group__btn {
//     width: 150px;
//     height: 40px;
//     margin: 0 auto;
//     margin-bottom: 20px;
//     border-radius: 5px;
// }

// .modal {
//     opacity: 0;
//     max-width: 300px;
//     height: 70px;
//     border: 1px solid rgb(245, 222, 178);
//     margin: 0 auto;
//     border-radius: 5px;
//     background-color: #7c7761;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     padding: 0 10px;
//     transition: all 0.3s ease;
// }

// .close {
//     cursor: pointer;
// }


// HTML

// <div class="container">
//     <form class="contact">
//         <div class="form-group">
//             <label for="name" class="form-group__name-label">Имя</label>
//             <input type="text" required class="form-group__text">
//             <label for="email" class="form-group__email-label">Email</label>
//             <input 
//             type="email"
//             class="form-control form-group__email"
//             id="email"
//             name="email"
//             required
//             >
//             <button type="submit" class="btn form-group__btn">Отправить</button>
//         </div>
//     </form>
// </div>

// <div class="modal">
//         <p>Ваше сообщение было отправлено!</p>
//         <span class="close">&times;</span>
// </div>
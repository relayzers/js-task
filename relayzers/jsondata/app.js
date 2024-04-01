const url = "http://localhost:3000/users";
const userMain = document.querySelector(".users");

const fetchUsers = async () => {
        const response = await axios.get(url);
        const users = response.data;

        users.forEach(user => {
            const { name, surname, description, image } = user;
            
            userMain.innerHTML += `
            <div class="user">
            <img src="${image}" alt="">
            <h2>${name} ${surname}</h2>
            <p>${description}</p>
        </div>
            `;
           
        });
    };
    
    fetchUsers();
    








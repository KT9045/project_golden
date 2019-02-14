// document.getElementById("book_place_right_now").addEventListener("click", () => document.getElementById("form").style.display = "block")

// const form = document.getElementById("form")

// form.addEventListener("submit", (ev) => {
//     ev.preventDefault()
//     localStorage.setItem('username', form.elements["username"].value);
// })



$(document).ready(function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            let listUsers = '';
            for (let i = 0; i < json.length; i++) {
                const element = json[i];
                listUsers += `
                <div class="user-item">
                    <h2>${element.name} ${element.username}</h2>
                    <p>City: ${element.address.city}<p/>
                    <a href="${element.email}">${element.email}</a>
                </div>`
            }

            $("#users .container .user-list").append(listUsers);
            console.log(json);
        });

        $('.open-menu').click(function(){
            $('body').toggleClass('menu-opened');
            return false;
        });//btn-open-manu

});

$(function(s){
    $('#phone').mask("(999)-999-9999")
})
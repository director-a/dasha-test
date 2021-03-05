var press = 0;

function higherPrice(){


    // location.reload();
    document.getElementById('sopingcart-input').removeAttribute('class', 'none');  
    document.getElementById('sopingcart-input-1').removeAttribute('class', 'none');  
    document.getElementById('sopingcart-input-2').setAttribute('class', 'none');  
    document.getElementById('sopingcart-input-2-1').setAttribute('class', 'none');  

    // $('#sopingcart-input-2').detach();
    // $('#sopingcart-input-2-1').detach();

    $('.cataloge-cards-sorting').detach();
   
    $("#sopingcart-input").append('<div class="cataloge-cards cataloge-cards1">\
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-4.jpg" alt="">\
    <span class="shoe-name">Крісло, ГУННАРЕД темно-сірий/під дерево</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price3">499$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-5.jpg" alt="">\
	<span class="shoe-name">ВЕДБУ Крісло із високою спинкою</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">489$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-6.jpg" alt="">\
	<span class="shoe-name">Крісло, чорно-коричневий чорний</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">469$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-8.jpg" alt="">\
	<span class="shoe-name">Дитяче крісло, ВІССЛЕ сірий</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">349$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>')

$("#sopingcart-input-1").append('<div class="cataloge-cards cataloge-cards-sorting">\
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-2.jpg" alt="">\
    <span class="shoe-name">Крісло, коричневий/КНІСА світло-бежевий</span>\
   <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price1">439$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-3.jpg" alt="">\
    <span class="shoe-name">ТУЛЛЬСТА <br> Крісло</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price2">419$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-1.jpg" alt="">\
    <span class="shoe-name">Крісло, ГУННАРЕД темно-сірий</span>\
    <span class="availability available">In stock</span>\
    <span class="shoe-price" id="shoe-price0">399$</span>\
    <button type="button" class="button-card" id="button-card" onclick="increase()" >Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-7.jpg" alt="">\
	<span class="shoe-name">Крісло-гойдалка,темно-синій</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">389$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    </div>')
    press++;
    if (press>1){
    $('.cataloge-cards1').detach();
    $('.cataloge-cards-sorting').detach();


    $("#sopingcart-input").append('<div class="cataloge-cards cataloge-cards1">\
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-4.jpg" alt="">\
    <span class="shoe-name">Крісло, ГУННАРЕД темно-сірий/під дерево</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price3">499$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-5.jpg" alt="">\
	<span class="shoe-name">ВЕДБУ Крісло із високою спинкою</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">489$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-6.jpg" alt="">\
	<span class="shoe-name">Крісло, чорно-коричневий чорний</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">469$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-8.jpg" alt="">\
	<span class="shoe-name">Дитяче крісло, ВІССЛЕ сірий</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">449$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>')

$("#sopingcart-input-1").append('<div class="cataloge-cards cataloge-cards-sorting">\
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-2.jpg" alt="">\
    <span class="shoe-name">Крісло, коричневий/КНІСА світло-бежевий</span>\
   <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price1">439$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-3.jpg" alt="">\
    <span class="shoe-name">ТУЛЛЬСТА <br> Крісло</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price2">419$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-1.jpg" alt="">\
    <span class="shoe-name">Крісло, ГУННАРЕД темно-сірий</span>\
    <span class="availability available">In stock</span>\
    <span class="shoe-price" id="shoe-price0">399$</span>\
    <button type="button" class="button-card" id="button-card" onclick="increase()" >Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-7.jpg" alt="">\
	<span class="shoe-name">Крісло-гойдалка,темно-синій</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">389$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    </div>')}
}

function lowerPrice(){
    document.getElementById('sopingcart-input').setAttribute('class', 'none');  
    document.getElementById('sopingcart-input-1').setAttribute('class', 'none');  
    document.getElementById('sopingcart-input-2').removeAttribute('class', 'none');  
    document.getElementById('sopingcart-input-2-1').removeAttribute('class', 'none');  
    $('.cataloge-cards-sorting').detach();
    // $('#sopingcart-input.detach()');


    $("#sopingcart-input-2").append('<div class="cataloge-cards cataloge-cards1">\
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-7.jpg" alt="">\
	<span class="shoe-name">Крісло-гойдалка,темно-синій</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">389$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-1.jpg" alt="">\
    <span class="shoe-name">Крісло, ГУННАРЕД темно-сірий</span>\
    <span class="availability available">In stock</span>\
    <span class="shoe-price" id="shoe-price0">399$</span>\
    <button type="button" class="button-card" id="button-card" onclick="increase()" >Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-3.jpg" alt="">\
    <span class="shoe-name">ТУЛЛЬСТА <br> Крісло</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price2">419$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-2.jpg" alt="">\
    <span class="shoe-name">Крісло, коричневий/КНІСА світло-бежевий</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price1">439$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    </div>')

$("#sopingcart-input-2-1").append('<div class="cataloge-cards cataloge-cards-sorting">\
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-8.jpg" alt="">\
	<span class="shoe-name">Дитяче крісло, ВІССЛЕ сірий</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">449$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-6.jpg" alt="">\
	<span class="shoe-name">Крісло, чорно-коричневий чорний</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">469$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-5.jpg" alt="">\
	<span class="shoe-name">ВЕДБУ Крісло із високою спинкою</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">489$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-4.jpg" alt="">\
    <span class="shoe-name">Крісло, ГУННАРЕД темно-сірий/під дерево</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price3">499$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    </div>')
    press++;
    if (press>1){
    $('.cataloge-cards1').detach();
    $('.cataloge-cards-sorting').detach();
    $("#sopingcart-input-2").append('<div class="cataloge-cards cataloge-cards1">\
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-7.jpg" alt="">\
	<span class="shoe-name">Крісло-гойдалка,темно-синій</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">389$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-1.jpg" alt="">\
    <span class="shoe-name">Крісло, ГУННАРЕД темно-сірий</span>\
    <span class="availability available">In stock</span>\
    <span class="shoe-price" id="shoe-price0">399$</span>\
    <button type="button" class="button-card" id="button-card" onclick="increase()" >Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-3.jpg" alt="">\
    <span class="shoe-name">ТУЛЛЬСТА <br> Крісло</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price2">419$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-2.jpg" alt="">\
    <span class="shoe-name">Крісло, коричневий/КНІСА світло-бежевий</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price1">439$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    </div>')

$("#sopingcart-input-2-1").append('<div class="cataloge-cards cataloge-cards-sorting">\
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-8.jpg" alt="">\
	<span class="shoe-name">Air Jordan 1 Low</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">149$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-6.jpg" alt="">\
	<span class="shoe-name">Крісло, чорно-коричневий чорний</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">469$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
	<img class="shoe-card" src="./assets/images/krislo-5.jpg" alt="">\
	<span class="shoe-name">ВЕДБУ Крісло із високою спинкою</span>\
	<span class="availability available">In stock</span>\
	<span class="shoe-price">489$</span>\
	<button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    \
    <div class="card">\
    <img class="shoe-card" src="./assets/images/krislo-4.jpg" alt="">\
    <span class="shoe-name">Крісло, ГУННАРЕД темно-сірий/під дерево</span>\
    <span class="availability  available">In stock</span>\
    <span class="shoe-price" id="shoe-price3">499$</span>\
    <button class="button-card" id="button-card" onclick="increase()">Add to cart</button>\
    </div>\
    </div>')
}
}
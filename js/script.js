//// Получаем ссылку на текстовое поле, 
//// изменение которого будем отслеживать.
//var field = document.getElementById("text");
// 
//// Проверяем наличие значения 'autosave'
//// (это может произойти только если страница будет случайно обновлена)
//if (sessionStorage.getItem("autosave")) {
//  // Восстанавливаем содержимое текстового поля
//  field.value = sessionStorage.getItem("autosave");
//}
// 
//// Отслеживаем все изменения в текстовом поле
//field.addEventListener("change", function() {
//  // И сохраняем их в объект session storage
//  sessionStorage.setItem("autosave", field.value);
//});

var fields = document.querySelectorAll('.formInput');
Array.from(fields).forEach(function (el, i, fields) {
  var name = el.getAttribute('name');
  el.value = sessionStorage.getItem(name);
  el.onkeyup = function () {
    sessionStorage.setItem(name, el.value);
    var submit = document.querySelector('.submit')
    var form = document.querySelector('.form');
    submit.disabled = !form.checkValidity();
  }
})



function previewImages(files) {
  [].forEach.call(files, function (file) {
    if (file.type.match(/image.*/)) {
      var reader = new FileReader();

      reader.onload = function (event) {
        var img = document.createElement('img');
        img.src = event.target.result;
        var div = document.querySelector('.viewImg')
        div.appendChild(img);

        //        queue.push({file: file, element: img});
      };

      reader.readAsDataURL(file);
    }
  });
}


var file = document.querySelector('[type=file]');
var dropzone = document.querySelector('.form');

file.addEventListener('change', function () {
  previewImages(this.files);
  this.value = '';
}, false);

dropzone.addEventListener('dragover', function (event) {
  event.preventDefault();

  dropzone.classList.add('active');
  event.dataTransfer.dropEffect = 'copy';
}, false);

dropzone.addEventListener('drop', function (event) {
  event.preventDefault();

  dropzone.classList.remove('active');
  previewImages(event.dataTransfer.files);
}, false);

//var fields = document.querySelectorAll('.formInput');
//for (var i = 0; i < fields.length; i++) {
//  if(localStorage.getItem('autosave')) {
//    fields[i].value = localStorage.getItem('autosave');
//  }
//  fields[i].addEventListener('change', function(){
//    localStorage.setItem('autosave', fields[i].value);
//  })
//}



//var fields = document.querySelectorAll('.formInput');
//for (var i = 0; i < fields.length; i++) {
//  (function (element) {
//    if (sessionStorage.getItem('autosave')) {
//      element.value = sessionStorage.getItem('autosave');
//    }
//    element.addEventListener('change', function () {
//      sessionStorage.setItem('autosave', element.value);
//    })(fields[i]);
//  })
//} 

//if (window.sessionStorage) {
//  var elements = document.querySelectorAll('[name]');
//
//  for (var i = 0; i < elements.length; i++) {
//    (function (element) {
//      var name = element.getAttribute('name');
//
//      element.value = sessionStorage.getItem(name);
//
//      element.onkeyup = function () {
//        sessionStorage.setItem(name, element.value);
//      }
//    })(elements[i]);
//  }
//}

//var text = document.getElementById('text');
//if (localStorage.getItem('save')) {
//  text.value = localStorage.getItem('save');
//}
//text.addEventListener('change', function () {
//  localStorage.setItem('save', text.value);
//});


//var elements = document.querySelectorAll('.formInput');
//
//function checkValidity() {};
//
//for (i=0; i<elements.length; i++) {
// (function(element) {
//   var id = element.getAttribute('id');
//   element.value = sessionStorage.getItem(id); // обязательно наличие у элементов id
//   element.oninput = function() {
//     sessionStorage.setItem(id, element.value);
//     checkValidity();
//   };
// })(elements[i]);
//}

$(document).ready(function() {
    var box = document.getElementsByClassName('typing-text')[0];
    var str = box.innerHTML;
    var i = 0;
    box.innerHTML = "I am a front-end developer.I can build a website with \
    desiralbe view and responsive features.\
    I am good at bootstrap,responsive design and html, css, sass, \
    jQuery(including its plungin), front-end ";
    var typing = setInterval(function() {
        box.innerHTML += str[i++];
        i >= str.length && clearInterval(typing);
    }, 50);

});
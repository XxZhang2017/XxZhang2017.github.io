$(document).ready(function() {
    var box = document.getElementsByClassName('typing-text')[0];
    var str = box.innerHTML;
    var i = 0;
    box.innerHTML = "I am a full stak developer with 3 years of experiene. \
    I can connect web apps to databases, manage data resources with modern framework including Express.js \
    The databases I am experienced with include MySQL, MongoDB, and Firebase. I can also build responsive \
    web apps with html, css, javasript and various libraries \
    including jQuery and bootstrap. I am experiened with \
    deploying applications to ";
    var typing = setInterval(function() {
        box.innerHTML += str[i++];
        i >= str.length && clearInterval(typing);
    }, 50);

});
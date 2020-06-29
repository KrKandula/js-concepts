// Some important DOM api methods

document.getElementById('someid');

// (document/element).querySelectorAll();
document.querySelectorAll('[type=text]')
document.querySelectorAll('[type=select]') or document.querySelectorAll('select')
document.querySelectorAll('[type=radio]:checked') //gives list of selected radio buttons

//on DOM content loaded
document.addEventListener('DOMContentLoaded', function(){})

//Convert NodeList to Array
arr = Array.from(NodeList);
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"

import "trix"
import "@rails/actiontext"

document.addEventListener('DOMContentLoaded', function() {
  let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))  
  let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {  
    return new bootstrap.Popover(popoverTriggerEl)  
  })  

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

});
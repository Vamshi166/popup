const showPopupButton = document.getElementById('showPopupButton');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');

showPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Sélection des éléments du DOM.
const form = document.querySelector('#comment-form');
const authorInput = document.querySelector('#author');
const commentInput = document.querySelector('#comment');
const errorMessage = document.querySelector('#form-error');
const commentsList = document.querySelector('#comments-list');

// Publication d'un commentaire sans rechargement de page.
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const author = authorInput.value.trim();
  const comment = commentInput.value.trim();

  if (author.length < 2) {
    errorMessage.textContent = 'Le nom doit contenir au moins 2 caractères.';
    errorMessage.hidden = false;
    return;
  }

  if (comment.length < 10) {
    errorMessage.textContent = 'Le commentaire doit contenir au moins 10 caractères.';
    errorMessage.hidden = false;
    return;
  }

  errorMessage.textContent = '';
  errorMessage.hidden = true;

  const card = document.createElement('article');
  card.className = 'comment-card';

  const authorElement = document.createElement('strong');
  authorElement.textContent = author;

  const commentElement = document.createElement('p');
  commentElement.textContent = comment;

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-button';
  deleteButton.textContent = '🗑️ Supprimer';

  card.appendChild(authorElement);
  card.appendChild(commentElement);
  card.appendChild(deleteButton);
  commentsList.prepend(card);

  form.reset();
});

// Suppression des commentaires, y compris ceux présents au chargement.
commentsList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-button')) {
    event.target.closest('.comment-card').remove();
  }
});

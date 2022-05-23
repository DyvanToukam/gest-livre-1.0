let premiereLigne = document.querySelector('button');
let livreChoisi = document.querySelector('.root');
let input = 0;
let piece = document.querySelector('.piece0');
let livreChoisiFinal;
let pieceFinal;
let final = 0;
let finalement = 0;
let chargement = 0;
let initialPiece0 = 16;

let livreChoisi1 = document.querySelector('.durand');
let piece1 = document.querySelector('.piece1');
let livreChoisiFinal1;
let pieceFinal1;
let input1 = 0;
let initialPiece1 = 9;

let livreChoisi2 = document.querySelector('.joly');
let piece2 = document.querySelector('.piece2');
let livreChoisiFinal2;
let pieceFinal2;
let input2 = 0;
let initialPiece2 = 12;

function premiere() {
  if (input <= initialPiece0) {
    livreChoisi.innerHTML = 1 + input;
    livreChoisiFinal = livreChoisi.innerHTML;
    piece.innerHTML = initialPiece0 - input;
    pieceFinal = Number(piece.innerHTML);
    input += 1;
  } else {
    alert('deja tous pris');
    document.querySelector('.disponible').innerHTML = 'Pas Disponible 🤷';
  }
}

function deuxieme() {
  if (input1 <= initialPiece1) {
    livreChoisi1.innerHTML = 1 + input1;
    livreChoisiFinal1 = livreChoisi1.innerHTML;
    piece1.innerHTML = initialPiece1 - input1;
    pieceFinal1 = piece1.innerHTML;
    input1 += 1;
  } else {
    alert('deja tous pris');
    document.querySelector('.disponible1').innerHTML = 'Pas Disponible 🤷';
  }
}
function troisieme() {
  if (input2 <= initialPiece2) {
    livreChoisi2.innerHTML = 1 + input2;
    livreChoisiFinal2 = livreChoisi2.innerHTML;
    piece2.innerHTML = initialPiece2 - input2;
    pieceFinal2 = piece.innerHTML;
    input2 += 1;
  } else {
    alert('deja tous pris');
    document.querySelector('.disponible2').innerHTML = 'Pas Disponible 🤷';
  }
}

function delete1() {
  window.location.reload();
}

function total() {
  final =
    Number(livreChoisi.innerHTML) +
    Number(livreChoisi1.innerHTML) +
    Number(livreChoisi2.innerHTML);
  finalement = final;

  document.querySelector('.livreTotal').innerHTML = `${finalement} livres`;

  const myTimeout = setTimeout(bonjour, 3000);
  function bonjour() {
    document.querySelector('.reussi').innerHTML = 'Pret reussi avec succes 😃';
    document.querySelector(
      '.texte'
    ).innerHTML = `Cher client vous venez d'effectuer un pret de ${finalement} livres`;
  }

  const myTimeout1 = setTimeout(chargement, 500);
  function chargement() {
    document.querySelector('.charger').innerHTML = 'Veuillez Patienter...';
  }
  const myTimeout2 = setTimeout(effacer, 2000);
  function effacer() {
    document.querySelector('.charger').replaceWith('');
  }
}

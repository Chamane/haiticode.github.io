const inputNodeList = document.querySelectorAll('input');



inputs = Array.from(inputNodeList);

inputs.forEach((input)=>{
  input.addEventListener('keyup', processNote);
});

function Trimestre(coeff, intra, final){
  this.coeff = coeff;
  this.intra = intra;
  this.final = final;
  this.moyenne = ()=>{
    return (this.intra*0.4)+(this.final*0.6);
  }
}

const trim1 = new Trimestre(1, 0, 0);
const trim2 = new Trimestre(2, 0, 0);
const trim3 = new Trimestre(2, 0, 0);

const moyTrim1 = document.querySelector('#trimestre-1 > .note');
const moyTrim2 = document.querySelector('#trimestre-2 > .note');
const moyTrim3 = document.querySelector('#trimestre-3 > .note');
const htmlMoyAnnuelle = document.querySelector('.note-annuelle > .note');
const htmlMentionAnnuelle = document.querySelector('.note-annuelle > .mention');
let moyAnnuelle = 0;
let noteAnnuelle = 0;

function processNote(e){
  if(e.target.className === 'intra'){
    console.log(e.target);
    switch(e.target.id){
      case 'intra-trim-1':
        trim1.intra = e.target.value;
        break;
      case 'intra-trim-2':
        trim2.intra = e.target.value;
        break;
      case 'intra-trim-3':
        trim3.intra = e.target.value;
        break;
    }
  }else if(e.target.className === 'final'){
    switch(e.target.id){
      case 'final-trim-1':
        trim1.final = e.target.value;
        break;
      case 'final-trim-2':
        trim2.final = e.target.value;
        break;
      case 'final-trim-3':
        trim3.final = e.target.value;
        break;
    }
  }

  moyTrim1.textContent = `${trim1.moyenne()}`;
  showSucces(moyTrim1.parentElement, trim1.moyenne());
  moyTrim2.textContent = `${trim2.moyenne()}`;
  showSucces(moyTrim2.parentElement, trim2.moyenne());
  moyTrim3.textContent = `${trim3.moyenne()}`;
  showSucces(moyTrim3.parentElement, trim3.moyenne());

  noteAnnuelle = (trim1.moyenne()/5)+(trim2.moyenne()/2.5)+(trim3.moyenne()/2.5);
  moyAnnuelle = noteAnnuelle;
  htmlMoyAnnuelle.textContent = `${moyAnnuelle}`;
  console.log(htmlMoyAnnuelle.nextElementSibling);
  console.log(htmlMoyAnnuelle.parentElement);
  if(moyAnnuelle<65){
    htmlMoyAnnuelle.parentElement.style.backgroundColor = 'var(--error)';
    htmlMentionAnnuelle.textContent = 'reprise';
  }else{
    htmlMoyAnnuelle.parentElement.style.backgroundColor = 'var(--success)';
    htmlMentionAnnuelle.textContent = 'réussite';
  }

  e.preventDefault();
}

function showSucces(htmlElement, moyenne){
  if(moyenne<65.00){
    htmlElement.style.background = 'var(--error)';
    htmlElement.children[2].textContent = 'échec';
  }else{
    htmlElement.style.background = 'var(--success)';
    htmlElement.children[2].textContent = 'réussite';
  }
}

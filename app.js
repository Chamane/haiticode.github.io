
class Trimestre{
  constructor(num, coeff, matieres){
    this.num = num;
    this.coeff = coeff;
    this.matieres = [];
  }
  moyTrim(){
    let sumNotes = 0, sumCoeff = 0;
    for(let matiere of matieres){
      sumNotes += matiere.getNote(this.num)*matiere.coeff;
      sumCoeff += matiere.coeff;
    }
    return sumNotes/sumCoeff;
  }
}

class Matiere{
  constructor(name, coeff){
    this.name = name;
    this.coeff = coeff;
    this.intra_1 = 0;
    this.final_1 = 0;
    this.intra_2 = 0;
    this.final_2 = 0;
    this.intra_3 = 0;
    this.final_3 = 0;
  }
  getNote(trim){
    if(trim === 2){
      if(this.name==='dessin' || this.name==='francais')
        return this.intra_2*1;
      return this.intra_2*0.4+this.final_2*0.6;
    }else if(trim === 3){
      if(this.name==='dessin' || this.name==='francais')
        return this.intra_3*1;
      return this.intra_3*0.4+this.final_3*0.6;
    }else{
      if(this.name==='dessin' || this.name==='francais')
        return this.intra_1*1;
     return this.intra_1*0.4+this.final_1*0.6;
   }
  }
  successTrim(trim){
    if(this.getNote(trim)>=65) return true;
    else return false;
  }

}

const analyse = new Matiere('analyse', 4);
const physique = new Matiere('physique', 3.5);
const chimie = new Matiere('chimie', 3);
const geometrie = new Matiere('geometrie', 2.5);
const algebre = new Matiere('algebre', 2.5);
const dessin = new Matiere('dessin', 1.5);
const francais = new Matiere('francais', 1);
// const informatique = new Matiere('informatique', null);

let matieres = [analyse, physique, chimie, geometrie, algebre, dessin, francais];
// matieres.push(informatique);
const trim1 = new Trimestre(1, 1, matieres);
const trim2 = new Trimestre(2, 2, matieres);
const trim3 = new Trimestre(3, 2, matieres);

// Accès au DOM

// analyse
const anal_intra_1 = document.querySelector('.analyse .intra-trim-1');
const anal_intra_2 = document.querySelector('.analyse .intra-trim-2');
const anal_intra_3 = document.querySelector('.analyse .intra-trim-3');
const anal_final_1 = document.querySelector('.analyse .final-trim-1');
const anal_final_2 = document.querySelector('.analyse .final-trim-2');
const anal_final_3 = document.querySelector('.analyse .final-trim-3');

// physique
const phys_intra_1 = document.querySelector('.physique .intra-trim-1');
const phys_intra_2 = document.querySelector('.physique .intra-trim-2');
const phys_intra_3 = document.querySelector('.physique .intra-trim-3');
const phys_final_1 = document.querySelector('.physique .final-trim-1');
const phys_final_2 = document.querySelector('.physique .final-trim-2');
const phys_final_3 = document.querySelector('.physique .final-trim-3');

// chimie
const chim_intra_1 = document.querySelector('.chimie .intra-trim-1');
const chim_intra_2 = document.querySelector('.chimie .intra-trim-2');
const chim_intra_3 = document.querySelector('.chimie .intra-trim-3');
const chim_final_1 = document.querySelector('.chimie .final-trim-1');
const chim_final_2 = document.querySelector('.chimie .final-trim-2');
const chim_final_3 = document.querySelector('.chimie .final-trim-3');

// geometrie
const geom_intra_1 = document.querySelector('.geometrie .intra-trim-1');
const geom_intra_2 = document.querySelector('.geometrie .intra-trim-2');
const geom_intra_3 = document.querySelector('.geometrie .intra-trim-3');
const geom_final_1 = document.querySelector('.geometrie .final-trim-1');
const geom_final_2 = document.querySelector('.geometrie .final-trim-2');
const geom_final_3 = document.querySelector('.geometrie .final-trim-3');

// algebre
const alg_intra_1 = document.querySelector('.algebre .intra-trim-1');
const alg_intra_2 = document.querySelector('.algebre .intra-trim-2');
const alg_intra_3 = document.querySelector('.algebre .intra-trim-3');
const alg_final_1 = document.querySelector('.algebre .final-trim-1');
const alg_final_2 = document.querySelector('.algebre .final-trim-2');
const alg_final_3 = document.querySelector('.algebre .final-trim-3');


// francais et dessin
const fra_1 = document.querySelector('.francais .trim-1');
const fra_2 = document.querySelector('.francais .trim-2');
const fra_3 = document.querySelector('.francais .trim-3');
const dess_1 = document.querySelector('.dessin .trim-1');
const dess_2 = document.querySelector('.dessin .trim-2');
const dess_3 = document.querySelector('.dessin .trim-3');

// recuperons les inputs
let inputNodeLists = document.querySelectorAll('input');

inputs = Array.from(inputNodeLists);

inputs.forEach(input => {
  input.addEventListener('input', getValueEnter);
});

function getValueEnter(e){
  el = e.target;
  switch (el.parentElement.className) {
    case 'matiere analyse':
       if(el.className === 'intra intra-trim-1')
         analyse.intra_1 = el.value;
       else if(el.className === 'intra intra-trim-2')
          analyse.intra_2 = el.value;
       else if(el.className === 'intra intra-trim-3')
          analyse.intra_3 = el.value;
       else if(el.className === 'final final-trim-1')
          analyse.final_1 = el.value;
       else if(el.className === 'final final-trim-2')
          analyse.final_2 = el.value;
       else if(el.className === 'final final-trim-3')
          analyse.final_3 = el.value;
      break;
    case 'matiere physique':
      if(el.className === 'intra intra-trim-1')
        physique.intra_1 = el.value;
      else if(el.className === 'intra intra-trim-2')
        physique.intra_2 = el.value;
      else if(el.className === 'intra intra-trim-3')
        physique.intra_3 = el.value;
      else if(el.className === 'final final-trim-1')
        physique.final_1 = el.value;
      else if(el.className === 'final final-trim-2')
        physique.final_2 = el.value;
      else if(el.className === 'final final-trim-3')
        physique.final_3 = el.value;
      break;
    case 'matiere chimie':
      if(el.className === 'intra intra-trim-1')
        chimie.intra_1 = el.value;
      else if(el.className === 'intra intra-trim-2')
        chimie.intra_2 = el.value;
      else if(el.className === 'intra intra-trim-3')
        chimie.intra_3 = el.value;
      else if(el.className === 'final final-trim-1')
        chimie.final_1 = el.value;
      else if(el.className === 'final final-trim-2')
        chimie.final_2 = el.value;
      else if(el.className === 'final final-trim-3')
        chimie.final_3 = el.value;
      break;
    case 'matiere geometrie':
      if(el.className === 'intra intra-trim-1')
        geometrie.intra_1 = el.value;
      else if(el.className === 'intra intra-trim-2')
        geometrie.intra_2 = el.value;
      else if(el.className === 'intra intra-trim-3')
        geometrie.intra_3 = el.value;
      else if(el.className === 'final final-trim-1')
        geometrie.final_1 = el.value;
      else if(el.className === 'final final-trim-2')
        geometrie.final_2 = el.value;
      else if(el.className === 'final final-trim-3')
        geometrie.final_3 = el.value;
      break;
    case 'matiere algebre':
      if(el.className === 'intra intra-trim-1')
        algebre.intra_1 = el.value;
      else if(el.className === 'intra intra-trim-2')
        algebre.intra_2 = el.value;
      else if(el.className === 'intra intra-trim-3')
        algebre.intra_3 = el.value;
      else if(el.className === 'final final-trim-1')
        algebre.final_1 = el.value;
      else if(el.className === 'final final-trim-2')
        algebre.final_2 = el.value;
      else if(el.className === 'final final-trim-3')
        algebre.final_3 = el.value;
      break;
    case 'matiere dessin':
      if(el.className === 'intra trim-1')
        dessin.intra_1 = el.value;
      else if(el.className === 'intra trim-2')
        dessin.intra_2 = el.value;
      else if(el.className === 'intra trim-3')
        dessin.intra_3 = el.value;
      break;
    case 'matiere francais':
    console.log(el.className);
      if(el.className === 'intra trim-1')
        francais.intra_1 = el.value;
      else if(el.className === 'intra trim-2')
        francais.intra_2 = el.value;
      else if(el.className === 'intra trim-3')
        francais.intra_3 = el.value;
      break;

  }

  htmlTrimestre(trim1.moyTrim(),trim2.moyTrim(), trim3.moyTrim());
  e.preventDefault();
}

// DOM element
const htmlTrim1 = document.querySelector('.trimestre-1 .note');
const htmlTrim2 = document.querySelector('.trimestre-2 .note');
const htmlTrim3 = document.querySelector('.trimestre-3 .note');
const htmlAnnual = document.querySelector('.note-annuelle .note');

function htmlTrimestre(trim1, trim2, trim3){
  htmlTrim1.textContent = `${trim1}`;
  htmlTrim2.textContent = `${trim2}`;
  htmlTrim3.textContent = `${trim3}`;

  // TODO: changer cette maniere de faire aaargh hand coding coeff
  annualMoy = (trim1*1+trim2*2+trim3*2)/(1+2+2);

  htmlAnnual.textContent = `${annualMoy}`;

  if(trim1<65){
    htmlTrim1.parentElement.style.background = 'red';
    htmlTrim1.nextElementSibling.textContent = 'échec';
  }else {
    htmlTrim1.parentElement.style.background = '#0ed145';
    htmlTrim1.nextElementSibling.textContent = 'réussite';
  }

  if(trim2<65){
    htmlTrim2.parentElement.style.background = 'red';
    htmlTrim2.nextElementSibling.textContent = 'échec';
  }else {
    htmlTrim2.parentElement.style.background = '#0ed145';
    htmlTrim2.nextElementSibling.textContent = 'réussite';
  }

  if(trim3<65){
    htmlTrim3.parentElement.style.background = 'red';
    htmlTrim3.nextElementSibling.textContent = 'échec';
  }else {
    htmlTrim3.parentElement.style.background = '#0ed145';
    htmlTrim3.nextElementSibling.textContent = 'réussite';
  }


  if(annualMoy<50){
    htmlAnnual.parentElement.style.background = 'red';
    htmlAnnual.nextElementSibling.textContent = 'échec';
  }else if((annualMoy<65) && (annualMoy>=50)){
    htmlAnnual.parentElement.style.background = 'yellow';
    htmlAnnual.parentElement.style.color = 'black';
    htmlAnnual.nextElementSibling.textContent = 'reprise';
  }else{
    htmlAnnual.parentElement.style.background = '#0ed145';
    htmlAnnual.parentElement.style.color = '#fff';
    htmlAnnual.nextElementSibling.textContent = 'réussite';
  }


  if(analyse.successTrim(1)){
    anal_intra_1.parentElement.style.background = '#0ed145';
  }else{
    anal_intra_1.parentElement.style.background = 'red';
  }

  if(analyse.successTrim(2)){
    anal_intra_2.parentElement.style.background = '#0ed145';
  }else{
    anal_intra_2.parentElement.style.background = 'red';
  }
  console.log(analyse.successTrim(3));
  if(analyse.successTrim(3)){
    anal_intra_3.parentElement.style.background = '#0ed145';
  }else{
    anal_intra_3.parentElement.style.background = 'red';
  }

  if(physique.successTrim(1)){
    phys_intra_1.parentElement.style.background = '#0ed145';
  }else{
    phys_intra_1.parentElement.style.background = 'red';
  }

  if(physique.successTrim(2)){
    phys_intra_2.parentElement.style.background = '#0ed145';
  }else{
    phys_intra_2.parentElement.style.background = 'red';
  }

  if(physique.successTrim(3)){
    phys_intra_3.parentElement.style.background = '#0ed145';
  }else{
    phys_intra_3.parentElement.style.background = 'red';
  }

  if(chimie.successTrim(1)){
    chim_intra_1.parentElement.style.background = '#0ed145';
  }else{
    chim_intra_1.parentElement.style.background = 'red';
  }

  if(chimie.successTrim(2)){
    chim_intra_2.parentElement.style.background = '#0ed145';
  }else{
    chim_intra_2.parentElement.style.background = 'red';
  }

  if(chimie.successTrim(3)){
    chim_intra_3.parentElement.style.background = '#0ed145';
  }else{
    chim_intra_3.parentElement.style.background = 'red';
  }

  if(geometrie.successTrim(1)){
    geom_intra_1.parentElement.style.background = '#0ed145';
  }else{
    geom_intra_1.parentElement.style.background = 'red';
  }

  if(geometrie.successTrim(2)){
    geom_intra_2.parentElement.style.background = '#0ed145';
  }else{
    geom_intra_2.parentElement.style.background = 'red';
  }

  if(geometrie.successTrim(3)){
    geom_intra_3.parentElement.style.background = '#0ed145';
  }else{
    geom_intra_3.parentElement.style.background = 'red';
  }

  if(algebre.successTrim(1)){
    alg_intra_1.parentElement.style.background = '#0ed145';
  }else{
    alg_intra_1.parentElement.style.background = 'red';
  }

  if(algebre.successTrim(2)){
    alg_intra_2.parentElement.style.background = '#0ed145';
  }else{
    alg_intra_2.parentElement.style.background = 'red';
  }

  if(algebre.successTrim(3)){
    alg_intra_3.parentElement.style.background = '#0ed145';
  }else{
    alg_intra_3.parentElement.style.background = 'red';
  }

  if(francais.successTrim(1)){
    fra_1.parentElement.style.background = '#0ed145';
  }else{
    fra_1.parentElement.style.background = 'red';
  }

  if(francais.successTrim(2)){
    fra_2.parentElement.style.background = '#0ed145';
  }else{
    fra_2.parentElement.style.background = 'red';
  }

  if(francais.successTrim(3)){
    fra_3.parentElement.style.background = '#0ed145';
  }else{
    fra_3.parentElement.style.background = 'red';
  }

  if(dessin.successTrim(1)){
    dess_1.parentElement.style.background = '#0ed145';
  }else{
    dess_1.parentElement.style.background = 'red';
  }

  if(dessin.successTrim(2)){
    dess_2.parentElement.style.background = '#0ed145';
  }else{
    dess_2.parentElement.style.background = 'red';
  }

  if(dessin.successTrim(3)){
    dess_3.parentElement.style.background = '#0ed145';
  }else{
    dess_3.parentElement.style.background = 'red';
  }
}

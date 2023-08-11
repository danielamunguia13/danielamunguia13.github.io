let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#5d2d4e">Estudiante De Ingenieria en Ciencia De Datos Y Programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();


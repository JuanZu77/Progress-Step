//Obtener los pasos
const steps = document.querySelectorAll(".steP"); 

//Obtener la barra de Progreso
const bar =  document.getElementById("bar"); 

//Obtener las referencias de los botones
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");





/*--------- FUNCION PARA ACTUALIZAR AVANCE (STEP y BARRA) ---------*/
  let currentStep = 1; 

   //Escuchar el Boton Siguiente
       nextButton.addEventListener("click", () => {           
        //Sumar 1 en cada click siguiente (next)
        if (currentStep < steps.length){
            currentStep++;
            updateProgress(); 
        }
})

   //Escuchar el Boton Anterior
        prevButton.addEventListener("click", () => {           
        if(currentStep > 1){ 
            currentStep--;
            updateProgress(); 
        }   
});


function updateProgress(){
       //----------------- AVANCE del Progreso (PASOS)-------------------
        steps.forEach((step, index) => {
            if (index < currentStep){
               step.classList.add("active")
            }else{
                step.classList.remove("active")
            }  
        });
        
      //----------------- AVANCE de la BARRA -------------------
          const progress = (currentStep -1) / (steps.length -1 ) * 100;
            //console.log(progress);
            bar.style.width = progress + "%";
        
     //--------------------- BOTONES-------------------*/
    if (currentStep === steps.length) { 
        nextButton.disabled = true;
      } else if (currentStep === 1) { 
        prevButton.disabled = true;
      } else {
        prevButton.disabled = nextButton.disabled = false; 
      } 
    }




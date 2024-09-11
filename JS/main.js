const correctAnswers = ['B','B','B','B', 'A', 'B','A', 'B'];
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
   e.preventDefault();
     

       let score = 0
       const userAnswers = [form.q1.value, form.q2.value, form.q3.value,  form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value    ]
       
          //check answers after looping through
          userAnswers.forEach((answer, index) => {
          if(answer === correctAnswers[index]){
                score += 13
          }
          });
             
          //showing result on page 
             window.scrollTo(0,0);
                result.classList.remove('d-none')        
          

             let finOutput = 0 
             const timer = setInterval(() => {
                   result.querySelector('span').textContent =  `${finOutput}%`;
                   
                   if (finOutput === score){
                      clearInterval(timer)
                   }else{
                      finOutput++
                   }
             }, 10)

          
       
})




  //INTERVALS AND ANIMATING SCORE: which we will use to animate the scores in the html.
   // in setInterval a function keeps firing every amount of time.

//   setTimeout(() => {
//     alert('nawaooo')
//   }, 1000 )

  // let i = 0;
  // const timer = setInterval(() => {
  //         console.log('hello')
  //         i++;
  //         if(i === 10){ 
  //             clearInterval(timer)
  //         }
  // //     }, 1000)


     
 // let res = console.log("12" - 1)


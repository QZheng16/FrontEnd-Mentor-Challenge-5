let anchorList = document.querySelectorAll("main a");

let idList = document.querySelectorAll('main p');

let imgList = document.querySelectorAll("section img")

let qnaList = document.querySelectorAll(".qna-block");

console.log(qnaList);



function toggleAnswer(qList, aList, imgList, qnaList){

    for(let i = 0; i < qList.length; i++)
    {
        qList[i].addEventListener("click", ()=> {  
                qList[i].classList.toggle("active");
                
                imgList[i].classList.toggle("expanded");   
                  
                
                if(aList[i].classList.contains("visible") ===  true)
                {
                    setTimeout(() => qnaList[i].classList.remove("anim-height-trans"), 150 );
                    setTimeout(() => aList[i].classList.remove("visible"), 300 );

                    
                    

                }
                else{
                    aList[i].classList.add("visible"); 
                    qnaList[i].classList.add("anim-height-trans");   
                }
        },false);
    }
}



toggleAnswer(anchorList, idList, imgList, qnaList);



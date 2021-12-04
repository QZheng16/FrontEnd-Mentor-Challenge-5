let anchorList = document.querySelectorAll("main a");

let idList = document.querySelectorAll('main p');

let imgList = document.querySelectorAll("section img")

console.log(imgList);



function toggleAnswer(qList, aList, imgList){
    console.log(qList);
    console.log(aList);
    for(let i = 0; i < qList.length; i++)
    {
        qList[i].addEventListener("click", ()=> {
            if(aList[i].classList.contains("visible")){
                qList[i].classList.remove("active");
                aList[i].classList.remove("visible"); 
                imgList[i].classList.remove("expanded");   
            }else{
                aList[i].classList.add("visible");
                qList[i].classList.add("active");
                imgList[i].classList.add("expanded"); 
            }
        },false);
    }
}



toggleAnswer(anchorList, idList, imgList);



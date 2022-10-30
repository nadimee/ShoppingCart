var totalprice = document.getElementById("totalprice").innerHTML;
totalprice=8116;
document.getElementById("totalprice").innerHTML=totalprice+" $";

var sumitem1=576;
var sumitem2=790;
var sumitem3=2890;
var sumitem4=3076;
var sumitem5=784;


/*item1*/
var plusitem1 = document.getElementById("plusitem1");
var minusitem1= document.getElementById("minusitem1");
var numitem1 = document.getElementById("numitem1").innerHTML;
numitem1=1;


function plus1(num){
    if(numitem1>=0 && numitem1<99){
    numitem1==num;
    numitem1++;
    totalprice+=576;
    document.getElementById("totalprice").innerHTML=totalprice+" $";
    document.getElementById("numitem1").innerHTML=numitem1;
    sumitem1+=576;
    document.getElementById("itemoneprice").innerHTML=sumitem1+" $";
    return numitem1,sumitem1;

    }
    }
function minus1(num){
    if(numitem1>0){
        numitem1==num;
        numitem1--;
        totalprice-=576;
        document.getElementById("totalprice").innerHTML=totalprice+" $";
        document.getElementById("numitem1").innerHTML=numitem1;
        sumitem1-=576;
        document.getElementById("itemoneprice").innerHTML=sumitem1+" $";
        return numitem1,sumitem1;
         }
        }
plusitem1.addEventListener('click', plus1);
minusitem1.addEventListener('click', minus1);

 /*item2 */   
 var plusitem2 = document.getElementById("plusitem2");
 var minusitem2= document.getElementById("minusitem2");
 var numitem2 = document.getElementById("numitem2").innerHTML;
 numitem2=1;
 
 function plus2(num){
     if(numitem2>=0 && numitem2<99){
     numitem2==num;
     numitem2++;
     totalprice+=790;
     document.getElementById("totalprice").innerHTML=totalprice+" $";
     document.getElementById("numitem2").innerHTML=numitem2;
     sumitem2+=790;
     document.getElementById("itemtwoprice").innerHTML=sumitem2+" $";
     return numitem2,sumitem2;
     }
     }
 function minus2(num){
     if(numitem2>0){
         numitem2==num;
         numitem2--;
         totalprice-=790;
         document.getElementById("totalprice").innerHTML=totalprice+" $";
         document.getElementById("numitem2").innerHTML=numitem2;
         sumitem2-=790;
         document.getElementById("itemtwoprice").innerHTML=sumitem2+" $";
         return numitem2,sumitem2;
          }
         }
 plusitem2.addEventListener('click', plus2);
 minusitem2.addEventListener('click', minus2);
 
 /*item3 */   
 var plusitem3 = document.getElementById("plusitem3");
 var minusitem3= document.getElementById("minusitem3");
 var numitem3 = document.getElementById("numitem3").innerHTML;
 numitem3=1;
 
 function plus3(num){
     if(numitem3>=0 && numitem3<99){
     numitem3==num;
     numitem3++;
     totalprice+=2890;
     document.getElementById("totalprice").innerHTML=totalprice+" $";
     document.getElementById("numitem3").innerHTML=numitem3;
     sumitem3+=2890;
     document.getElementById("itemthreeprice").innerHTML=sumitem3+" $";
     return numitem3,sumitem3;
     }
     }
 function minus3(num){
     if(numitem3>0){
         numitem3==num;
         numitem3--;
         totalprice-=2890;
         document.getElementById("totalprice").innerHTML=totalprice+" $";
         document.getElementById("numitem3").innerHTML=numitem3;
         sumitem3-=2890;
         document.getElementById("itemthreeprice").innerHTML=sumitem3+" $";
         return numitem3,sumitem3;
          }
         }
 plusitem3.addEventListener('click', plus3);
 minusitem3.addEventListener('click', minus3);

 /*item4 */   
 var plusitem4 = document.getElementById("plusitem4");
 var minusitem4= document.getElementById("minusitem4");
 var numitem4 = document.getElementById("numitem4").innerHTML;
 numitem4=1;
 
 function plus4(num){
     if(numitem4>=0 && numitem4<99){
     numitem4==num;
     numitem4++;
     totalprice+=3076;
     document.getElementById("totalprice").innerHTML=totalprice+" $";
     document.getElementById("numitem4").innerHTML=numitem4;
     sumitem4+=3076;
     document.getElementById("itemfourprice").innerHTML=sumitem4+" $";
     return numitem4,sumitem4;
     }
     }
 function minus4(num){
     if(numitem4>0){
         numitem4==num;
         numitem4--;
         totalprice-=3076;
         document.getElementById("totalprice").innerHTML=totalprice+" $";
         document.getElementById("numitem4").innerHTML=numitem4;
         sumitem4-=3076;
         document.getElementById("itemfourprice").innerHTML=sumitem4+" $";
         return numitem4,sumitem4;
          }
         }
 plusitem4.addEventListener('click', plus4);
 minusitem4.addEventListener('click', minus4);

 /*item5 */   
 var plusitem5 = document.getElementById("plusitem5");
 var minusitem5= document.getElementById("minusitem5");
 var numitem5 = document.getElementById("numitem5").innerHTML;
 numitem5=1;
 
 function plus5(num){
     if(numitem5>=0 && numitem5<99){
     numitem5==num;
     numitem5++;
     totalprice+=784;
     document.getElementById("totalprice").innerHTML=totalprice+" $";
     document.getElementById("numitem5").innerHTML=numitem5;
     sumitem5+=784;
     document.getElementById("itemfiveprice").innerHTML=sumitem5+" $";
     return numitem5,sumitem5;
     }
     }
 function minus5(num){
     if(numitem5>0){
         numitem5==num;
         numitem5--;
         totalprice-=784;
         document.getElementById("totalprice").innerHTML=totalprice+" $";
         document.getElementById("numitem5").innerHTML=numitem5;
         sumitem5-=784;
         document.getElementById("itemfiveprice").innerHTML=sumitem5+" $";
         return numitem5,sumitem5;
          }
         }
 plusitem5.addEventListener('click', plus5);
 minusitem5.addEventListener('click', minus5);

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



 var ds1 = document.getElementById("ds1");
 var ds2 = document.getElementById("ds2");
 var ds3 = document.getElementById("ds3");
 var ds4 = document.getElementById("ds4");
 var ds5 = document.getElementById("ds5");
 var con=5;
 function removethelement1(){
    con--;
    totalprice-=sumitem1;
    document.getElementById("totalprice").innerHTML=totalprice+" $";
    var parentel1= document.getElementById("purshases");
    var childel1 = document.getElementById("item1");
    document.getElementById("numberofitems").innerHTML=con;
    return parentel1.removeChild(childel1),totalprice;
      
 }
 function removethelement2(){
    con--;
    totalprice-=sumitem2;
    document.getElementById("totalprice").innerHTML=totalprice+" $";
    var parentel2= document.getElementById("purshases");
    var childel2 = document.getElementById("item2");
    document.getElementById("numberofitems").innerHTML=con;
    return parentel2.removeChild(childel2),totalprice;
      
 }
 function removethelement3(){
    con--;
    totalprice-=sumitem3;
    document.getElementById("totalprice").innerHTML=totalprice+" $";
    var parentel3= document.getElementById("purshases");
    var childel3 = document.getElementById("item3");
    document.getElementById("numberofitems").innerHTML=con;
    return parentel3.removeChild(childel3),totalprice;
      
 }
 function removethelement4(){
    con--;
    totalprice-=sumitem4;
    document.getElementById("totalprice").innerHTML=totalprice+" $";
    var parentel4= document.getElementById("purshases");
    var childel4 = document.getElementById("item4");
    document.getElementById("numberofitems").innerHTML=con;
    return parentel4.removeChild(childel4),totalprice;
      
 }
 function removethelement5(){
    con--;
    totalprice-=sumitem5;
    document.getElementById("totalprice").innerHTML=totalprice+" $";
    var parentel5= document.getElementById("purshases");
    var childel5 = document.getElementById("item5");
    document.getElementById("numberofitems").innerHTML=con;
    return parentel5.removeChild(childel5),totalprice;
      
 }



 

 

 ds1.addEventListener('click', removethelement1);
 ds2.addEventListener('click', removethelement2);
 ds3.addEventListener('click', removethelement3);
 ds4.addEventListener('click', removethelement4);
 ds5.addEventListener('click', removethelement5);



 var lb1 = document.getElementById("likebutton1");
 var lb2 = document.getElementById("likebutton2");
 var lb3 = document.getElementById("likebutton3");
 var lb4 = document.getElementById("likebutton4");
 var lb5 = document.getElementById("likebutton5");

 var lb1t = document.getElementById("likebutton1").innerHTML="&#128420;";
 var lb2t = document.getElementById("likebutton2").innerHTML="&#128420;";
 var lb3t = document.getElementById("likebutton3").innerHTML="&#128420;";
 var lb4t = document.getElementById("likebutton4").innerHTML="&#128420;";
 var lb5t = document.getElementById("likebutton5").innerHTML="&#128420;";

 function changesb1(){
    switch (lb1t) {
        case "&#128420;":
            lb1t="&#128150;";
            break;

             default:
                lb1t="&#128420;";
                break;
    }      
           document.getElementById("likebutton1").innerHTML=lb1t;
 }
 lb1.addEventListener("click",changesb1);

 function changesb2(){
    switch (lb2t) {
        case "&#128420;":
            lb2t="&#128150;";
            break;

             default:
                lb2t="&#128420;";
                break;
    }      
           document.getElementById("likebutton2").innerHTML=lb2t;
 }
 lb2.addEventListener("click",changesb2);
 function changesb3(){
    switch (lb3t) {
        case "&#128420;":
            lb3t="&#128150;";
            break;

             default:
                lb3t="&#128420;";
                break;
    }      
           document.getElementById("likebutton3").innerHTML=lb3t;
 }
 lb3.addEventListener("click",changesb3);
 function changesb4(){
    switch (lb4t) {
        case "&#128420;":
            lb4t="&#128150;";
            break;

             default:
                lb4t="&#128420;";
                break;
    }      
           document.getElementById("likebutton4").innerHTML=lb4t;
 }
 lb4.addEventListener("click",changesb4);
 function changesb5(){
    switch (lb5t) {
        case "&#128420;":
            lb5t="&#128150;";
            break;

             default:
                lb5t="&#128420;";
                break;
    }      
           document.getElementById("likebutton5").innerHTML=lb5t;
 }
 lb5.addEventListener("click",changesb5);

 

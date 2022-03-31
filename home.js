
const BoxCard = document.querySelector(".Db_Cards");
//Create Card Function
function CreateCard([MainHead,TaskID,CntVal1,CntVal2,CntVal3])
 
  {
    let code= `
    
    <div class="Card" id="card${TaskID}">
        <div class="cardText">
       <h4>TASK-ID</h4>
        <p  id="TaskId">${TaskID}</p>
        <h2 class="Main_Head" id="#Hd_Val"> ${MainHead} </h2>
        <h4 id ="#Sb_Val"> Datacenter Overview</h4>
        <p id="HostId${TaskID}">Number of Host: ${CntVal1}%</p>
        <p id="NetId${TaskID}">Number of Networks: ${CntVal2}%</p>
        <p id="IntId${TaskID}"> Number of Interface:${CntVal3}%</p>
            <hr>
            <button data-target="simpleModal_1" data-toggle="Pop">View Card </button> 
            <div id="simpleModal_1" class="modal">
        <div class="modal-window">
    <button data-dismiss="pop">Close</button>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    </p>

</div>
</div>   

           
    </div>
    </div>
`;
BoxCard.innerHTML += code;

} 


//standard 6 cards 
let Card1 =["MARVEL",1,25,15,10];
let Card2 =["STUDIO PRODUCTION NETWORK",2,25,15,10];
let Card3 =["MOTION PICTURE PRODUCTION",3,25,15,10];
let Card4 =["SEARCH LIGHT",4,25,15,10];
let Card5 =["TTC TITLE",5,25,15,10];
let Card6 =["LEARN MORE",6,25,15,10];

CreateCard(Card1);
CreateCard(Card2);
CreateCard(Card3);
CreateCard(Card4);
CreateCard(Card5);
CreateCard(Card6);


//add new card
function AddFn([HeadVal,TskID,ParaVal,ParaVal1,ParaVal2]){

  
  CreateCard([HeadVal,TskID,ParaVal,ParaVal1,ParaVal2]);
  
  }


//display 
function myFunction() {
    var top = document.getElementById("usrform");
  
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (top.style.display === "none") {
          top.style.display = "inline";
          btnText.innerHTML = "Add"; 
          moreText.style.display = "none";
      } 
    else {
          top.style.display = "none";
          btnText.innerHTML = "Close"; 
          moreText.style.display = "inline";
      }
  }
 
///edit content
function OpenEdit()
{
     
var ETask_Id =  window.prompt("Enter Task Id");
if(ETask_Id=="")
{
    window.alert("Task-Id Null");
    return false;
}
else{ 

    var Ehost = window.prompt("Enter Host Number");
    if(Ehost == ""){
        window.alert("Empty Value Can't be Passed");
        return false;

    }
    var ENet = window.prompt("Enter Network Number");
    if(ENet == ""){
        window.alert("Empty Value Can't be Passed");
        return false;

    }
    var EInt = window.prompt("Enter Interface Number");
    if(EInt == ""){
        window.alert("Empty Value Can't be Passed");
        return false;

    }

   var OldHost = document.getElementById("HostId"+ETask_Id)
   OldHost.innerHTML="Number of Host:" +Ehost+"%"

   var OldNet = document.getElementById("NetId"+ETask_Id)
   OldNet.innerHTML="Number of Network:" +ENet+"%"

   var OldInt = document.getElementById("IntId"+ETask_Id)
   OldInt.innerHTML="Number of Interface:" +EInt+"%"

}

}
      
///Delete function only 1st card can be deleted
function DelFn(){

        var tsk_id =  window.prompt("Enter Task Id");
        if(tsk_id=="")
        {
            window.alert("Task-Id Null");
            return
        }
        else
        {
            var DelEle = document.getElementById("card"+tsk_id);
            DelEle.remove();
            window.alert("TaskId:"+tsk_id+"Deleted");
            
    }
    
}

//Deligation
const mytarget = document.getElementById("Flex_Card");
mytarget.addEventListener("click",function(e){
   const Target = e.target;

   if(Target.matches('.Card')){
      console.log("Yes")
      
   }
   else{
       console.log("Null")
   }
   });


// Card DataPop
document.addEventListener('click', function (e) {
     
    var targetbtn = e.target

    if (targetbtn.hasAttribute('data-toggle') && targetbtn.getAttribute('data-toggle') == 'Pop') {
        if (targetbtn.hasAttribute('data-target')) {
            var m_ID = targetbtn.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' 
    if ((targetbtn.hasAttribute('data-dismiss') &&
      targetbtn.getAttribute('data-dismiss') == 'pop') ||
       targetbtn.classList.contains('pop')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);

//Add Card
document.addEventListener('click', function (e) {
     
    var targetbtn5 = e.target

    if (targetbtn5.hasAttribute('data-toggle') && targetbtn5.getAttribute('data-toggle') == 'Pop5') {
        if (targetbtn5.hasAttribute('data-target')) {
            var m_ID = targetbtn5.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
            document.getElementById('myBtn5').addEventListener("click",function()
            {
                var HeadVal = document.getElementById("Head").value;
                var TskID = document.getElementById("Tsk_id").value;
                var ParaVal = document.getElementById("Cnt").value;
                var ParaVal1 = document.getElementById("Cnt1").value;
                var ParaVal2 = document.getElementById("Cnt2").value;
                AddFn([HeadVal,TskID,ParaVal,ParaVal1,ParaVal2]);
  
                
        });
        
       
          
        }
        
    }

    // Close modal window with 'data-dismiss' 
    if ((targetbtn5.hasAttribute('data-dismiss') &&
      targetbtn5.getAttribute('data-dismiss') == 'pop5') ||
       targetbtn5.classList.contains('pop')) {
        var modal = document.querySelector('[class="modal5 open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);

// Edit PopUp
document.addEventListener('click', function (e) {
     
    var targetbtn = e.target

    if (targetbtn.hasAttribute('data-toggle') && targetbtn.getAttribute('data-toggle') == 'Pop2') {
        if (targetbtn.hasAttribute('data-target')) {
            var m_ID = targetbtn.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
            document.getElementById('myBtn2').addEventListener("click",function()
            {
                var ETask_Id1 =  document.getElementById('Tsk_id1').value;
                var Ehost1 = document.getElementById('EdH').value;
                var ENet1 = document.getElementById('EdN').value;
                var EInt1 = document.getElementById('EdI').value;
        
                // var OldTaskId= document.getElementById("TaskId").innerHTML;
                var OldHost = document.getElementById("HostId"+ETask_Id1)
                OldHost.innerHTML="Number of Host:" +Ehost1+"%"
     
                var OldNet = document.getElementById("NetId"+ETask_Id1)
                OldNet.innerHTML="Number of Network:" +ENet1+"%"
     
                var OldInt = document.getElementById("IntId"+ETask_Id1)
                OldInt.innerHTML="Number of Interface:" +EInt1+"%"
                
        });
        
       
          
        }
        
    }

    // Close modal window with 'data-dismiss' 
    if ((targetbtn.hasAttribute('data-dismiss') &&
      targetbtn.getAttribute('data-dismiss') == 'pop2') ||
       targetbtn.classList.contains('pop')) {
        var modal = document.querySelector('[class="modal2 open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);


//Delete PopUp
document.addEventListener('click', function (e) {
     
    var targetbtn2 = e.target

    if (targetbtn2.hasAttribute('data-toggle') && targetbtn2.getAttribute('data-toggle') == 'Pop4') 
    {
        if (targetbtn2.hasAttribute('data-target')) 
        {
            var m_ID = targetbtn2.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
            document.getElementById('myBtn4').addEventListener("click",function()
            {
                var ETask_Id2 =  document.getElementById('Tsk_id4').value;
              
                if(ETask_Id2 == "")
                {
                    window.alert("Enter Valid Id")
                }
    
                else{

                var DelEle = document.getElementById("card"+ETask_Id2);
                DelEle.remove();
                
               
                }
                
            });
        
       
          
        }
        
    }

    // Close modal window with 'data-dismiss' 
    if ((targetbtn2.hasAttribute('data-dismiss') &&
      targetbtn2.getAttribute('data-dismiss') == 'pop4') ||
       targetbtn2.classList.contains('pop')) {
        var modal = document.querySelector('[class="modal4 open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);


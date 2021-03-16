var score1 =document.getElementById("score1");
var score2 =document.getElementById("score2");
var result="";
function getwinner(){
    let sc1 =Number(score1.value);
    let sc2 =Number(score2.value);

	
    if(sc1>sc2){
    	result+="First team are the WINNERS";
    } else if(sc1<sc2){
    	result+="Second team are the WINNERS";
    }else{
    	result+="DRAW";
    }

}

const playername = () => {
    let textarea1 = document.getElementById("team1");
    let textareaValue1 = textarea1.value;
    let team1 = textareaValue1.split("\n");
    
    let textarea2 = document.getElementById("team2");
    let textareaValue2 = textarea2.value; 
    let team2 = textareaValue2.split("\n");
    
    
    if(team1.length>11 || team2.length>11){
     	alert("The number of players in a single team cannot be more than 11");
    }else{
    let str1="Players of team1 are: ";
    let str2="Players of team2 are: ";
    
    
    for(let i=0; i<team1.length; i++){
    	
    	str1+=team1[i]+" ";
    	
    }
    
    console.log(str1);
   
    
   for(let i=0; i<team2.length; i++){
    	
    	str2+=team2[i]+" ";
    }
    
    console.log(str2);
    
}}

const finalResults = () => {
	let sc1 =Number(score1.value);
    let sc2 =Number(score2.value);
    if(sc1+sc2>7){
    	alert("The combined number of goals cannot be greater than 7");
    }
	playername();
	getwinner();  
	
	result+="<br>The score list of team 1 can be ";  composition(sc1) ;
	result+="<br>The score list of team 2 is "; composition(sc2);
	document.getElementById("result").innerHTML=result;  
}

function composition(s){
	if(s==1){
		result+="(1)";
	} else if(s==2){
		result+="(1,1), (2)";
	} else if(s==3){
		result+="(1,1,1), (1,2), (3)";
	}else if(s==4){
		result+="(1,1,1,1), (1,1,2), (1,3), (2,2), (4)";
	}else if(s==5){
		result+="(1,1,1,1,1), (1,1,1,2), (1,1,3), (1,2,2), (1.4), (2,3), (5)";
	}else if(s==6){
		result+="(1,1,1,1,1,1), (1,1,1,1,2), (1,1,1,3), (1,1,2,2), (1,1,4), (1,2,3), (1,5), (2,2,2), (2,4,), (3,3), (6)";
	}else if(s==7){
		result+="(1,1,1,1,1,1,1), (1,1,1,1,1,2), (1,1,1,1,3), (1,1,1,2,2), (1,1,1,4), (1,1,2,3), (1,1,5), (1,2,2,2), (1,2,4), (1,3,3), (1,6), (2,2,3), (2,5), (3,4 ), (7)";
	}
}

document.getElementById("submit").addEventListener("click", finalResults);
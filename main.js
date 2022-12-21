var arr = ["about","above","abuse","actor","acute","admit"];
var currId;
var word=""; // the actual answer word
var currWord=""; // the word user is currently on
window.onload = function(){myfunc()};
function myfunc()
{
    // let x = Math.random() *5;
    word = arr[Math.floor(Math.random() * arr.length)];
    currId = 1;
    alert(`${word}`);
    // document.getElementById(`${currId}`).value='j';

}
 

// add event listener for keys if its enter then check if the row is completed if its completed then check if its correct if its correct then print
// otherwise increase the currId by one and if the currId is already at the last box then check for word correctness or print wrong and stop execution
// if the keypressed is letter keys and the currId is not multiple of five then add the letter to box and increase currId if its a multiple of five
// then do nothing.

document.addEventListener('keypress', (event) => {
    var name = event.key;
    // var code = event.code;
    // alert(`Key pressed ${name}`);
    
    
    if(name=="Enter")
    {
        if(currWord.length < 5)
        {
            // alert(`${currWord.length}`);
            // alert("hello");
        }
        else
        {
            if(currId==30)
            {
                if(currWord==word)
                {
                    window.alert("correct answer !")
                    var temp = currId-4;
                    while(temp<=currId)
                    {
                        document.getElementById(`${temp}`).style.backgroundColor="green";
                        temp++;
                    }
                }
                else
                {
                    window.alert("wrong answer !")
                }
            }
            else if(currId%5==0)
            {
                
                var temp = currId-4; // to get the id of first letter
                var tempCopy = temp;
                if(currWord==word)
                {
                    // if the word is correct then make all the letters green.

                    while(temp<=currId)
                    {
                        document.getElementById(`${temp}`).style.backgroundColor="green";
                        temp++;
                    }
                    window.alert("correct answer !")
                }

                // if the word is not correct then check for each letter and update the color of correct letter as green , update the color of 
                // letter as bluish for the letters which are not in correct position but are present in word , rest all letters update as grey.

                

                else 
                {

                    // create two hashmaps one for user entered word and one for the actual word , run and for the correct letters in correct 
                    // position decrease the letter count in both the hash maps. Then in the next loop check for the letters in the user 
                    // entered word's hashmap if the number of letters in both the hashmap is not zero then turn it blue and decrease the hashmap
                    // 

                    var h1 = new Map();
                    var h2 = new Map();

                    for(var i=97;i<=122;i++)         // sets the count zero for every character in the map
                    {
                        let char = String.fromCharCode(i);
                        
                        h1.set(char,0);
                        h2.set(char,0);
                    }
                    
                    for(var i=0;i<5;i++)             // update the count of letters in word
                    {
                        var tem = currWord[i];
                        h1.set(tem,h1.get(tem)+1);

                        tem = word[i];
                        h2.set(tem,h2.get(tem)+1);
                    }

                    var i=0; // counter for string
                    while(temp<=currId)
                    {
                        if(document.getElementById(`${temp}`).value===word[i])
                        {
                            document.getElementById(`${temp}`).style.backgroundColor="green";
                            var t = word[i];
                            h1.set(t,h1.get(t)-1);
                            h2.set(t,h2.get(t)-1);
                        }
                        temp++;
                        i++;
                    }

                    // for(var i=0;i<5;i++)
                    // {
                    //     var temp = currWord[i];
                    //     if(h1.get(temp)!=0 && h2.get(temp)!=0)
                    //     {

                    //     }
                    // }

                    var i=0;
                    while(tempCopy<=currId)
                    {
                        if(document.getElementById(`${tempCopy}`).style.backgroundColor=="green")
                        {

                        }
                        else
                        {
                            var val = document.getElementById(`${tempCopy}`).value;
                            if(h1.get(val)!=0 && h2.get(val)!=0)
                            {
                                
                                document.getElementById(`${tempCopy}`).style.backgroundColor="blue";
                            }
                            else
                            {
                                document.getElementById(`${tempCopy}`).style.backgroundColor="grey";
                            }
                        }
                        
                        tempCopy++;
                    }

                    currWord="";
                    currId++;
                }
            }
            
        }
    }
    else if(name.charCodeAt(0)>=65)
    {
            // alert(name);


        if(currWord.length == 5)
        {

        }
        else
        {
            // if current length of word is 4 then add one letter and do not increase the currId,update the curr word & wait for user to press enter,
            // if the current length is less than 4 then add the letter and increase the currId and update the currWord
            if(currWord.length==4)
            {
                document.getElementById(`${currId}`).value= `${name}`;
                currWord+=name.toLowerCase();
            }
            else
            {
                document.getElementById(`${currId}`).value= `${name}`;
                currId++;
                currWord+=name.toLowerCase();
            }
        }
    }
    else if(name==="Backspace")
    {
        alert("abey yar");
        
        // if((currId-1)%5==0)
        // {
            

        // }
        // else
        // {
        //     document.getElementById(`${currId}`).value="";
        //     currId--;
        //     currWord.slice(0,-1);
        // }
    }
  }, false);

//   if( ((name.toLowerCase()).charCodeAt(0)) >=65 && ((name.toLowerCase()).charCodeAt(0)) <= 90)
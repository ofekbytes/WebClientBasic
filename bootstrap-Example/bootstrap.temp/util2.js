//
//Global varaible
//
var glCbValue = [];


function loadList()
{

    console.log("loadList() function loaded ");
    const url = 'http://localhost:8080/listJson';

    fetch(url)  
      .then(  
        function(response) 
        {  
          console.log("response");
          console.log(response);

          if (response.status !== 200) 
          {  
            console.warn('Looks like there was a problem. Status Code: ' + response.status);  
            return "error 200";  
          }
    

          // Examine the text in the response  
          response.json().then(function(post) 
          {
            //display post value.
            console.log("post ==> ");
            console.log(post);

            let outputKey = '';
            let outPutValue = '';
            let outBoth = '';


          let newOption ;
            for (let i = 0; i < post.length; i++) 
            {

                 outputKey   += '<option value=' + post[i].custname + '>' + post[i].custname + ' </option> ';
                 outPutValue += '<option value=' + post[i].custdes  + '>' + post[i].custdes + ' </option> ';

                // output //
                // console.log(i);
                // console.log(" outputKey " + outputKey);
                // console.log(" outPutValue " + outPutValue);
                
                
                // console.log(" i == " + i + " ${post[i].custname} == " + ${post[i].custname} );
                // console.log(" ${post[i].custdes} == " + ${post[i].custdes} );

            }
              // document.getElementById('cbListKey').innerHTML = outputKey;
              // document.getElementById('cbListvalue').innerHTML =  outPutValue;

              document.getElementById('sp3').innerHTML = outputKey;
              

        }  
      )  

      .catch(function(err) {  
        console.error('Fetch Error -', err);  
      });

    }
    )}


function getOnloadData()
{
    loadList();



    $(function()
    {

        //select and change value in array (glCbValue)
        $('#sp2').on('change', function()
        {
            glCbValue = $('#sp2').val()
        });

    });

    // Listener // button - click //
    document.getElementById('submit').addEventListener('click', getText);
    
}


// click event trigger //
function getText()
{
    //show all selected data.
    console.log("====");
    console.log("glCbValue [] selected array ==> " + glCbValue);
    console.log("====");
}



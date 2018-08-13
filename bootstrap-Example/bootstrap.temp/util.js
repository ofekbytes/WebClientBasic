

function getOnloadData()
{
    document.getElementById('submit').addEventListener('click', getText);
}


function getText()
{
    var listResult;
    console.info(" Nice ");
    console.info("Result = " + document.getElementById("sp2").selectedIndex )
    //listResult = ;
    console.log(listResult);


    $('#sp2').on('click',function() {
        alert($(this).val());
        console.log($(this).val());
      });


   // console.log(" **** ");

   //  $('.selectpicker').change(function () {
//    $('#sp2').change(function () 
//    {        
//         var slecteditem= $(this).find("option:selected").val();    
//      //   alert(slecteditem);

//         console.info("slecteditem " + slecteditem);
//     });
}


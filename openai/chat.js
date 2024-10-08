OPENAPI_KEY = 

smodel = "gpt-3.5-turbo"
smodelmini = "gpt-4o-mini"
//squestion = "황진이가 누구야? 한국어로 대답해줘"
   
function draw(){

    squestion = txtMsg.value
    data ={
        prompt: squestion,
        n: 2,
        size:"256x256"
            

    }

    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/images/generations",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        //alert(response.choices[0].message.content)
        gimage.src = response.data[0].url
        gimage2.src = response.data[1].url

    }).fail(function(error){
        console.log(error)
        errormsg = error.status + " : " + error.responseJSON.error.code + " - " + error.responseJSON.error.message
        txtOut.value = errormsg
    }

    )
}
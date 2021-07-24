 window.onload = function () {
    
    var btCadastrarCliente = document.getElementById("btCadastrarCliente");
    btCadastrarCliente.onclick = cadastrarCliente; 
  
   }
 




function cadastrarCliente() {
    var Nome = document.getElementById("nome");
   
    var Cpf = document.getElementById("cpf");
    
    var Telefone = document.getElementById("tel");
    
    var Email = document.getElementById("email");

    var Endereco = document.getElementById("endereco");

    if(nome.value ==""||cpf.value ==""||tel.value ==""||email.value ==""||endereco.value ==""){
      alert("preencha todos os campos")
      
     
   }else{
    
    var dados = JSON.parse( localStorage.getItem("dadoscliente"));

          while(dados==null){
          
         localStorage.setItem("dadoscliente","[]")
         dados++;
         dados=[];
      }
          }
          
         var RegistroCliente={
            nome: nome.value,
            cpf: cpf.value,
            email: email.value,
            tel: tel.value,
            endereco: endereco.value
         }

         dados.push(RegistroCliente);
       
         localStorage.setItem("dadoscliente",JSON.stringify(dados));
         alert("incluido com sucesso");
      
          nome.value ="";
          cpf.value="";
          email.value="";
          tel.value="";
          endereco.value = "";
     }

    
window.onload = function () {
    var btCadastrarProduto = document.getElementById("btCadastrarProduto");
    btCadastrarProduto.onclick = cadastrarProduto; 
 }
   
  function cadastrarProduto() {

      var Nome = document.getElementById("nome");

      var Categoria = document.getElementById("categoria");
      
      var Fornecedor = document.getElementById("fornecedor");
   
      var Quantidade = document.getElementById("quantidade");
      if(nome.value ==""||categoria.value ==""||fornecedor.value ==""||quantidade.value ==""){
        alert("preencha todos os campos")
        
       
     }else{
      
      var dados = JSON.parse( localStorage.getItem("dadosfornecedor"));
      while(dados==null){
     localStorage.setItem("dadosfornecedor","[]")
     
     dados++;
     dados=[];
    
      }
    }
     var RegistroProduto={
        
        nome: nome.value,
        categoria: categoria.value,
        fornecedor: fornecedor.value,
        quantidade: quantidade.value,
       
     }

     dados.push(RegistroProduto);
     localStorage.setItem("dadosfornecedor",JSON.stringify(dados));
     alert("incluido com sucesso");

      nome.value ="";
      categoria.value ="";
      fornecedor.value="";
      quantidade.value="";
     
  }
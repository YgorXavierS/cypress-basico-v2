// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/*
describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit("/src/index.html")
    })
  })

  describe('TITULO', function() {
    it('verifica o título da aplicação', function() {
        cy.visit("/src/index.html")
        cy.title().should('be.equal',"Central de Atendimento ao Cliente TAT")
    })
  })
    
    // ID = ("#firstName")
    // CLASSE= (".nomeClasse")
    // HAVE === VALOR

  describe("INPUT",function(){
    it("verificando o input de dados",function(){
        cy.get("#firstName")
        .type("Ygoor xavier")
        .should("have.value","Ygoor xavier")
        cy.get(".button").click()
    })
  })

  */

  

//EXERCICIOS
//DESCRIBE
describe("EXERCICIO 1",function(){ 
  beforeEach(function(){
    cy.visit("/src/index.html")
  }) 
  it("exibe mensagem de erro quando o telefone se torna",function(){
      
  
        let FirstName = cy.get("#firstName")
        FirstName.type("YGOR")

        let LastName = cy.get("#lastName")
        LastName.type("XAVIER")

        let Email = cy.get("#email")
        Email.type("ygorxavier77@gmail.com")

        cy.get(".button").click()

       let ClasseErro = cy.get(".error")
       console.log(ClasseErro.should('be.visible').firstCall)
  })
})

describe("EXERCICIO 1 EXTRA",function(){ 
  beforeEach(function(){
    cy.visit("/src/index.html")
  }) 
  it("exibe mensagem de erro quando o telefone se torna",function(){
     
        let FirstName = cy.get("#firstName")
        FirstName.type("YGOR",{delay:0})

        let LastName = cy.get("#lastName")
        LastName.type("XAVIER")

        let Email = cy.get("#email")
        Email.type("ygorxavier77@gmail.com")

  })
})

describe("EXERCICIO 2",function(){ 
  beforeEach(function(){
    cy.visit("/src/index.html")
  })  
  it("exibe mensagem de erro quando o telefone se torna",function(){
   
        let FirstName = cy.get("#firstName")
        FirstName.type("YGOR",{delay:250})

        let LastName = cy.get("#lastName")
        LastName.type("XAVIER")

        let Email = cy.get("#email")
        Email.type("ygorxavier77@gmail.com")
        
        cy.get(".button").click()

        let ClasseErro = cy.get(".error")
        ClasseErro.should('be.visible')

  })
})

describe("EXERCICIO 3",function(){ 
  beforeEach(function(){
    cy.visit("/src/index.html")
  })  
  it("ERRO NUMERO",function(){ 
      let telefone = cy.get("#phone")
      telefone.type("ygor",{delay:250})

      telefone.should("be.empty")
      cy.get(".button").click()

  })
})

describe("EXERCICIO 4",function(){ 
  beforeEach(function(){
    cy.visit("/src/index.html")
  })  
  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário",function(){
    let FirstName = cy.get("#firstName")
    FirstName.type("YGOR",{delay:250})

    let LastName = cy.get("#lastName")
    LastName.type("XAVIER")

    let Email = cy.get("#email")
    Email.type("ygorxavier77@gmail.com")

    let Telefone = cy.get("#phone")

    cy.get("#phone-checkbox").click("right")

    let TextoAdicional = cy.get("#open-text-area")
    TextoAdicional.type("TESTE")

    cy.get(".button").click()
    let ClasseErro = cy.get(".error").should('be.visible')
    
   
  })
})



describe("EXERCICIO 5",function(){ 
  beforeEach(function(){
    cy.visit("/src/index.html")
  })  
  it("preenche e limpa os campos nome, sobrenome, email e telefone",function(){
    let FirstName = cy.get("#firstName")
      FirstName.type("YGOR",{delay:250})
      FirstName.should('have.value',"YGOR")
      FirstName.clear()
      FirstName.should('have.value',"")



    let LastName = cy.get("#lastName")
      LastName.type("XAVIER")

    let Email = cy.get("#email")
      Email.type("ygorxavier77@gmail.com")

    let Telefone = cy.get("#phone")
      cy.get("#phone-checkbox").click("right")

    let TextoAdicional = cy.get("#open-text-area")
      TextoAdicional.type("TESTE")

    cy.get(".button").click()
      let ClasseErro = cy.get(".error").should('be.visible')
    
   
  })
})


describe("EXERCICIO 6",function(){ 
  beforeEach(function(){
    cy.visit("/src/index.html")
  })  
  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.",function(){
     let FirstName = cy.get("#firstName")
      FirstName.type("YGOR",{delay:250})
      cy.get(".button").click()
      let ClasseErro = cy.get(".error").should('be.visible')

    let LastName = cy.get("#lastName")
      LastName.type("XAVIER")
      cy.get(".button").click()
      ClasseErro.should('be.visible')


    let Email = cy.get("#email")
      Email.type("ygorxavier77@gmail.com")
      cy.get(".button").click()
      ClasseErro.should('be.visible')

    let Telefone = cy.get("#phone").type("11980510864")
      cy.get("#phone-checkbox").click("right")
      cy.get(".button").click().should("be.visible")
      ClasseErro.should('be.visible')
      

    let TextoAdicional = cy.get("#open-text-area")
      TextoAdicional.type("TESTE")
      cy.get(".button").click()
      ClasseErro.should('be.visible')


    let sucessso = cy.get(".success").should("be.visible")
  })
})

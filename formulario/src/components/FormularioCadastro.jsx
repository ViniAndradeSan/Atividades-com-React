  import InputField from "./InputField"; 
  import { useState } from "react"; 

  function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault() // não deixa recarregar a pagina
    
    if (nome.trim() === ""){
      setErro('O campo desse nome está sem nada, preencha!')
      console.log(erro)
      return
    } 

    if (telefone.length !== 11) {
      setErro('O campo telefone ta faltado, preencha corretamente!')
      console.log(erro)
      return
    }

    if (!termos){
      setErro('É preciso ativar o concordo com os termos de uso!')
      console.log(erro)
      return

    }

    setErro('')
    setSucesso(true)
    console.log({nome, email, telefone}) // Envio para o banco
    setSucesso(false)
  } 

    return (
      <form onSubmit={handleSubmit}>
        {erro && <p style={{color: "red"}}>{erro}</p>}
        {sucesso && <p style={{color: "green"}}>Cadastrado !!</p>}
        <InputField label="Nome" 
          type="text" name="nome" 
          placeholder={"nome"} 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} />
        <InputField 
          label="Email" 
          type="email" 
          name="email" 
          placeholder={"email"} 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />
        <InputField 
          label="Telefone" 
          type="tel" 
          name="telefone" 
          placeholder={"telefone"} 
          value={telefone} 
          onChange={(e) => setTelefone(e.target.value)} />
        <InputField 
          label= "Termos de uso: " 
          type="checkbox" 
          name="termos" />
          value={}
        <InputField 
          label="date" 
          type="date" 
          name="dataNascimento" />
        <InputField 
          label="file" 
          type="file" 
          name="arquivo" />
        <button type="submit">Enviar</button>
      </form> 
    );
  }

  export default Formulario;

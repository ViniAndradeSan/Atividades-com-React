  import ButaoEnviar from "./ButaoEnviar";
  import InputField from "./InputField";
  import { use, useState } from "react"; 

  function Formulario() {
    // const [nome, setNome] = useState("");
    // const [email, setEmail] = useState("");
    // const [telefone, setTelefone] = useState("");
    // const [termos, setTermos] = useState(false);
    // const [erro, setErro] = useState("");
    // const [sucesso, setSucesso] = useState(false);
    const [validacao, setValidacao] = useState({erro:"", sucesso: false})
    const [user, setUser] = useState({nome: "", email: "", telefone: "", termos: false})

    const handleSubmit = (e) => {
    e.preventDefault() // não deixa recarregar a pagina
    
    if (user.nome.trim() === ""){
      setErro('O campo desse nome está sem nada, preencha!')
      console.log(erro)
      return
    } 

    if (user.telefone.length !== 11) {
      setErro('O campo telefone ta faltado, preencha corretamente!')
      console.log(erro)
      return
    }

    if (!user.termos){
      setErro('É preciso ativar o concordo com os termos de uso!')
      console.log(erro)
      return

    }

    setErro('')
    setSucesso(true)
    console.log(user) // Envio para o banco
    setSucesso(false)
  } 

    return (
      <form onSubmit={handleSubmit}>
        {validacao.erro && <p style={{color: "red"}}>{validacao.erro}</p>}
        {validacao.sucesso && <p style={{color: "green"}}>Cadastrado !!</p>}
        <InputField label="Nome" 
          type="text" name="nome" 
          placeholder={"nome"} 
          value={user.nome} 
          onChange={(e) => setUser((dados) => ({
            ...dados, nome: e.target.value
          }))} />
        <InputField 
          label="Email" 
          type="email" 
          name="email" 
          placeholder={"email"} 
          value={user.email} 
          onChange={(e) => setUser((dados) => ({
            ...dados, email: e.target.value 
          }))} />
        <InputField 
          label="Telefone" 
          type="tel" 
          name="telefone" 
          placeholder={"telefone"} 
          value={user.telefone} 
          onChange={(e) => setUser((dados) => ({
            ...dados, telefone: e.target.value 
          }))} />
        <InputField 
          label= "Termos de uso: " 
          type="checkbox" 
          name="termos" 
          checked={user.termos}
          onChange={(e) => setUser((dados) => ({
            ...dados, termos: e.target.value
          }))} />
        <InputField 
          label="date" 
          type="date" 
          name="dataNascimento" />
        <InputField 
          label="file" 
          type="file" 
          name="arquivo" />
        <ButaoEnviar />

      <div>
        <p>Nome: {user.nome}</p>
      </div>
      </form> 
    );
  }

  export default Formulario;

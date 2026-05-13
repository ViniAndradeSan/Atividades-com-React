import InputField from "./InputField"; // Importação correta
import { useState } from "react"; // Importação do useState

function Formulario() {
  const [nome, setnome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  return (
    <form>
      <InputField label="Nome" 
        type="text" name="nome" 
        placeholder={"nome"} 
        value={nome} 
        onChange={(e) => setnome(e.target.value)} />
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
        label= "checkbox" 
        type="checkbox" 
        name="termos" />
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

import InputField from "./InputField"; // Importação correta

function Formulario() { 
  return (
    <form>
      <InputField label="Nome" type="text" name="nome" />
      <InputField label="Email" type="email" name="email" />
      <InputField label="Senha" type="password" name="senha" />
      <InputField label= "checkbox" type="checkbox" name="termos" />
      <InputField label="date" type="date" name="dataNascimento" />
      <InputField label="file" type="file" name="arquivo" />
    </form> 
  );
}

export default Formulario;

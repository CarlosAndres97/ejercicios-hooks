import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario Con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="random@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="****"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary">
        Borrar
      </button>
    </>
  );
};

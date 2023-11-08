import { Link} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const RegisterHandler = async (e) => {
    e.preventDefault();
    try {
       await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      alert("Registration successfull");
    } catch (error) {
      console.log(error);
      alert("Registration failed,please try again later");
    }
  };
  return (
    <>
      <div className=" mt-4 grow flex items-center justify-around relative top-[8rem]">
        <div className="mb-32">
          <h1 className="text-4xl text-center mb-4">Register</h1>
          <form className="max-w-md mx-auto" onSubmit={RegisterHandler}>
            <input
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500 ">
              Already a member?
              <Link className="underline text-black" to={"/login"}>
                Login now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
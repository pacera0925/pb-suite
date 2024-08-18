import { useState } from "react";
import LoginForm from "./pages/login/LoginForm.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="w-full h-full flex items-center justify-center backdrop-blur-[2px]">
      {!user && <LoginForm />}
    </div>
  );
}

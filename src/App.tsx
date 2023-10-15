import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";

const supabase = createClient(
  "https://vnmbotzuydknrdeuysms.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZubWJvdHp1eWRrbnJkZXV5c21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNjI1NDEsImV4cCI6MTk5NzgzODU0MX0.thDgFY_nf4nKEYdKt32EpTcm6y1lu19YLiU_QSH9ZFg"
);

function App() {
  const [countries, setCountries] = useState<any>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  console.log(countries);

  return (
    <div className="w-[600px] flex justify-center mx-auto">
      <div className="">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="header">Vite React Starter 💯</p>
        <p className="header">with Superbase 💯</p>
        <ul>
          {countries?.length > 0 &&
            countries.map((country) => (
              <li key={country?.name}>{country?.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// LLssdLckYvopplcQ

import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Navbar from "./components/navbar/navbar";
import Todo from "./components/todo/todo";
import { createClient } from "@supabase/supabase-js";

const projUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const projAnon = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(projUrl, projAnon);

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const checkUserSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    checkUserSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      {!user ? (
        <>
          {showSignup ? (
            <Signup onToggle={() => setShowSignup(false)} />
          ) : (
            <Login onToggle={() => setShowSignup(true)} />
          )}
        </>
      ) : (
        <Todo />
      )}

      <Footer />
    </>
  );
}

export default App;
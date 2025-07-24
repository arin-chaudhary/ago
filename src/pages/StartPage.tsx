import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StartUpForm from "@/components/StartUpForm";

export default function StartPage() {
  let title: string = "Getting Started in Ago";

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div>
      <Navbar />
      <StartUpForm />
      <Footer />
    </div>
  );
}

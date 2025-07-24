"use strict";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import TextArea from "@/components/TextArea";
import Footer from "@/components/Footer";
import { Buttons } from "@/components/Buttons";
import Card from "@/components/Cards";

export default function Homepage() {
  const text_data: string =
    "Ago is a way where you can start your own startup and manage it in just a few clicks.";

  let title: string = "Ago - Startup Hero";

  useEffect(() => {
    document.title = title;
  }, []);

  //FIXME ahh make me a click able to link into the /startupform
  return (
    <div>
      <Navbar />
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-6 mt-12">
        <div className="animate-slidein max-w-xl mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-extrabold text-left text-gray-900 dark:text-white leading-tight">
            Your Startup Hero
          </h1>
          <div className="mt-6">
            <TextArea text={text_data} />
            <div className="mt-4">
              <Buttons btn_text="Get started" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/images/welcome_image.png"
            alt="Startup Illustration"
            className="w-[300px] md:w-[350px] h-auto mx-auto rounded-2xl animate-zoomfade"
          />
        </div>
      </section>
      <section className="mt-16 px-6 pb-16">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Why Ago?
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          <Card
            title="Launch Instantly"
            description="Set up your startup structure in seconds (very easy) — no login required."
            image="/images/launch.png"
          />
          <Card
            title="Manage Customers"
            description="Add, edit, and track customer interactions easily."
            image="/images/customer.png"
          />
          <Card
            title="Handle Employees"
            description="Organize your team with minimal effort and no backend needed."
            image="/images/employee.png"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

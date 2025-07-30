"use strict";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function StartupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    website: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "startups"), formData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to save. Try again.");
    }
  };

  return (
    <Card className="max-w-xl mx-auto p-6 mt-10 shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Create Your Startup
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Startup Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="industry"
            placeholder="Industry"
            value={formData.industry}
            onChange={handleChange}
            required
          />
          <Input
            name="website"
            placeholder="Website (https://...)"
            type="url"
            value={formData.website}
            onChange={handleChange}
          />
          <Textarea
            name="description"
            placeholder="Short description about your startup"
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

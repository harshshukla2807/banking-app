"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "Harsh",
    lastName: "Shukla",
    email: "harsh@example.com",
    phone: "+91 9876543210",
    dob: "2002-05-18",
    address: "Pitampura",
    city: "Delhi",
    state: "Delhi",
    pincode: "110034",
    country: "India",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Later:
    // await axios.put("/api/profile", formData);

    alert("Profile updated successfully! (Demo)");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid gap-4 md:grid-cols-2">

            <Field
              label="First Name"
              value={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
            />

            <Field
              label="Last Name"
              value={formData.lastName}
              onChange={(value) => handleChange("lastName", value)}
            />

            <Field
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
            />

            <Field
              label="Phone Number"
              value={formData.phone}
              onChange={(value) => handleChange("phone", value)}
            />

            <Field
              label="Date of Birth"
              type="date"
              value={formData.dob}
              onChange={(value) => handleChange("dob", value)}
            />

            <Field
              label="Country"
              value={formData.country}
              onChange={(value) => handleChange("country", value)}
            />

            <Field
              label="Address"
              value={formData.address}
              onChange={(value) => handleChange("address", value)}
            />

            <Field
              label="City"
              value={formData.city}
              onChange={(value) => handleChange("city", value)}
            />

            <Field
              label="State"
              value={formData.state}
              onChange={(value) => handleChange("state", value)}
            />

            <Field
              label="Pincode"
              value={formData.pincode}
              onChange={(value) => handleChange("pincode", value)}
            />

          </div>

          <div className="flex justify-end">
            <Button type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
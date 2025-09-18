import React, { useState } from "react";
import "@splinetool/viewer";
import Footer from '../components/Footer';

// Reusable Input Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500 text-zinc-5  00 rounded-3xl outline-none  focus:border-green-700 transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    console.log("Saved Address:", address);
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-600">
        Add Shipping{" "}
        <span className="font-semibold text-green-600">Address</span>
      </p>

      <div className="flex flex-col md:flex-row gap-12 mt-10">
        {/* ✅ 3D Viewer Box */}
        <div className="flex-1 flex items-center justify-center">
          <spline-viewer
            url="https://prod.spline.design/VwXa6VTEOXzKaUPP/scene.splinecode"
            style={{
              width: "100%",
              height: "400px", // Fixed height
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          ></spline-viewer>
        </div>

        {/* ✅ Form Section */}
        <div className="flex-1 max-w-lg text-zinc-600">
          <form
            onSubmit={onsubmitHandler}
            className="space-y-3 mt-6 text-sm text-zinc-600"
          >
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last name"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name="street"
              type="text"
              placeholder="Street address"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipCode"
                type="number"
                placeholder="Zip code"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="number"
              placeholder="Phone number"
            />

            <button
              type="submit"
              className="w-full mt-6 bg-green-700 text-white px-4 py-2.5 rounded-3xl hover:bg-green-800 transition"
            >
              Save Address
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddAddress;

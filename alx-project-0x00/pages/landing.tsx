import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="flex gap-4 mb-8">
        <Button
          title="Small Rounded"
          className="px-3 py-1 text-sm rounded-sm bg-blue-500 text-white"
        />
        <Button
          title="Medium Rounded"
          className="px-4 py-2 text-base rounded-md bg-green-500 text-white"
        />
        <Button
          title="Large Rounded"
          className="px-6 py-3 text-lg rounded-full bg-red-500 text-white"
        />
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;

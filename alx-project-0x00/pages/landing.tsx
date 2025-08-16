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
          styles="px-3 py-1 text-sm rounded-sm bg-blue-500 text-white"
        />
        <Button
          title="Medium Rounded"
          styles="px-4 py-2 text-base rounded-md bg-green-500 text-white"
        />
        <Button
          title="Large Rounded"
          styles="px-6 py-3 text-lg rounded-full bg-red-500 text-white"
        />
        <Button
          title="Extra Rounded"
          styles="px-5 py-2 text-base rounded-lg bg-purple-500 text-white"
        />
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;

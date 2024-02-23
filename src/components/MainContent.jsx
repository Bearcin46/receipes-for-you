import React, { useState, useEffect } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import TextArea from "./TextArea";
import Select from "./Select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/index";

const formSchema = z.object({
  foodName: z.string().min(4),
  incrediants: z.string().min(5).max(120),
  steps: z.string().min(20).max(620),
  typeOfFood: z.string(),
});

const MainContent = ({ onAddingrecipe }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(formSchema) });

  const COLLECTION_NAME = "recipes";

  const sendInfo = async (data) => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
      console.log(docRef);
      console.log("Document written with ID: ", docRef.id);
      alert("Added as you said!");
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  useEffect(() => {
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));

      const recipeData = querySnapshot.docs.map((doc) => doc.data());
      onAddingrecipe(recipeData);

      if (querySnapshot.docs.length === 0) {
        console.log("No record exist!");
      }
    }
    getDataFromFirebase();
  }, []);

  return (
    <div className="w-full">
      <div className=" py-6 rounded max-w-2xl border-t-8  border-l-8 border-[#7da751] border-br-8 border-br-white  drop-shadow-md  flex-1 mt-10 mb-10 px-5 bg-[#ffc198]">
        <form
          action=""
          onSubmit={handleSubmit(sendInfo)}
          className="flex flex-col gap-4"
        >
          {/* food name */}
          <div className="flex flex-col  gap-2 relative">
            <label htmlFor="foodName" className="text-black font-semibold">
              Food Name :
            </label>
            <Input
              name="foodName"
              placeholder={"Enter your Reciepe name"}
              register={register("foodName")}
              error={errors.foodName}
              required
            />
          </div>

          {/* type of food */}
          <div className="flex flex-col  gap-2 relative">
            <label htmlFor="typeOfFood" className="text-black font-semibold">
              Food Name :
            </label>
            <Select name="typeOfFood" register={register("typeOfFood")} />
          </div>

          {/* incrediants*/}
          <div className="flex flex-col  gap-2 relative">
            <label htmlFor="incrediants" className="text-black font-semibold">
              Incredients :
            </label>
            <TextArea
              name="incrediants"
              placeholder="Enter all the incrediants needed"
              register={register("incrediants")}
              error={errors.incrediants}
              required
            />
          </div>

          {/* step 1 */}
          <div className="flex flex-col  gap-2 relative">
            <label htmlFor="steps" className="text-black font-semibold">
              Steps to be followed :
            </label>
            <TextArea
              name="steps"
              placeholder="Enter first procedure to follow"
              register={register("steps")}
              error={errors.steps}
              required
            />
          </div>

          <div className="mt-4">
            <button className="rounded py-2 px-5 font-bold bg-[#36501a] text-white">
              Add recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainContent;

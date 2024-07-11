"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LucideLoader2 } from "lucide-react";
// import { Loader, Loader2, LucideLoader2} from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate,userFormInput,loading }: PROPS) {
  const [formData, setFormData] = useState<any>();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
   };
  const onSubmit = (e:any) => {
    e.preventDefault();
    userFormInput(formData);
  };
  return (
    <div className="p-5 shadow-md border rounded-lg bg-purple-100">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon}
       alt="icon" width={70} height={70} />
      <h2 className="font-bold text-3xl mb-2 text-purple-500">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit} >
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7 ">
            <label className="font-bold text-purple-500">{item.label}</label>
            {item.field == "input" ? 
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className="bg-white border-purple-500"
              />
             : item.field == "textarea" ? 
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className="bg-white border-purple-500"
              />
             : null
             }
          </div>
        ))}
        <Button
          type="submit"
          className="w-full py-6 h-13 bg-purple-500"
          disabled={loading}>
        
          {loading && <LucideLoader2 className="animate-spin" />}
        Generate Content
        </Button>
      </form>
    </div>
  );
}
export default FormSection;

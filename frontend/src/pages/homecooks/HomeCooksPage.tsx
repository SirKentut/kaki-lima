import React from 'react';
import { Input } from 'components/ui/input';
import  footer  from 'components/ui/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion"


const HomeCooksPage: React.FC = () => {
  return (
    <div className="bg-blue-500 text-black text-center p-10">
    <h1 className="text-4xl font-bold">Welcome to the homecooks page!</h1>
    <p className="text-lg mt-4">This is a test to see if Tailwind is affecting the components.</p>
    <Input type="text" placeholder='Text'/>
    <div>
      <p className="text-lg mt-4">FAQ</p>
      <Accordion type="single" collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>How can I get my store recognized</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
    <div>
      {footer()}
    </div>
  </div>

  

  );
};

export default HomeCooksPage;

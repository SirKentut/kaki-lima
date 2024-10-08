import React from 'react';
import { Input } from 'components/ui/input';
import  footer  from 'components/ui/footer';

const HomeCooksPage: React.FC = () => {
  return (
    <div className="bg-blue-500 text-black text-center p-10">
    <h1 className="text-4xl font-bold">Welcome to the homecooks page!</h1>
    <p className="text-lg mt-4">This is a test to see if Tailwind is affecting the components.</p>
    <Input type="text" placeholder='Text'/>
    <div>
      {footer()}
    </div>
  </div>

  

  );
};

export default HomeCooksPage;

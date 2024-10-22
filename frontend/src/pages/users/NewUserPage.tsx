import React from 'react';
import ShuffleHero from "components/ui/sufflehero";

const NewUserPage:React.FC=()=>{
return(
    <div>
        <ShuffleHero/>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
  <div className="shrink-0">
    <img className="size-12" src="/img/logo.svg" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div>
    </div>
    );
};

export default NewUserPage;
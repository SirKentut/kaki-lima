import React from 'react';
import ShuffleHero from "components/ui/sufflehero";
import { Calendar } from 'components/ui/calendar';

const NewUserPage:React.FC=()=>{
return(
    <div>
        <h1>Welcome to Kaki Lima</h1>
        <ShuffleHero/>
        <Calendar/>
    </div>
    );
};

export default NewUserPage;
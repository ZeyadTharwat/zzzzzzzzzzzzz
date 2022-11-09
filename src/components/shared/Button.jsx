import React from 'react';
const Button = props => {
  return (
          <button onClick={props.onClick} className={`hover:font-semibold border-gradient transition-all ease-in duration-400  font-mukta bg-gradient-to-r from-light-purple to-light-blue rounded-20px text-white text-lg xl:text-xl  hover:text-transparent hover:bg-clip-text  ${props.className} `}>
{props.children}
</button>
);
};

export default Button;

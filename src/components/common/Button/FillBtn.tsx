import React from "react";

interface Propstype extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
}

export default function FillBtn({ children, backgroundColor, style, ...rest }: Propstype) {
  return (
    <button
      className='min-w-[122px] h-[48px] py-3 px-4 text-b2 leading-b2 font-b rounded-[8px] text-white'
      {...rest}
      style={{
        backgroundColor: backgroundColor || '#135c9d',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

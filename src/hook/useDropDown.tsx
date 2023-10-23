"use client";

import { useEffect, useRef, useState } from "react";

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", closeDropDown);

    return () => {
      document.removeEventListener("click", closeDropDown);
    };
  }, [isOpen]);

  const closeDropDown = (event: React.MouseEvent | MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    )
      setIsOpen(false);
  };
  
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const DropDownComponent = ({
    children,
    className,
  }: {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
  }) => (
    <>
      {isOpen && (
        <div
          ref={dropdownRef}
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={className}
          style={{ zIndex: 3, cursor: "default" }}
        >
          {children}
        </div>
      )}
    </>
  );

  return { isOpen, toggleDropdown, DropDownComponent, closeDropDown };
};

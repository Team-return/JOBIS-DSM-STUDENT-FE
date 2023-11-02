"use client";

import { useEffect, useRef, useState } from "react";

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.addEventListener("click", onClickOutside);

    return () => {
      document.body.removeEventListener("click", onClickOutside);
    };
  }, [isOpen, node]);

  useEffect(() => {
    setNode(dropdownRef.current);
  }, [dropdownRef]);

  const onClickOutside = (event: React.MouseEvent | MouseEvent) => {
    if (node && !node.contains(event.target as Node)) setIsOpen(false);
  };

  const closeDropDown = () => {
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

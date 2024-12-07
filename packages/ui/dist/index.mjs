// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  children,
  onClick,
  variant = "primary"
}) => {
  const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: `${baseClasses} ${variantClasses[variant]}`,
      "data-testid": "button",
      children
    }
  );
};
export {
  Button
};

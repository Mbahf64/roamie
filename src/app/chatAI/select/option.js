
// Option.js
import { motion } from "framer-motion";
import { itemVariants, actionIconVariants } from "../select/variant"; // Import the missing variants

const Option = ({ text, Icon, setOpen, setSelectedOption }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => {
          setSelectedOption({ text, Icon }); // Update both the text and icon for the selected option
          setOpen(false); // Close the dropdown after selection
        }}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon /> {/* Display icon next to option */}
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default Option;

import "./style.css";
import { motion } from "framer-motion";

export default function StartMotion() {
  return (
    <motion.div
      className="start__bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.img className="start__logo" src="logo_white.png" />
    </motion.div>
  );
}

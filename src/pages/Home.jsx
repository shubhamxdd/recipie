import Popular from "../components/Popular";
import Veg from "../components/Veg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veg />
    </motion.div>
  );
};

export default Home;

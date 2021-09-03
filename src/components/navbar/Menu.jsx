import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./menu.scss";
import { MenuSharp } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <main>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            exit={{ width: 200 }}

          >
            <CloseIcon
              style={{ fontSize: 30 }}
              className="menu"
              onClick={handleClose}
            />
            <div className="nav-container">
              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    x: 0,
                    opacity: 0,
                  },
                  visible: {
                    x: 10,
                    opacity: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.5 },
                }}
              >
                <Link to="/movies" className="link">
                  <span className="navbarmainLinks">Filmlar</span>
                </Link>
              </motion.p>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    x: 0,
                    opacity: 0,
                  },
                  visible: {
                    x: 10,
                    opacity: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.5 },
                }}
              >
                <Link to="/series" className="link">
                  <span className="navbarmainLinks">Seriallar</span>
                </Link>
              </motion.p>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    x: 0,
                    opacity: 0,
                  },
                  visible: {
                    x: 10,
                    opacity: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.5 },
                }}
              >
                <Link to="/watch" className="link">
                  <span className="navbarmainLinks">Tomosha qilish</span>
                </Link>
              </motion.p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div>
        <MenuSharp
          className="menu"
          onClick={handleOpen}
          style={{ display: `${isOpen ? `none` : `block`}`, fontSize: 40 }}
        />
      </div>
    </main>
  );
};

export default Navigation;

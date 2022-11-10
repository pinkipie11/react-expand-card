import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        transiton={{ layout: { duration: 1, type: 'spring' } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: '1rem',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.5)',
        }}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className="expand"
            >
              <p>
                lorem20 Ovo je neki tekst. Ne radi mi extenzija pa ću nešto
                napisati. I još malo.
              </p>
              <p>lorem 10 I ovdje ću nešto napisati, samo malo kraće.</p>
              <button>Hello</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;

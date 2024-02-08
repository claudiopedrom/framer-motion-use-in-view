import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { Item } from './Item'

const items = [
  {
    topic: "React",
    headline: "React is a JavaScript library for building user interfaces",
    description:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”."
  },
  {
    topic: "Vue",
    headline: "Vue is a progressive framework for building user interfaces",
    description:
      "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable."
  },
  {
    topic: "Angular",
    headline: "One framework. Mobile & desktop",
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript."
  }
]

function App() {
  const [activeTopic, setActiveTopic] = React.useState(items[0].topic);

  const handleInView = (topic) => {
    setActiveTopic(topic);
  };

  return (
    <section>
      <div style={{ position: "fixed", top: "0", bottom: "0", left: "0", width: "20%", background: "aliceblue" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={activeTopic} // Key change triggers the animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTopic}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div style={{ width: "80%", height: "100%", paddingLeft: "20%", overflowY: "auto" }}>
        {items.map((item, index) => (
          <Item key={index} item={item} onInView={handleInView} />
        ))}
      </div>
    </section>
  )
}

export default App

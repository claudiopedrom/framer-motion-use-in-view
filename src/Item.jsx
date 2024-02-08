/* eslint-disable react/prop-types */
import React from 'react';
import { useInView } from 'framer-motion';

export function Item({ item, onInView }) {
  // https://www.framer.com/motion/use-in-view/
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    amount: 0.5
  })

  React.useEffect(() => {
    if (isInView) {
      onInView(item.topic);
    }
  }, [isInView, item.topic, onInView])

  return (
    <div ref={ref} style={{ minHeight: "100svh" }}>
      <h2>{item.headline}</h2>
      <p>{item.description}</p>
    </div>
  );
}

import React, {useState} from 'react';
import {motion} from 'framer-motion';

export function NetworkEffect () {
  const [activeNode, setActiveNode] = useState (null);
  const nodeCount = 30;

  const nodes = [...Array (nodeCount)].map ((_, i) => ({
    id: i,
    x: Math.sin (i / nodeCount * Math.PI * 4) * 45 + 50,
    y: Math.cos (i / nodeCount * Math.PI * 4) * 45 + 50,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-[999]">
      {nodes.map ((node, i) => (
        <motion.div
          key={i}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: i * 0.1}}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          onMouseEnter={() => setActiveNode (i)}
          onMouseLeave={() => setActiveNode (null)}
        >
          <div className="relative">
            {/* Main box */}
            <motion.div
              className="w-3 h-3 bg-white/20 backdrop-blur-sm rotate-45"
              animate={{
                scale: activeNode === i ? 1.5 : 1,
                backgroundColor: activeNode === i
                  ? 'rgba(255, 255, 255, 0.3)'
                  : 'rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/10 blur-sm" />
            </motion.div>

            {/* Ping animation */}
            <div className="absolute inset-0 bg-white/10 rotate-45 animate-ping" />

            {/* Connection threads */}
            {[...Array (3)].map ((_, j) => (
              <motion.div
                key={j}
                className="absolute left-1/2 top-1/2 h-[1px] origin-left"
                style={{
                  width: activeNode === i ? '200px' : '100px',
                  transform: `rotate(${j / 3 * 360}deg)`,
                }}
                animate={{
                  width: activeNode === i ? '200px' : '100px',
                  opacity: activeNode === i ? 0.8 : 0.2,
                }}
                transition={{duration: 0.3}}
              >
                {/* Gradient thread */}
                <div className="h-full w-full bg-gradient-to-r from-white/30 via-white/20 to-transparent" />

                {/* Animated particle */}
                {activeNode === i &&
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-1 bg-white/50"
                    animate={{
                      x: [0, '100%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

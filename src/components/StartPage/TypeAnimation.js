import React from "react";
import TextTransition, { presets } from "react-text-transition";
import {H3} from './styles';

const TEXTS = ["React.", "Java.", "Javascript.", "HTML.", "CSS."];

const colors = ["#61dafb", "#64ffda", "#61dafb", "#64ffda", "#61dafb"];

export const TypeAnimation = () => {
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <H3>
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.slow}
          style={{ color: colors[index % colors.length] }}
          direction={"down"}
        />
      </H3>
    );
  };
  
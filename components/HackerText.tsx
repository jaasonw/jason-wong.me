"use client";

import { useEffect, useState } from "react";

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
function blank(text: string) {
  return text
    .split("")
    .map((_letter, index) => {
      return " ";
    })
    .join("");
}

export default function HackerText({ text }: { text: string }) {
  let [displayText, setText] = useState(blank(text));
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(
        displayText
          .split("")
          .map((_letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join(""),
      );
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1;
    }, 30);
  }, []);
  return (
    <>
      <span>{displayText}</span>
      <noscript>
        <span>{text}</span>
      </noscript>
    </>
  );
}

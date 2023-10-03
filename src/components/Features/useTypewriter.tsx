import { useState, useEffect } from 'react';

export const useTypewriter = (words: string[], delay: number = 100) => {
  const [text, setText] = useState<string>('');
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    if (isFinished || wordIndex === words.length) return;

    const word = words[wordIndex];
    const timeoutId = setTimeout(() => {
      if (isTyping) {
        if (charIndex < word.length) {
          setText((prevText) => prevText + word.charAt(charIndex));
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else {
          setIsTyping(false);
          if (wordIndex === words.length - 1) {
            setIsFinished(true);
          }
        }
      } else {
        if (text.length > 0) {
          setText((prevText) => prevText.slice(0, -1));
        } else {
          setIsTyping(true);
          setCharIndex(0);
          setWordIndex((prevWordIndex) => prevWordIndex + 1);
        }
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [charIndex, delay, isTyping, text, wordIndex, words, isFinished]);

  return text;
};

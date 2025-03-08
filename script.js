// Preloader Animation
console.log("Preloader script loaded"); // Check if script is loaded

gsap.to(".preloader", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
  onComplete: () => {
    console.log("Preloader animation complete"); // Check if animation completes
    document.querySelector(".preloader").style.display = "none";
  },
});

// Split Text Reveal Animation for Heading
const heading = document.getElementById("heading");
const headingText = heading.textContent;
heading.textContent = ""; // Clear the text

// Split the text into individual letters
const letters = headingText.split("");
letters.forEach((letter, index) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.opacity = 0; // Start with invisible letters
  heading.appendChild(span);

  // Animate each letter (faster)
  gsap.to(span, {
    opacity: 1,
    duration: 0.3, // Reduced duration
    delay: index * 0.05, // Reduced delay
    ease: "power2.out",
  });
});

// Typewriter Effect for Description
const description = document.getElementById("description");
const textToType = "A passionate front-end developer specializing in web animations and interactive designs.";

let index = 0;
function typeWriter() {
  if (index < textToType.length) {
    description.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 30); // Increased speed (reduced delay)
  }
}

// Start the typewriter effect after the heading animation
gsap.delayedCall(letters.length * 0.05 + 0.3, typeWriter); // Adjusted delay

// Box Animations
gsap.from("#box1", {
  duration: 2,
  x: -200,
  rotation: 360,
  ease: "power2.out",
  repeat: -1,
  yoyo: true,
});

gsap.from("#box2", {
  duration: 2,
  y: -200,
  scale: 0.5,
  ease: "bounce.out",
  repeat: -1,
  yoyo: true,
});

gsap.from("#box3", {
  duration: 2,
  x: 200,
  rotation: -360,
  ease: "elastic.out",
  repeat: -1,
  yoyo: true,
});

// Elastic Button Press
document.querySelector(".elastic-button").addEventListener("click", () => {
  // Reset the button scale before animating
  gsap.set(".elastic-button", { scale: 1 });

  // Animate the button
  gsap.to(".elastic-button", {
    scale: 0.9,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: "power2.out",
    onComplete: () => {
      // Reset the button scale after animation
      gsap.set(".elastic-button", { scale: 1 });
    },
  });
});

// Hover Glow & Scale
document.querySelector(".hover-button").addEventListener("mouseenter", () => {
  gsap.to(".hover-button", {
    scale: 1.1,
    boxShadow: "0 0 20px #64ffda",
    duration: 0.3,
    ease: "power2.out",
  });
});

document.querySelector(".hover-button").addEventListener("mouseleave", () => {
  gsap.to(".hover-button", {
    scale: 1,
    boxShadow: "0 0 0px #64ffda",
    duration: 0.3,
    ease: "power2.out",
  });
});

// Hover Zoom with Depth
document.querySelector(".hover-zoom-section img").addEventListener("mouseenter", () => {
  gsap.to(".hover-zoom-section img", {
    scale: 1.1, // Slightly zoom in
    rotateY: 10, // Tilt on the Y-axis
    rotateX: 10, // Tilt on the X-axis
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Add shadow for depth
    duration: 0.5,
    ease: "power2.out",
  });
});

document.querySelector(".hover-zoom-section img").addEventListener("mouseleave", () => {
  gsap.to(".hover-zoom-section img", {
    scale: 1, // Reset zoom
    rotateY: 0, // Reset Y-axis tilt
    rotateX: 0, // Reset X-axis tilt
    boxShadow: "0 0 0px rgba(0, 0, 0, 0)", // Remove shadow
    duration: 0.5,
    ease: "power2.out",
  });
});

// SVG Morphing Animation
const morphPath = document.getElementById("morph-path");

// Define the starting and ending shapes
const circlePath = "M100,20 a80,80 0 1,0 0,160 a80,80 0 1,0 0,-160"; // Circle
const starPath = "M100,10 L120,70 L180,70 L130,110 L150,170 L100,130 L50,170 L70,110 L20,70 L80,70 Z"; // Star

// Animate the morphing effect
gsap.to(morphPath, {
  duration: 3,
  attr: { d: starPath }, // Morph to the star shape
  repeat: -1, // Loop indefinitely
  yoyo: true, // Reverse the animation
  ease: "power2.inOut",
});

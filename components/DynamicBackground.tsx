// // components/DynamicBackground.tsx
// "use client";
// import React, { useEffect } from 'react';

// const DynamicBackground: React.FC = () => {
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       // Update the CSS variables on the root element
//       document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
//       document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
//     };

//     // Listen for mouse movement on the entire window
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       // Clean up the event listener on component unmount
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="interactive-bg">
//       {Array.from({ length: 400 }).map((_, i) => (
//         <div key={i} className="interactive-square" />
//       ))}
//     </div>
//   );
// };

// export default DynamicBackground;


// components/DynamicGradientBackground.tsx
"use client";
import React, { useEffect, useRef } from 'react';

const DynamicGradientBackground: React.FC = () => {
    const particlesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const particlesContainer = particlesContainerRef.current;
        if (!particlesContainer) return;

        // --- Particle Generation Logic (Recreated in React) ---
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            resetParticle(particle);
            particlesContainer.appendChild(particle);
            animateParticle(particle);
        };

        const resetParticle = (particle: HTMLDivElement) => {
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = '0';
        };

        const animateParticle = (particle: HTMLDivElement) => {
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;

            setTimeout(() => {
                particle.style.transition = `all ${duration}s linear`;
                particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;

                const moveX = parseFloat(particle.style.left) + (Math.random() * 20 - 10);
                const moveY = parseFloat(particle.style.top) - Math.random() * 30;

                particle.style.left = `${moveX}%`;
                particle.style.top = `${moveY}%`;

                setTimeout(() => {
                    animateParticle(particle);
                }, duration * 1000);
            }, delay * 1000);
        };

        // Create initial particles
        const particleCount = 80;
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        // --- Mouse Interaction Logic ---
        const handleMouseMove = (e: MouseEvent) => {
            if (!particlesContainer) return;

            // Create temporary particle at mouse position
            const mouseX = (e.clientX / window.innerWidth) * 100;
            const mouseY = (e.clientY / window.innerHeight) * 100;

            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${mouseX}%`;
            particle.style.top = `${mouseY}%`;
            particle.style.opacity = '0.6';
            particlesContainer.appendChild(particle);

            setTimeout(() => {
                particle.style.transition = 'all 2s ease-out';
                particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
                particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
                particle.style.opacity = '0';
                setTimeout(() => particle.remove(), 2000);
            }, 10);

            // Subtle movement of gradient spheres (in CSS, no JS needed)
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="gradient-background">
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
            <div className="gradient-sphere sphere-3"></div>
            <div className="glow"></div>
            <div className="grid-overlay"></div>
            <div className="noise-overlay"></div>
            <div className="particles-container" ref={particlesContainerRef}></div>
        </div>
    );
};

export default DynamicGradientBackground;
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Node3D {
  x: number;
  y: number;
  z: number;
  angle: number;
  orbitRadius: number;
  orbitSpeed: number;
  label: string;
  color: string;
}

const Interactive3DModel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    // Ring 1 (Inner - Core/Backend/Data)
    { label: "Python", color: "#FFD43B", ring: 1 },
    { label: "TypeScript", color: "#3178C6", ring: 1 },
    { label: "PostgreSQL", color: "#3ECF8E", ring: 1 },
    { label: "Supabase", color: "#3ECF8E", ring: 1 },
    { label: "Flask", color: "#FFFFFF", ring: 1 },
    { label: "Pytest", color: "#00FF66", ring: 1 },

    // Ring 2 (Middle - Frontend/UI)
    { label: "React.js", color: "#61DAFB", ring: 2 },
    { label: "Next.js", color: "#FFFFFF", ring: 2 },
    { label: "Angular 17", color: "#DD0031", ring: 2 },
    { label: "Tailwind", color: "#06B6D4", ring: 2 },
    { label: "Redux", color: "#764ABC", ring: 2 },

    // Ring 3 (Outer - Cloud/DevOps/SRE)
    { label: "Docker", color: "#2496ED", ring: 3 },
    { label: "AWS", color: "#FF9900", ring: 3 },
    { label: "GCP", color: "#4285F4", ring: 3 },
    { label: "GitLab CI", color: "#FC6D26", ring: 3 },
    { label: "SRE", color: "#FF5F1F", ring: 3 }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    let animationId: number;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container && canvas) {
        width = container.clientWidth;
        height = container.clientHeight || 400;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const maxRadius = Math.min(width, height) * // Increase max scale slightly to fill container well
      (width < 600 ? 0.35 : 0.45);
    const rings = [maxRadius * 0.4, maxRadius * 0.7, maxRadius * 1.0];
    
    // Distribute skills along their assigned rings
    const nodes: Node3D[] = skills.map((skill, i) => {
      const ringNodes = skills.filter(s => s.ring === skill.ring);
      const indexInRing = ringNodes.indexOf(skill);
      const angle = (Math.PI * 2 * indexInRing) / ringNodes.length + (skill.ring * Math.PI / 4);
      
      return {
        x: 0, y: 0, z: 0,
        angle: angle,
        orbitRadius: rings[skill.ring - 1],
        orbitSpeed: (0.002 + (3 - skill.ring) * 0.001) * (skill.ring % 2 === 0 ? 1 : -1),
        label: skill.label,
        color: skill.color
      };
    });

    let angleX = 0.5; // Initial tilt
    let angleY = 0;
    let currentAngleX = angleX;
    let targetAngleX = angleX;
    let targetAngleY = 0.005; // Auto continuous rotation
    
    let isDragging = false;
    let startMouseX = 0;
    let startMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      if (isDragging) {
        const deltaX = currentX - startMouseX;
        const deltaY = currentY - startMouseY;
        targetAngleX = angleX - deltaY * 0.01;
        // Clamp tilt
        targetAngleX = Math.max(-0.8, Math.min(1.2, targetAngleX));
      }

      // Check hover
      let foundHover = false;
      const cx = width / 2;
      const cy = height / 2;
      
      for (const node of nodes) {
        // Calculate current 2D pos
        const projectedScale = 300 / (300 + node.z);
        const x2d = (node.x * projectedScale) + cx;
        const y2d = (node.y * projectedScale) + cy;
        
        const dx = currentX - x2d;
        const dy = currentY - y2d;
        const distance2D = Math.sqrt(dx * dx + dy * dy);

        if (distance2D < 20 * projectedScale) {
          setHoveredSkill(node.label);
          foundHover = true;
          break;
        }
      }
      if (!foundHover) setHoveredSkill(null);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      const rect = canvas.getBoundingClientRect();
      startMouseX = e.clientX - rect.left;
      startMouseY = e.clientY - rect.top;
      angleX = currentAngleX;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Damp tilt
      currentAngleX += (targetAngleX - currentAngleX) * 0.1;
      
      // Auto continuous rotation on Y axis
      time += 1;
      angleY += targetAngleY;

      // Update positions based on orbit and tilt
      nodes.forEach(node => {
        node.angle += node.orbitSpeed;
        
        // 1. Flat orbit around Y axis
        let x = Math.cos(node.angle) * node.orbitRadius;
        let z = Math.sin(node.angle) * node.orbitRadius;
        let y = 0;
        
        // 2. Apply global Y rotation
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;
        
        // 3. Apply global X tilt
        const cosX = Math.cos(currentAngleX);
        const sinX = Math.sin(currentAngleX);
        let y2 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;
        
        node.x = x1;
        node.y = y2;
        node.z = z2;
      });

      // Draw glowing central core
      const corePulse = Math.sin(time * 0.05) * 0.2 + 0.8;
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius * 0.3);
      coreGrad.addColorStop(0, `rgba(0, 240, 255, ${0.4 * corePulse})`);
      coreGrad.addColorStop(0.3, `rgba(0, 240, 255, ${0.1 * corePulse})`);
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, maxRadius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Draw Orbit Rings
      ctx.lineWidth = 1;
      rings.forEach((r, idx) => {
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.1) {
          let px = Math.cos(a) * r;
          let pz = Math.sin(a) * r;
          let py = 0;
          
          let px1 = px * Math.cos(angleY) - pz * Math.sin(angleY);
          let pz1 = pz * Math.cos(angleY) + px * Math.sin(angleY);
          
          let py2 = py * Math.cos(currentAngleX) - pz1 * Math.sin(currentAngleX);
          let pz2 = pz1 * Math.cos(currentAngleX) + py * Math.sin(currentAngleX);
          
          const scale = 300 / (300 + pz2);
          const x2d = (px1 * scale) + cx;
          const y2d = (py2 * scale) + cy;
          
          if (a === 0) ctx.moveTo(x2d, y2d);
          else ctx.lineTo(x2d, y2d);
        }
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 + (idx * 0.05)})`;
        ctx.stroke();
      });

      // Sort nodes by Z depth
      const sortedNodes = [...nodes].sort((a, b) => b.z - a.z);

      // Draw Nodes
      sortedNodes.forEach(node => {
        const scale = 300 / (300 + node.z);
        const x2d = (node.x * scale) + cx;
        const y2d = (node.y * scale) + cy;
        const alpha = Math.max(0.2, (node.z + maxRadius) / (maxRadius * 2) * 0.8 + 0.2);
        
        const isSelfHovered = hoveredSkill === node.label;
        const size = Math.max(2.5, 4 * scale);

        // Connection line to center
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x2d, y2d);
        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.15})`;
        ctx.stroke();

        // Glow
        const glowRadius = isSelfHovered ? size * 6 : size * 3;
        const glowGrad = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, glowRadius);
        glowGrad.addColorStop(0, node.color);
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(x2d, y2d, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Dot
        ctx.fillStyle = isSelfHovered ? '#FFF' : node.color;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();

        // Text
        const fontSize = Math.max(11, Math.round(14 * scale));
        ctx.font = `${isSelfHovered ? '700' : '600'} ${fontSize}px "Space Grotesk", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        ctx.fillStyle = isSelfHovered 
          ? '#FFFFFF' 
          : `rgba(255, 255, 255, ${alpha})`;
        
        ctx.fillText(node.label, x2d, y2d - (size * 2 + fontSize / 2));
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [hoveredSkill]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[450px] flex items-center justify-center overflow-hidden bg-slate-950/40 rounded-[2rem] border border-slate-800/80 backdrop-blur-3xl group shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>

      <div className="absolute top-6 left-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase font-bold">Orbital Tech Core</span>
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-2 border border-slate-800 bg-slate-950 px-3 py-1 rounded-full pointer-events-none">
        <span className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">SYS: ONLINE</span>
      </div>

      <div className="absolute bottom-6 right-6 pointer-events-none">
        <div className="font-mono text-[10px] tracking-wider text-slate-500 text-right leading-relaxed">
          DRAG TO TILT AXIS <br />
          HOVER TO INSPECT
        </div>
      </div>

      <canvas 
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing z-10"
      />

      <div className="absolute top-1/2 left-4 w-4 h-[1px] bg-slate-800 pointer-events-none"></div>
      <div className="absolute top-1/2 right-4 w-4 h-[1px] bg-slate-800 pointer-events-none"></div>
    </div>
  );
};

export default Interactive3DModel;

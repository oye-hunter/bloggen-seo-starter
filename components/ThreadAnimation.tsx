import { useEffect, useRef } from 'react';

export const ThreadAnimation = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const setSize = () => {
			const scale = window.devicePixelRatio || 1;
			canvas.width = window.innerWidth * scale;
			canvas.height = window.innerHeight * scale;
			ctx.scale(scale, scale);
		};
		setSize();

		class Thread {
			points: { x: number; y: number; vx: number; vy: number }[];
			color: string;
			width: number;
			tension: number;
			dampening: number;
			segments: number;
			spacing: number;

			constructor(startX: number, startY: number) {
				this.segments = 50; // More segments for smoother curves
				this.spacing = 30; // Increased spacing
				this.points = [];
				this.tension = 0.15; // Reduced tension for smoother movement
				this.dampening = 0.05; // Reduced dampening for more fluid motion
				this.width = Math.random() * 0.8 + 0.3; // Thinner threads
				this.color = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`; // More subtle opacity

				for (let i = 0; i < this.segments; i++) {
					this.points.push({
						x: startX,
						y: startY + (i * this.spacing),
						vx: 0,
						vy: 0
					});
				}
			}

			update(mouseX: number, mouseY: number) {
				this.points.forEach((point, i) => {
					if (i === 0) {
						const dx = mouseX - point.x;
						const dy = mouseY - point.y;
						point.vx += dx * this.tension * 0.2; // Slower response to movement
						point.vy += dy * this.tension * 0.2;
					} else {
						const prevPoint = this.points[i - 1];
						const dx = prevPoint.x - point.x;
						const dy = prevPoint.y - point.y - this.spacing;
						point.vx += dx * this.tension;
						point.vy += dy * this.tension;
					}

					// Apply dampening
					point.vx *= (1 - this.dampening);
					point.vy *= (1 - this.dampening);

					// Update position
					point.x += point.vx;
					point.y += point.vy;
				});
			}

			draw(ctx: CanvasRenderingContext2D) {
				ctx.beginPath();
				ctx.strokeStyle = this.color;
				ctx.lineWidth = this.width;
				ctx.lineCap = 'round';
				ctx.lineJoin = 'round';

				// Draw smooth curve through points
				ctx.moveTo(this.points[0].x, this.points[0].y);
				for (let i = 1; i < this.points.length - 2; i++) {
					const xc = (this.points[i].x + this.points[i + 1].x) / 2;
					const yc = (this.points[i].y + this.points[i + 1].y) / 2;
					ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
				}
				ctx.quadraticCurveTo(
					this.points[this.points.length - 2].x,
					this.points[this.points.length - 2].y,
					this.points[this.points.length - 1].x,
					this.points[this.points.length - 1].y
				);

				// Subtle glow effect
				ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
				ctx.shadowBlur = 5;
				ctx.stroke();
				ctx.shadowBlur = 0;
			}
		}

		// Create more threads
		const threads: Thread[] = [];
		const numThreads = 15; // Increased number of threads
		for (let i = 0; i < numThreads; i++) {
			const x = Math.random() * window.innerWidth;
			const y = Math.random() * window.innerHeight;
			threads.push(new Thread(x, y));
		}

		// Smoother mouse movement simulation
		let time = 0;
		const getMousePosition = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			const radius = Math.min(width, height) * 0.3;

			return {
				x: width / 2 + Math.cos(time * 0.3) * radius, // Slower movement
				y: height / 2 + Math.sin(time * 0.2) * radius
			};
		};

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			time += 0.01; // Slower time increment
			const { x: mouseX, y: mouseY } = getMousePosition();

			threads.forEach((thread, i) => {
				const angleOffset = (i / numThreads) * Math.PI * 2;
				const targetX = mouseX + Math.cos(time + angleOffset) * 100;
				const targetY = mouseY + Math.sin(time + angleOffset) * 100;

				thread.update(targetX, targetY);
				thread.draw(ctx);
			});

			requestAnimationFrame(animate);
		};

		const handleResize = () => {
			setSize();
		};

		window.addEventListener('resize', handleResize);
		animate();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				pointerEvents: 'none',
			}}
		/>
	);
};

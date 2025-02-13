import React, { useState, useEffect } from "react";

const Box = () => {
    const [fishY, setFishY] = useState(150); // Fish vertical position
    const [velocity, setVelocity] = useState(0); // Movement velocity
    const gravity = 0.6; // Gravity effect
    const jumpStrength = -10; // How much the fish jumps

    const [obstacles, setObstacles] = useState([]);
    const containerWidth = 960; // Width of the game container in pixels
    const boxWidth = 80; // Box width in pixels
    const speed = 2; // Speed of movement

    // Handle key press for jumping
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === "Space") {
                setVelocity(jumpStrength);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Apply gravity and movement
    useEffect(() => {
        const gameLoop = setInterval(() => {
            setFishY((prev) => Math.max(prev + velocity, 0)); // Move fish
            setVelocity((prev) => prev + gravity); // Apply gravity
        }, 30);

        return () => clearInterval(gameLoop);
    }, [velocity]);

     // Generate initial obstacles with random heights
     useEffect(() => {
        const initialObstacles = Array.from({ length: 10 }).map((_, index) => ({
            id: index,
            height: Math.floor(Math.random() * 400), // Height between 80px (5rem) to 480px (30rem)
            left: containerWidth + index * 150, // Staggered starting positions
        }));
        setObstacles(initialObstacles);
    }, []);

    // Move obstacles to the left
    useEffect(() => {
        const moveObstacles = setInterval(() => {
            setObstacles((prev) =>
                prev.map((obs) => ({
                    ...obs,
                    left: obs.left - speed < -boxWidth ? containerWidth : obs.left - speed, // Reset if out of view
                }))
            );
        }, 30); 

        return () => clearInterval(moveObstacles);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="box border-4 p-4 h-[30rem] w-[60rem] bg-white flex items-end justify-start overflow-hidden relative">
                
                {/* Fish */}
                <div
                    className="absolute left-10 transition-all duration-100"
                    style={{ top: `${fishY}px` }}
                >
                    <div className="relative flex items-center scale-75">
                        {/* Tail */}
                        <div className="relative">
                            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[25px] border-r-blue-600"></div>
                            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[25px] border-r-blue-600 absolute top-[8px] -left-[4px] rotate-[-30deg]"></div>
                            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[25px] border-r-blue-600 absolute -top-[8px] -left-[4px] rotate-[30deg]"></div>
                        </div>

                        {/* Body */}
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative">
                            {/* Eye */}
                            <div className="w-3 h-3 bg-white rounded-full absolute right-[4px] top-[7px]">
                                <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-[2px] left-[2px]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex animate-marquee space-x-4  items-end justify-start ">
                    <div className="box border h-[20rem] w-[5rem] bg-black"></div>
                    <div className="flex ">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                   
                    <div className="box border h-[2rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[11rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[3rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[2rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[17rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[6rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[23rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[10rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[7rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[19rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[13rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[8rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[21rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[3rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[14rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[11rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>
                    <div className="box border h-[5rem] w-[5rem] bg-black"></div>
                    <div className="flex">
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Box;

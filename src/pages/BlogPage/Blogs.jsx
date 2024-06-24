import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/n71sWDg/pexels-polina-tankilevitch-4523000.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Gamepad....!!!</h1>
            <p className="py-6">
              A gamepad, also known as a joypad, is a handheld controller used
              for interacting with video games. It typically features a
              combination of buttons and directional controls, such as analog
              sticks or directional pads (D-pads), enabling players to perform
              various in-game actions with precision and ease. The evolution of
              gamepads has been pivotal in enhancing the gaming experience,
              providing intuitive and responsive control schemes that cater to a
              wide range of game genres. Early gamepads, such as those for the
              Nintendo Entertainment System (NES), featured simple designs with
              a limited number of buttons and a D-pad. Modern gamepads, like
              those for the PlayStation 5 or Xbox Series X, are more
              sophisticated, incorporating multiple analog sticks, triggers, and
              a plethora of buttons, often with advanced features like haptic
              feedback, motion sensing, and customizable layouts. Wireless
              connectivity has also become standard, offering greater freedom of
              movement and reducing cable clutter. Gamepads are celebrated for
              their ergonomic designs, tailored to fit comfortably in the hands,
              thus reducing fatigue during extended gaming sessions. They are
              widely used across various platforms, including consoles, PCs, and
              even mobile devices, thanks to their versatility and ease of use.
              The continuous innovation in gamepad technology ensures they
              remain a crucial component in the ever-evolving landscape of video
              gaming, enhancing immersion and control for players of all skill
              levels.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

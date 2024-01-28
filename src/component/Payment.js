import React from "react";
import ImageCarousel from "./ImageCarousel";

function Payment() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[10rem]">
        <ImageCarousel
          images={[
            "https://i.ibb.co/0KcgVWn/Dorkz-4512-4.jpg",
            "https://media.istockphoto.com/id/1474848131/photo/stack-of-papers-with-feasibility-study-and-folder.jpg?s=2048x2048&w=is&k=20&c=FvtiptJtaC98PFoakXrXDSQNrX61HHWyvKgzBNDafYk=",
            "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
          ]}
        />
      </div>
    </div>
  );
}

export default Payment;

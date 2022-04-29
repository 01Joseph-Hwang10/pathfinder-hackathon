import React from "react";

type LayerType =
  | "Dense"
  | "Conv2D"
  | "MaxPooling2D"
  | "Flatten"
  | "Dropout"
  | "BatchNormalization";

export interface Layer {
  type: LayerType;
}

const Conv2D = () => {
  return (
    <svg
      width="191"
      height="194"
      viewBox="0 0 191 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ffffff"
    >
      <circle cx="25" cy="25" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="25" cy="97" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="25" cy="169" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="166" cy="97" r="22.5" stroke="white" stroke-width="5" />
      <line
        y1="-2"
        x2="120"
        y2="-2"
        transform="matrix(0.8 0.6 -0.640795 0.767712 45 25)"
        stroke="white"
        stroke-width="4"
      />
      <line x1="45" y1="95" x2="141" y2="95" stroke="white" stroke-width="4" />
      <line
        y1="-2"
        x2="120"
        y2="-2"
        transform="matrix(-0.8 0.6 -0.640795 -0.767712 141 97)"
        stroke="white"
        stroke-width="4"
      />
    </svg>
  );
};

const MaxPool = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="2.5"
        width="195"
        height="195"
        rx="17.5"
        stroke="white"
        stroke-width="5"
      />
      <line y1="98" x2="200" y2="98" stroke="white" stroke-width="4" />
      <line x1="98" y1="200" x2="98" stroke="white" stroke-width="4" />
      <path d="M0 20C0 8.95431 8.95431 0 20 0H100V97H0V20Z" fill="white" />
      <path
        d="M100 100H200V177C200 188.046 191.046 197 180 197H100V100Z"
        fill="white"
      />
    </svg>
  );
};

const Flatten = () => {
  return (
    <svg
      width="50"
      height="194"
      viewBox="0 0 50 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="25" cy="97" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="25" cy="169" r="22.5" stroke="white" stroke-width="5" />
    </svg>
  );
};

const BatchNorm = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-graph-up"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
      />
    </svg>
  );
};

const Dense = () => {
  return (
    <svg
      width="191"
      height="194"
      viewBox="0 0 191 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="25" cy="97" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="25" cy="169" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="166" cy="25" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="166" cy="97" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="166" cy="169" r="22.5" stroke="white" stroke-width="5" />
      <line
        y1="-2"
        x2="120"
        y2="-2"
        transform="matrix(0.8 0.6 -0.640795 0.767712 45 25)"
        stroke="white"
        stroke-width="4"
      />
      <line x1="45" y1="95" x2="141" y2="95" stroke="white" stroke-width="4" />
      <line
        y1="-2"
        x2="120"
        y2="-2"
        transform="matrix(-0.8 0.6 -0.640795 -0.767712 141 97)"
        stroke="white"
        stroke-width="4"
      />
      <line
        y1="-2"
        x2="120"
        y2="-2"
        transform="matrix(-0.800748 -0.599001 0.639836 -0.768511 146.09 169)"
        stroke="white"
        stroke-width="4"
      />
      <line
        x1="146.002"
        y1="99"
        x2="50.0025"
        y2="99.1198"
        stroke="white"
        stroke-width="4"
      />
      <line
        y1="-2"
        x2="120"
        y2="-2"
        transform="matrix(0.79925 -0.600998 0.641753 0.766911 50 97.1198)"
        stroke="white"
        stroke-width="4"
      />
    </svg>
  );
};

const Dropout = () => {
  return (
    <svg
      width="191"
      height="188"
      viewBox="0 0 191 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="166" cy="25" r="22.5" stroke="white" stroke-width="5" />
      <line x1="141" y1="27" x2="50" y2="27" stroke="white" stroke-width="4" />
      <circle cx="25" cy="94" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="166" cy="94" r="22.5" stroke="white" stroke-width="5" />
      <line x1="141" y1="96" x2="50" y2="96" stroke="white" stroke-width="4" />
      <circle cx="25" cy="163" r="22.5" stroke="white" stroke-width="5" />
      <circle cx="166" cy="163" r="22.5" stroke="white" stroke-width="5" />
      <line
        x1="141"
        y1="165"
        x2="50"
        y2="165"
        stroke="white"
        stroke-width="4"
      />
    </svg>
  );
};

const LayerIcon: React.FC<Layer & { size: number }> = ({ type }) => {
  if (type === "Conv2D") {
    return (
      <div className="flex justify-center items-center text-white w-10 h-10">
        <Conv2D />
      </div>
    );
  }
  if (type === "MaxPooling2D") {
    return (
      <div className="flex justify-center items-center text-white w-10 h-10">
        <MaxPool />
      </div>
    );
  }
  if (type === "Flatten") {
    return (
      <div className="flex justify-center items-center text-white w-10 h-10 pr-7 ml-3">
        <Flatten />
      </div>
    );
  }
  if (type === "BatchNormalization") {
    return (
      <div className="flex justify-center items-center text-white w-10 h-10">
        <BatchNorm />
      </div>
    );
  }
  if (type === "Dense") {
    return (
      <div className="flex justify-center items-center text-white w-10 h-10">
        <Dense />
      </div>
    );
  }
  if (type === "Dropout") {
    return (
      <div className="flex justify-center items-center text-white w-10 h-10">
        <Dropout />
      </div>
    );
  }
  return <></>;
};

export default LayerIcon;

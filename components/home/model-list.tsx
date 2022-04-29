import LayerIcon, { Layer } from "@components/common/layer-icon";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

export const Caret = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-right-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
        stroke="white"
      />
    </svg>
  );
};

type Data = {
  name: string;
  description?: string;
  layers: Layer[];
};

export const data: Data[] = [
  {
    name: "ResNet50",
    layers: [
      { type: "Conv2D" },
      { type: "MaxPooling2D" },
      { type: "Conv2D" },
      { type: "Conv2D" },
      { type: "MaxPooling2D" },
      { type: "Conv2D" },
      { type: "Flatten" },
      { type: "Dropout" },
      { type: "Dense" },
    ],
  },
  {
    name: "ResNet34",
    layers: [
      { type: "Conv2D" },
      { type: "Conv2D" },
      { type: "MaxPooling2D" },
      { type: "Flatten" },
      { type: "Dense" },
      { type: "Dropout" },
      { type: "Dense" },
    ],
  },
  {
    name: "VCG16",
    layers: [
      { type: "Conv2D" },
      { type: "MaxPooling2D" },
      { type: "Flatten" },
      { type: "Dense" },
      { type: "Dropout" },
      { type: "Dense" },
    ],
  },
  {
    name: "LeNet",
    layers: [
      { type: "Conv2D" },
      { type: "Conv2D" },
      { type: "MaxPooling2D" },
      { type: "Conv2D" },
      { type: "Flatten" },
      { type: "Dropout" },
      { type: "Dense" },
    ],
  },
];

const ModelList = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col justify-start items-center opacity-0 group-focus-within:opacity-100 transition-all">
      <ul
        tabIndex={0}
        className="flex flex-col justify-start items-center group-focus-within:-mt-96 w-full"
      >
        {data.map((model, index) => (
          <li className="w-full px-6">
            <div
              onClick={() => {
                router.push("/resnet50");
              }}
              className={clsx([
                "card w-full bg-base-100 shadow-xl transition-all group-focus-within:-mt-44 my-48 hover:bg-primary-focus cursor-pointer",
                `duration-${((index + 1) * 100) % 400 || 500}`,
              ])}
            >
              <div className="card-body w-full">
                <h2 className="card-title">{model.name}</h2>
                <div className="flex justify-evenly items-center">
                  {model.layers.map((layer, idx) => (
                    <>
                      <div className="w-20 h-20 py-2 px-2 pl-5">
                        <LayerIcon type={layer.type} size={50} />
                      </div>
                      {idx !== model.layers.length - 1 && (
                        <div className="mb-5">
                          <Caret />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModelList;

import { Layer } from "@components/common/layer-icon";
import clsx from "clsx";
import React from "react";

const LayerDescriptions: React.FC<{
  layer: Layer;
  last: boolean;
  idx: number;
  modify: boolean;
  params: { name: string; value: any; type: string }[];
  setParams: (params: { name: string; value: any; type: string }[]) => void;
}> = ({ layer, last, idx, modify, params, setParams }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-4 mr-2">
      {modify ? (
        <form
          className="form-control"
          onSubmit={(e) => {
            e.preventDefault();
            e.currentTarget.querySelectorAll("input").forEach((input) => {
              setParams([
                ...params,
                {
                  name: input.placeholder,
                  value: input.value,
                  type: input.type,
                },
              ]);
            });
          }}
        >
          {layer?.modifiable_params_info?.map((param) => (
            <>
              <input
                className={clsx([
                  "input-bordered input w-full p-1 mb-2 h-5",
                  param.type === "string"
                    ? "input-secondary"
                    : param.type === "float"
                    ? "input-accent"
                    : "input-primary",
                ])}
                placeholder={param.name}
                type={param.type}
              />
            </>
          ))}
        </form>
      ) : (
        <>
          <h1 className="card-title text-sm text-center">{layer.name}</h1>
          <h2 className="text-xs">Units: {idx * 100}</h2>
          <h2 className="text-xs text-[0.7rem]">RELU</h2>
          {last && <h2 className="text-[0.5rem]">Softmax</h2>}
        </>
      )}
    </div>
  );
};

export default LayerDescriptions;

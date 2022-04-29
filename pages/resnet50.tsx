import LayerIcon from "@components/common/layer-icon";
import Navigation from "@components/common/nav";
import { Caret, data } from "@components/home/model-list";
import clsx from "clsx";
import React from "react";

const GithubIcon = () => {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub</title>
      <path
        stroke="white"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  );
};

const PythonIcon = () => {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Python</title>
      <path
        stroke="white"
        d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
      />
    </svg>
  );
};

const JupyterIcon = () => {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Jupyter</title>
      <path
        stroke="white"
        d="M7.157 22.201A1.784 1.799 0 0 1 5.374 24a1.784 1.799 0 0 1-1.784-1.799 1.784 1.799 0 0 1 1.784-1.799 1.784 1.799 0 0 1 1.783 1.799zM20.582 1.427a1.415 1.427 0 0 1-1.415 1.428 1.415 1.427 0 0 1-1.416-1.428A1.415 1.427 0 0 1 19.167 0a1.415 1.427 0 0 1 1.415 1.427zM4.992 3.336A1.047 1.056 0 0 1 3.946 4.39a1.047 1.056 0 0 1-1.047-1.055A1.047 1.056 0 0 1 3.946 2.28a1.047 1.056 0 0 1 1.046 1.056zm7.336 1.517c3.769 0 7.06 1.38 8.768 3.424a9.363 9.363 0 0 0-3.393-4.547 9.238 9.238 0 0 0-5.377-1.728A9.238 9.238 0 0 0 6.95 3.73a9.363 9.363 0 0 0-3.394 4.547c1.713-2.04 5.004-3.424 8.772-3.424zm.001 13.295c-3.768 0-7.06-1.381-8.768-3.425a9.363 9.363 0 0 0 3.394 4.547A9.238 9.238 0 0 0 12.33 21a9.238 9.238 0 0 0 5.377-1.729 9.363 9.363 0 0 0 3.393-4.547c-1.712 2.044-5.003 3.425-8.772 3.425Z"
      />
    </svg>
  );
};

const Modal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative flex flex-col justify-start items-center w-full">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">Export Model</h3>
          <div className="flex flex-col justify-start items-center mt-10 w-full">
            <button className="w-7/12 my-2 btn btn-outline">
              <div className="w-8 h-8 mr-3">
                <GithubIcon />
              </div>
              Github
            </button>
            <button className="w-7/12 my-2 btn btn-outline">
              <div className="w-8 h-8 mr-3">
                <PythonIcon />
              </div>
              Python File
            </button>
            <button className="w-7/12 my-2 btn btn-outline">
              <div className="w-8 h-8 mr-3">
                <JupyterIcon />
              </div>
              Jupyter Notebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ResNet50 = () => {
  return (
    <div className="group w-full">
      <Navigation />
      <Modal />
      <div className="w-full h-full flex justify-start items-center flex-col">
        <div className="mt-28 w-full p-10 bg-primary rounded-t-3xl h-7/12">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-gray-100 font-bold text-5xl">ResNet50</h1>
              <h2>Made by joseph1191</h2>
            </div>
            <div className="flex justify-end items-center gap-2">
              <button className="btn btn-outline btn-secondary">Edit</button>
              <label
                htmlFor="my-modal-3"
                className="btn btn-outline btn-accent"
              >
                Export
              </label>
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center mt-10">
            {data[0].layers.map((layer, idx) => (
              <>
                <div className="w-28 h-36 py-5 px-2 pl-5 bg-base-300 rounded-2xl my-2 flex flex-col justify-start items-center">
                  <div
                    className={clsx([
                      "flex justify-center items-center",
                      layer.type !== "Flatten" && "-ml-3",
                      layer.type === "Flatten" && "-mr-1",
                    ])}
                  >
                    <LayerIcon type={layer.type} size={50} />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center mt-4 mr-2">
                    <h1 className="card-title text-sm text-center">
                      {layer.type}
                    </h1>
                    <h2 className="text-xs">Units: {idx * 100}</h2>
                    <h2 className="text-xs text-[0.7rem]">RELU</h2>
                    {idx === data[0].layers.length - 1 && (
                      <h2 className="text-[0.5rem]">Softmax</h2>
                    )}
                  </div>
                </div>
                {idx !== data[0].layers.length - 1 && (
                  <div className="mx-5">
                    <Caret />
                  </div>
                )}
              </>
            ))}
          </div>
          <p className="mt-16">
            A residual neural network is an artificial neural network. Residual
            neural networks utilize skip connections, or shortcuts to jump over
            some layers. Typical ResNet models are implemented with double- or
            triple- layer skips that contain nonlinearities and batch
            normalization in between. An additional weight matrix may be used to
            learn the skip weights; these models are known as HighwayNets.
            Models with several parallel skips are referred to as DenseNets. In
            the context of residual neural networks, a non-residual network may
            be described as a plain network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResNet50;
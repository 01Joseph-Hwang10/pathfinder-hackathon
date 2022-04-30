import LayerIcon, { Layer } from "@components/common/layer-icon";
import Navigation from "@components/common/nav";
import LayerDescriptions from "@components/detail/layer-descriptions";
import { Caret } from "@components/home/model-list";
import axios from "axios";
import clsx from "clsx";
import React, { useRef, useState } from "react";

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

const Ellipsis = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-three-dots-vertical"
      viewBox="0 0 16 16"
    >
      <path
        stroke="white"
        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
      />
    </svg>
  );
};

const TestIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-bar-chart-fill"
      viewBox="0 0 16 16"
    >
      <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
    </svg>
  );
};

const imgs = [
  "https://hexas3bucket.s3.ap-northeast-2.amazonaws.com/17ce1970455f36ecbee2ec07ec5a5030.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaDmFwLW5vcnRoZWFzdC0yIkcwRQIhANQGQt4Uuvo8Q1kUbYA8fB4PjEW92M4ETtQHuqtFWQJeAiBa86jij2VxKTFYIPFyY1CYvpRvIAcbJ%2BIJTC6ndsJnbSrtAgjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDQxMzMwODYyNDczMiIMwRB8zJU6Q2xRXv03KsECu0Zu%2Fr6HbdtVy8kPlHDwQREQ%2BcOibLBKixj4xgZiTIynQXOWjkYy%2F83%2FHyfQVD%2BuxiNg3q1xylUD52Rtmg1T1OonubTEDlWjAZL4YJ1IuM2OFX3CDDfnJ6RXHgFlR%2FfO2Cw4gZgdVTFGTSp5gifMob6Q1Zh09OwkjPqA%2BeQVrgdFkPHVMLTBlJHQhQL2BJ66JEsjmrusjvFoLt25ckoJArYEUH5C0dv3QdzjiArWjgsEdA4FPOzP92ilQQBAJu%2Bul1tZN%2BVCnw9t7I3uU8D0TCGLTHbTIuMm%2BGTjycpAUw1rMjG6YEhHBWiKa%2FE73akHqJiPRstgdPP3oDPpBkwTvgGbPCD7lKj%2BU45G4hxofTSVb3BUJbcpuidlKXI5PSdWbMWqvfacdE01Jj4AxKuEgvWetw6oXu33zTLs2MK62SBsMKmXsJMGOrMCKVkaCAM02FexLn2Lq5%2FV8RZHJWm%2F92cO2%2BtRv%2FbZKA7CqLRzSELps3ilxIW1niP0qkvHTvcn0QIsfd0DtWZGyLIoPt7lJayDwLZ8X0ChkId1lgbiHyqLTtEdMTkLke3v0DteF4lnnC94%2FYi5sr5bYwkJNDJ0PV5DRbb9%2BqXiGXrcT4aoShYZfmBE%2Bq4GtsrIMQzrF4yzkuV3grnn8fORrGpcSZ24WD%2BMjMNkvBxyCUkYNudUa2RhWEMkpofMf%2BoVqDRuSrusXtKkFsDo7y39OszLSHD5RfjNOtD0SUPW2l63ZE07a3E%2B6d3wx8GTNQpOuH5ZlqKtQA3AklkOe3E29TsjI%2BhjqKbctOIaCNsZKjh5OrQPLtWz%2F7hroMDbDhGcwljFRDDmNVZNF6eUkr3PkL71TA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220429T235203Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAWAOY5D5OMJGFXYMK%2F20220429%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=1048465a4709a0368339b6636c66ee950ec83770cedd8062908bf69237689a4f",
  "https://hexas3bucket.s3.ap-northeast-2.amazonaws.com/111691750.2.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaDmFwLW5vcnRoZWFzdC0yIkcwRQIhANQGQt4Uuvo8Q1kUbYA8fB4PjEW92M4ETtQHuqtFWQJeAiBa86jij2VxKTFYIPFyY1CYvpRvIAcbJ%2BIJTC6ndsJnbSrtAgjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDQxMzMwODYyNDczMiIMwRB8zJU6Q2xRXv03KsECu0Zu%2Fr6HbdtVy8kPlHDwQREQ%2BcOibLBKixj4xgZiTIynQXOWjkYy%2F83%2FHyfQVD%2BuxiNg3q1xylUD52Rtmg1T1OonubTEDlWjAZL4YJ1IuM2OFX3CDDfnJ6RXHgFlR%2FfO2Cw4gZgdVTFGTSp5gifMob6Q1Zh09OwkjPqA%2BeQVrgdFkPHVMLTBlJHQhQL2BJ66JEsjmrusjvFoLt25ckoJArYEUH5C0dv3QdzjiArWjgsEdA4FPOzP92ilQQBAJu%2Bul1tZN%2BVCnw9t7I3uU8D0TCGLTHbTIuMm%2BGTjycpAUw1rMjG6YEhHBWiKa%2FE73akHqJiPRstgdPP3oDPpBkwTvgGbPCD7lKj%2BU45G4hxofTSVb3BUJbcpuidlKXI5PSdWbMWqvfacdE01Jj4AxKuEgvWetw6oXu33zTLs2MK62SBsMKmXsJMGOrMCKVkaCAM02FexLn2Lq5%2FV8RZHJWm%2F92cO2%2BtRv%2FbZKA7CqLRzSELps3ilxIW1niP0qkvHTvcn0QIsfd0DtWZGyLIoPt7lJayDwLZ8X0ChkId1lgbiHyqLTtEdMTkLke3v0DteF4lnnC94%2FYi5sr5bYwkJNDJ0PV5DRbb9%2BqXiGXrcT4aoShYZfmBE%2Bq4GtsrIMQzrF4yzkuV3grnn8fORrGpcSZ24WD%2BMjMNkvBxyCUkYNudUa2RhWEMkpofMf%2BoVqDRuSrusXtKkFsDo7y39OszLSHD5RfjNOtD0SUPW2l63ZE07a3E%2B6d3wx8GTNQpOuH5ZlqKtQA3AklkOe3E29TsjI%2BhjqKbctOIaCNsZKjh5OrQPLtWz%2F7hroMDbDhGcwljFRDDmNVZNF6eUkr3PkL71TA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220430T004224Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAWAOY5D5OMJGFXYMK%2F20220430%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=996014e1e884bd30eeb7f491809116d27fd76fd3c3a73db0d4ecaf0079884ac7",
  "https://hexas3bucket.s3.ap-northeast-2.amazonaws.com/img_20210330145713_c421a01a.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaDmFwLW5vcnRoZWFzdC0yIkcwRQIhANQGQt4Uuvo8Q1kUbYA8fB4PjEW92M4ETtQHuqtFWQJeAiBa86jij2VxKTFYIPFyY1CYvpRvIAcbJ%2BIJTC6ndsJnbSrtAgjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDQxMzMwODYyNDczMiIMwRB8zJU6Q2xRXv03KsECu0Zu%2Fr6HbdtVy8kPlHDwQREQ%2BcOibLBKixj4xgZiTIynQXOWjkYy%2F83%2FHyfQVD%2BuxiNg3q1xylUD52Rtmg1T1OonubTEDlWjAZL4YJ1IuM2OFX3CDDfnJ6RXHgFlR%2FfO2Cw4gZgdVTFGTSp5gifMob6Q1Zh09OwkjPqA%2BeQVrgdFkPHVMLTBlJHQhQL2BJ66JEsjmrusjvFoLt25ckoJArYEUH5C0dv3QdzjiArWjgsEdA4FPOzP92ilQQBAJu%2Bul1tZN%2BVCnw9t7I3uU8D0TCGLTHbTIuMm%2BGTjycpAUw1rMjG6YEhHBWiKa%2FE73akHqJiPRstgdPP3oDPpBkwTvgGbPCD7lKj%2BU45G4hxofTSVb3BUJbcpuidlKXI5PSdWbMWqvfacdE01Jj4AxKuEgvWetw6oXu33zTLs2MK62SBsMKmXsJMGOrMCKVkaCAM02FexLn2Lq5%2FV8RZHJWm%2F92cO2%2BtRv%2FbZKA7CqLRzSELps3ilxIW1niP0qkvHTvcn0QIsfd0DtWZGyLIoPt7lJayDwLZ8X0ChkId1lgbiHyqLTtEdMTkLke3v0DteF4lnnC94%2FYi5sr5bYwkJNDJ0PV5DRbb9%2BqXiGXrcT4aoShYZfmBE%2Bq4GtsrIMQzrF4yzkuV3grnn8fORrGpcSZ24WD%2BMjMNkvBxyCUkYNudUa2RhWEMkpofMf%2BoVqDRuSrusXtKkFsDo7y39OszLSHD5RfjNOtD0SUPW2l63ZE07a3E%2B6d3wx8GTNQpOuH5ZlqKtQA3AklkOe3E29TsjI%2BhjqKbctOIaCNsZKjh5OrQPLtWz%2F7hroMDbDhGcwljFRDDmNVZNF6eUkr3PkL71TA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220430T004241Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAWAOY5D5OMJGFXYMK%2F20220430%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=5191aac22d5b815f829670cb6b303242794a12cfa19cb03c4285c196dca7c6b5",
];

const ImageModal: React.FC<{ mid: number }> = ({ mid }) => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  return (
    <>
      <input type="checkbox" id="image-popup" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative flex flex-col justify-start items-center w-full">
          <label
            htmlFor="image-popup"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">Select Image For Test</h3>
          <div className="flex flex-col justify-start items-center mt-10 w-full">
            {output && <h2>{output}</h2>}
            {loading && <h2>Processing...</h2>}
            {!loading &&
              !output &&
              imgs.map((img) => (
                <div
                  className="rounded-xl w-fit cursor-pointer py-2"
                  onClick={async () => {
                    setLoading(true);
                    const response = await axios.post(
                      "http://localhost:9080/test",
                      { img, mid }
                    );
                    setOutput(response.data.output);
                    setLoading(false);
                  }}
                >
                  <img
                    className="bg-center bg-cover w-30 h-30 rounded-xl"
                    width={300}
                    height={300}
                    src={img}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ExportModal = () => {
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

const model: Layer[] = [
  {
    name: "Conv2D",
    modifiable_params_info: [
      { name: "padding", type: "string", index: 3 },
      { name: "input_shape", type: "tuple-n", index: 4 },
    ],
    params: [
      { name: "filters", value: "64" },
      { name: "kernel_size", value: " 7" },
      { name: "activation", value: "relu" },
      { name: "padding", value: "same" },
      { name: "input_shape", value: [28, 28, 1] },
    ],
  },
  {
    name: "MaxPooling2D",
    modifiable_params_info: [{ name: "pool_size", type: "int", index: 0 }],
    params: [{ name: "pool_size", value: 2 }],
  },
  {
    name: "Conv2D",
    modifiable_params_info: [{ name: "padding", type: "string", index: 3 }],
    params: [
      { name: "filters", value: "128" },
      { name: "kernel_size", value: " 3" },
      { name: "activation", value: "relu" },
      { name: "padding", value: "same" },
    ],
  },
  {
    name: "Conv2D",
    modifiable_params_info: [{ name: "padding", type: "string", index: 3 }],
    params: [
      { name: "filters", value: "128" },
      { name: "kernel_size", value: " 3" },
      { name: "activation", value: "relu" },
      { name: "padding", value: "same" },
    ],
  },
  {
    name: "MaxPooling2D",
    modifiable_params_info: [{ name: "pool_size", type: "int", index: 0 }],
    params: [{ name: "pool_size", value: 2 }],
  },
  {
    name: "Conv2D",
    modifiable_params_info: [{ name: "padding", type: "string", index: 3 }],
    params: [
      { name: "filters", value: "256" },
      { name: "kernel_size", value: " 3" },
      { name: "activation", value: "relu" },
      { name: "padding", value: "same" },
    ],
  },
  {
    name: "Conv2D",
    modifiable_params_info: [{ name: "padding", type: "string", index: 3 }],
    params: [
      { name: "filters", value: "256" },
      { name: "kernel_size", value: " 3" },
      { name: "activation", value: "relu" },
      { name: "padding", value: "same" },
    ],
  },
  {
    name: "MaxPooling2D",
    modifiable_params_info: [{ name: "pool_size", type: "int", index: 0 }],
    params: [{ name: "pool_size", value: 2 }],
  },
  { name: "Flatten", modifiable_params_info: [], params: [] },
  {
    name: "Dense",
    modifiable_params_info: [],
    params: [
      { name: "units", value: "128" },
      { name: "activation", value: "relu" },
    ],
  },
  {
    name: "Dropout",
    modifiable_params_info: [{ name: "rate", type: "float", index: 0 }],
    params: [{ name: "rate", value: 0.5 }],
  },
  {
    name: "Dense",
    modifiable_params_info: [],
    params: [
      { name: "units", value: "64" },
      { name: "activation", value: "relu" },
    ],
  },
  {
    name: "Dropout",
    modifiable_params_info: [{ name: "rate", type: "float", index: 0 }],
    params: [{ name: "rate", value: 0.5 }],
  },
  {
    name: "Dense",
    modifiable_params_info: [],
    params: [
      { name: "units", value: "10" },
      { name: "activation", value: "softmax" },
    ],
  },
];

const RunIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-right-fill"
      viewBox="0 0 16 16"
    >
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>
  );
};

const SlidersIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sliders2-vertical"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
};

const ResNet50 = () => {
  // eslint-disable-next-line no-undef
  const timerRef = useRef<NodeJS.Timer>();
  const [loading, setLoading] = useState(false);
  const [modify, setModify] = useState(false);
  const [params, setParams] = useState<
    { name: string; value: any; type: string }[]
  >([]);
  const [mid, setMid] = useState<number>(-1);
  return (
    <div className="group w-full">
      <Navigation />
      <ExportModal />
      <ImageModal mid={mid} />
      <div className="w-full h-full flex justify-start items-center flex-col">
        <div className="mt-28 w-full p-10 bg-primary rounded-t-3xl h-7/12">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-gray-100 font-bold text-5xl">
                Simple CNN Image Classification
              </h1>
              <h2>Made by joseph1191</h2>
            </div>
            <div className="flex justify-end items-center gap-2">
              <button
                className="btn btn-outline btn-secondary"
                onClick={() => setModify(!modify)}
              >
                <SlidersIcon />
              </button>
              <button
                className="btn btn-outline btn-accent"
                onClick={async () => {
                  setLoading(true);
                  const data = new Array(params.length)
                    .fill(0)
                    .map((_, index) => ({
                      type: params[index].type,
                      value: params[index].value,
                    }));
                  const response = await axios.post(
                    "http://localhost:9080/train",
                    {
                      data,
                    }
                  );
                  setMid(response.data.mid);
                  timerRef.current = setInterval(() => {
                    axios
                      .get(`http://localhost:9080/status?mid=${mid}`)
                      .then((res) => {
                        if (res.data.status !== "running") {
                          if (timerRef.current) {
                            clearInterval(timerRef.current);
                          }
                          setLoading(false);
                          // axios
                          //   .post("http://localhost:9080/test", {
                          //     mid,
                          //     img: "blabibla",
                          //   })
                          //   .then((_) => {
                          //     setLoading(false);
                          //   });
                        }
                      });
                  }, 1000);
                }}
              >
                {loading ? "Processing..." : <RunIcon />}
              </button>
              <label
                htmlFor="image-popup"
                className="btn btn-outline btn-info cursor-pointer"
              >
                {loading ? "Processing..." : <TestIcon />}
              </label>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-outline cursor-pointer">
                  <Ellipsis />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Edit</a>
                  </li>
                  <li>
                    <label htmlFor="my-modal-3">Export</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center mt-10 xl:px-52">
            {model.map((layer, idx) => (
              <>
                <div className="w-28 h-36 py-5 px-2 pl-5 bg-base-300 rounded-2xl my-2 flex flex-col justify-start items-center">
                  <div
                    className={clsx([
                      "flex justify-center items-center",
                      layer.name !== "Flatten" && "-ml-3",
                      layer.name === "Flatten" && "-mr-1",
                    ])}
                  >
                    <LayerIcon name={layer.name} size={50} />
                  </div>
                  <LayerDescriptions
                    idx={idx}
                    last={idx === model.length - 1}
                    layer={layer}
                    modify={modify}
                    params={params}
                    setParams={setParams}
                  />
                </div>
                {idx !== model.length - 1 && (
                  <div className="mx-5">
                    <Caret />
                  </div>
                )}
              </>
            ))}
          </div>
          <p className="my-16">
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

import React from "react";
import styles from "./SelectTypes.module.css";

// name - value appears in html select
// rebabelCode - value that rebabel uses for import or export
// operations - import, export or both.
const dataFormats = [
  {
    name: "Flextext",
    rebabelCode: "flextext",
    operations: "both",
  },
  {
    name: "Conllu",
    rebabelCode: "conllu",
    operations: "import",
  },
  {
    name: "NLP",
    rebabelCode: "nlp_pos",
    operations: "import",
  },
];

function SelectTypes({
  label,
  selectConfig,
  data,
  setData,
  isLoading,
  setNLPConfigOpen = undefined,
  setOutputFileConfigOpen = undefined,
}) {
  function handleInputType(e) {
    setData((data) => ({ ...data, inFileType: e.target.value }));

    if (e.target.value === "nlp_pos") {
      setNLPConfigOpen(true);
    }
  }

  function handleOutputType(e) {
    setData((data) => ({ ...data, outFileType: e.target.value }));
  }

  console.log(data);
  return (
    <div className={styles.fileType}>
      <label>{label}</label>
      <select
        aria-label="Select File Type"
        name={selectConfig}
        onChange={
          selectConfig === "inputType"
            ? (e) => handleInputType(e)
            : (e) => handleOutputType(e)
        }
        disabled={isLoading}
      >
        <option defaultValue=""></option>
        {dataFormats.map((item) => {
          //Import
          if (
            selectConfig === "inputType" &&
            item.operations !== "export" &&
            item.rebabelCode !== data.outFileType
          ) {
            return (
              <option value={item.rebabelCode} key={item.rebabelCode}>
                {item.name}
              </option>
            );
          } else if (
            //Export
            selectConfig === "outputType" &&
            item.operations !== "import" &&
            item.rebabelCode !== data.inFileType
          ) {
            return (
              <option value={item.rebabelCode} key={item.rebabelCode}>
                {item.name}
              </option>
            );
          }
        })}
      </select>
      {selectConfig === "inputType" && data.inFileType === "nlp_pos" && (
        <button
          className={styles.nlpButton}
          disabled={isLoading}
          onClick={() => setNLPConfigOpen(true)}
        >
          NLP Settings
        </button>
      )}
      {selectConfig === "outputType" && data.outFileType === "flextext" && (
        <button
          className={styles.outputButton}
          disabled={isLoading}
          onClick={() => setOutputFileConfigOpen(true)}
        >
          Output File Settings
        </button>
      )}
    </div>
  );
}

export default SelectTypes;
import React, { useState } from "react";
import Help from "./Help.jsx";
import About from "./About.jsx";
import AdditionalSettings from "./AdditionalSettings.jsx";
import Mappings from "./Mappings.jsx";
import NLPConfig from "./NLPConfig.jsx";
import Convert from "./Convert.jsx";
import SelectFiles from "./SelectFiles.jsx";

const initialState = {
  filePath: [],
  fileName: [],
  inFileType: "",
  outFileType: "",
  delimiter: "",
  nlpFileType: "",
  partOfSpeechFile: "",
  languageFile: "",
  mappings: [
    { in_type: "", out_type: "" },
    { in_feature: "", out_feature: "" },
  ],
  root: "",
  skip: "",
};

function App() {
  //Sets state for file conversion
  const [data, setData] = useState(initialState);
  //Set state for modals
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAddSettingsOpen, setAddSettingsOpen] = useState(false);
  const [isMappingsOpen, setMappingsOpen] = useState(false);
  const [isNLPConfigOpen, setNLPConfigOpen] = useState(false);
  //Sets loading status for file conversion
  const [isLoading, setIsLoading] = useState(false);

  function handleSelectType(e) {
    if (e.target.name === "inputType") {
      setData((data) => ({ ...data, inFileType: e.target.value }));

      if (e.target.value === "nlp_pos") {
        setNLPConfigOpen(() => !isNLPConfigOpen);
      }
    } else if (e.target.name === "outputType") {
      setData((data) => ({ ...data, outFileType: e.target.value }));
    }
  }

  return (
    <div className="container flex-base">
      <header>
        <button onClick={() => setIsHelpOpen(!isHelpOpen)}>Help</button>
        <h2>Gap App</h2>
        <button onClick={() => setIsAboutOpen(!isAboutOpen)}>About</button>
      </header>

      <section className="input-fields">
        <SelectFiles data={data} isLoading={isLoading} setData={setData} />
        <div id="file-type">
          <label>File input type</label>
          <select
            aria-label="Select File Type"
            name="inputType"
            onChange={(e) => handleSelectType(e)}
            disabled={isLoading}
          >
            <option defaultValue=""></option>
            <option value="flextext">Flextext</option>
            <option value="conllu">Conllu</option>
            <option value="nlp_pos">NLP</option>
          </select>
          {data.inFileType === "nlp_pos" && (
            <button
              className="nlp-button"
              disabled={isLoading}
              onClick={() => setNLPConfigOpen(!isNLPConfigOpen)}
            >
              NLP Settings
            </button>
          )}
        </div>
        <div id="file-type">
          <label>File output type</label>
          <select
            aria-label="Select File Type"
            name="outputType"
            onChange={(e) => handleSelectType(e)}
            disabled={isLoading}
          >
            <option defaultValue=""></option>
            <option value="flextext">Flextext</option>
            <option value="nlp_pos">NLP</option>
          </select>
        </div>
        <div className="settings-container">
          <button onClick={() => setMappingsOpen(true)} disabled={isLoading}>
            Mappings
          </button>
          <button onClick={() => setAddSettingsOpen(true)} disabled={isLoading}>
            Additional Settings
          </button>
        </div>
        <Convert
          data={data}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </section>
      {/* Dialog component */}
      <Help isOpen={isHelpOpen} onClose={() => setIsHelpOpen(!isHelpOpen)} />
      <About
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(!isAboutOpen)}
      />
      {isMappingsOpen && (
        <Mappings
          isOpen={isMappingsOpen}
          onClose={() => setMappingsOpen(!isMappingsOpen)}
          data={data}
          setData={setData}
        />
      )}
      {isAddSettingsOpen && (
        <AdditionalSettings
          isOpen={isAddSettingsOpen}
          onClose={() => setAddSettingsOpen(!isAddSettingsOpen)}
          data={data}
          setData={setData}
        />
      )}
      {isNLPConfigOpen && (
        <NLPConfig
          isOpen={isNLPConfigOpen}
          onClose={() => setNLPConfigOpen(!isNLPConfigOpen)}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}

export default App;

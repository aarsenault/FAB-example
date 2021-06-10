import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import styled from "styled-components";

const FabContentStyles = styled.div`
  position: fixed;
  bottom: 1.5em;
  right: 1.5em;
  .open {
    color: var(--darkGreen);
    background-color: var(--green);
  }
  .close {
    background-color: var(--darkGreen);
    color: var(--green);
  }
  .MuiSvgIcon-root {
    font-size: 42px;
    width: 120px;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .buttonContent {
    position: relative;
    position: fixed;
    bottom: 5em;
    right: 1em;
    animation: ${({ fadeContent }) => {
        return fadeContent;
      }}
      800ms forwards;
  }
`;

const FabButtonToggle = ({ icon, closeIcon, children }) => {
  const [mountContent, setMountContent] = useState(false);
  const [fadeContent, setFadeContent] = useState("fade-in");
  const [plusButton, setPlusButton] = useState(true);

  const fadeOutContent = () => {
    // revert button back to "plus" form of the button
    setPlusButton(true);
    // first flip fadeContent
    setFadeContent("fade-out");
    // wait 1s then unmount
    // needs to stay mounted for CSS fade transition to occur
    const timerID = setTimeout(() => {
      setMountContent(false);
      clearTimeout(timerID);
    }, 1000);
  };

  const fadeInContent = () => {
    setPlusButton(false);
    setFadeContent("fade-in");
    setMountContent(true);
  };

  return (
    <FabContentStyles fadeContent={fadeContent}>
      <Fab
        className={plusButton ? "open" : "close"}
        aria-label={plusButton ? "open options" : "close options"}
        onClick={() => {
          if (mountContent) {
            fadeOutContent();
          } else {
            fadeInContent();
          }
        }}
      >
        {plusButton ? icon || <AddIcon /> : closeIcon || <CloseIcon />}
      </Fab>

      {mountContent && <div className="buttonContent">{children}</div>}
    </FabContentStyles>
  );
};
export default FabButtonToggle;

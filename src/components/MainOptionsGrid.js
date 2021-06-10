// Icons clipped from spec
import styled from "styled-components";
import checkin from "../icons/Checkin.png";
import checkout from "../icons/Checkout.png";
import discharge from "../icons/Discharge.png";
import newCalendarEvent from "../icons/NewCalendarEvent.png";
import newGroupNote from "../icons/NewGroupNote.png";
import newIncident from "../icons/NewIncident.png";
import newMedication from "../icons/newMedication.png";
import newTreatmentPlan from "../icons/NewTreatmentPlan.png";
import personPlus from "../icons/personPlus.png";
import progressNote from "../icons/progressNote.png";
import IconCard from "./IconCard";
import PngIcon from "./PngIcon";

const OptionsGridStyles = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  align-items: center;
`;

const MainOptionsGrid = () => {
  const gridContent = [
    { id: "personPlus", img: personPlus, text: "New intake" },
    { id: "discharge", img: discharge, text: "Discharge" },
    { id: "checkin", img: checkin, text: "Check in" },
    { id: "checkout", img: checkout, text: "Check out" },
    { id: "newMedication", img: newMedication, text: "New medication" },
    { id: "newTreatmentPlan", img: newTreatmentPlan, text: "New treatment plan" },
    { id: "newIncident", img: newIncident, text: "New incident" },
    { id: "newCalendarEvent", img: newCalendarEvent, text: "New calendar event" },
    { id: "progressNote", img: progressNote, text: "New progress note" },
    { id: "newGroupNote", img: newGroupNote, text: "New group note" },
  ];

  return (
    <OptionsGridStyles>
      {gridContent.map((elem) => {
        return (
          <IconCard
            key={elem.id}
            icon={<PngIcon image={elem.img} alt={`${elem.text} icon`} />}
            content={elem.text}
          />
        );
      })}
    </OptionsGridStyles>
  );
};

export default MainOptionsGrid;

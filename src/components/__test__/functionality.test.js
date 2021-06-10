import React from "react";
import MainOptionsGrid from "../MainOptionsGrid";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FabButtonToggle from "../FabButtonToggle";

describe("All cards are loaded", () => {
  beforeEach(() => render(<MainOptionsGrid />));

  test("New intake card should appear", () => {
    const option = screen.getByText("New intake");
    expect(option).toBeInTheDocument();
  });
  test("Discharge card should appear", () => {
    const option = screen.getByText("Discharge");
    expect(option).toBeInTheDocument();
  });
  test("Check in card should appear", () => {
    const option = screen.getByText("Check in");
    expect(option).toBeInTheDocument();
  });
  test("Check out card should appear", () => {
    const option = screen.getByText("Check out");
    expect(option).toBeInTheDocument();
  });
  test("New medication card should appear", () => {
    const option = screen.getByText("New medication");
    expect(option).toBeInTheDocument();
  });
  test("New treatment plan card should appear", () => {
    const option = screen.getByText("New treatment plan");
    expect(option).toBeInTheDocument();
  });
  test("New incident card should appear", () => {
    const option = screen.getByText("New incident");
    expect(option).toBeInTheDocument();
  });
  test("New calendar event card should appear", () => {
    const option = screen.getByText("New calendar event");
    expect(option).toBeInTheDocument();
  });
  test("New progress note card should appear", () => {
    const option = screen.getByText("New progress note");
    expect(option).toBeInTheDocument();
  });
  test("New group note card should appear", () => {
    const option = screen.getByText("New group note");
    expect(option).toBeInTheDocument();
  });
});

describe("Button functionality", () => {
  beforeEach(() => {
    render(
      <FabButtonToggle>
        <div> test </div>
      </FabButtonToggle>
    );
  });
  test("button renders", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("button click shows/hides the content", async () => {
    const button = screen.getByRole("button");

    // originally content is not shown
    expect(screen.queryByText("test")).not.toBeInTheDocument();

    fireEvent.click(button);

    // content is loaded after button is clicked
    expect(screen.queryByText("test")).toBeInTheDocument();

    // click to hide content
    fireEvent.click(button);

    // wait for fadeout - after fadeout content is removed from DOM
    await waitFor(() => {
      expect(screen.queryByText("test")).not.toBeInTheDocument();
    });
  });
});

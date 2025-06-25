import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import { render , screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardData.json"
import "@testing-library/jest-dom"


it("Should render RestuarnatsCard in component with prop Data", () => {

    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Gurukripa Restaurant - Sarwate");
    expect(name).toBeInTheDocument();
});


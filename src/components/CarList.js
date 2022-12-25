import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars.data);
    const handleCarDelete = (car) => {
        dispatch(removeCar(car));
    };
    const renderCars = cars.map((car) => {
        return (
            <div key={car.id}>
                <p>{car.name} - ${car.cost}</p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(car.id)}
                >
                    delete
                </button>
            </div>
        )
    });
    return (
        <div className="car-list">
            {renderCars}
            <hr />
        </div>
    );
}
export default CarList;

import "./TrainerMainContent.css"
import TrainerTile from "../TrainerTile/TrainerTile.jsx";
import "./TrainerMainContent.css"



const TrainerMainContent = ()=>{


    return(
        <div className="mainContentTrainer row w-100 h-100">
            {Array(12).fill(null).map((_, index) => (
                <div
                    key={index}
                    className=
                        "d-flex col-12 col-sm-6 col-md-4 col-xxl-3 justify-content-center align-items-center mb-5">
                    <TrainerTile />
                </div>
            ))}
        </div>

    )
}

export default TrainerMainContent
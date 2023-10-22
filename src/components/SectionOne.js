import { faEllipsisVertical, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SectionOne = () => {
    return(
      <div className="py-2 bg-light d-flex justify-content-between align-items-center px-3">
      <span className="fs-4 text-dark opacity-75 fw-bold">Whatsapp</span>
      <div>
        <FontAwesomeIcon className="fs-4 me-3 text-dark opacity-75" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="fs-4 text-dark opacity-75" icon={faEllipsisVertical} />
      </div>
    </div>
    )
  }

  export default SectionOne;
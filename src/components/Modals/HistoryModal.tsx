import * as React from "react";
import Modal from "./Modal";
import { CheckIcon, SkipIcon } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { historySelector } from "../../redux/slices/history";
import { formatSeconds } from "../../utils";
import { setActiveModal } from "../../redux/slices/activeModal";
const HistoryModal: React.FC = () => {
  const history = useAppSelector(historySelector)
  const dispatch = useAppDispatch()

  function handleClose() {
    setTimeout(() => document.getElementById("history-modal-trigger")?.focus(), 0);
    dispatch(setActiveModal(null))
  }

  const rows = history.map((row, indx) => (
    <tr key={indx}>
      <td>{indx + 1}</td>
      <td>{row.phaseName}</td>
      <td>{formatSeconds(row.durationInSeconds)}</td>
      <td>
        {row.status === "completed" ? (
          <CheckIcon size="1.5rem" aria-label={row.status} />
        ) : (
          <SkipIcon size="1.5rem" aria-label={row.status} />
        )}
      </td> 
    </tr>
  ))

  const empty = (
    <tr>
      <td colSpan={4}>No history available</td>
    </tr>
  )

  return (
    <Modal title="History" onClose={handleClose}>
      <div className="overflow-x-auto">
        <table className="history-table">
          <thead className="bg-theme-800">
            <tr>
              <th>#</th>
              <th>Phase</th>
              <th>Duration(minutes)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? rows : empty}
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default HistoryModal;
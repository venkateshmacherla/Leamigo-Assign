import './index.css'

const SearchForm = ({
  pointA,
  setPointA,
  pointB,
  setPointB,
  date,
  setDate,
  handleSearch,
}) => (
  <div className="searchForm-container">
    <label htmlFor="pointA" className="points">
      Starting Point:
    </label>
    <input
      type="text"
      value={pointA}
      onChange={e => setPointA(e.target.value)}
      placeholder="From"
      className="point-input"
    />

    <label htmlFor="pointB" className="points">
      End Point:
    </label>
    <input
      type="text"
      value={pointB}
      onChange={e => setPointB(e.target.value)}
      placeholder="To"
      className="point-input"
    />

    <label htmlFor="date" className="date">
      Date:
    </label>
    <input
      type="date"
      value={date}
      onChange={e => setDate(e.target.value)}
      className="date-input"
    />
    <div className="btn-container">
      <button type="button" onClick={handleSearch} className="search-btn">
        Search
      </button>
    </div>
  </div>
)

export default SearchForm

import './Header.css';

// Usually I use library for icons
// But for simplicity I will just use svg
const SearchIcon = () => {
  const showSearch = (e) => {
    e && e.preventDefault();
    // intentionally do nothing
  }

  return (
    <button onClick={showSearch}>
      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  )
}

const MoreButton = () => {
  const showMore = (e) => {
    e && e.preventDefault();
    // intentionally do nothing
  }

  return (
    <button onClick={showMore}>
      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z" id="Vertical"/>
      </svg>
    </button>
  )
}

export const Header = () => {
  return (
    <div className="header">
      <h2> Whatsapp </h2>

      <div className="header-right">
        <SearchIcon/>
        <MoreButton/> 
      </div>
    </div>
  )
}
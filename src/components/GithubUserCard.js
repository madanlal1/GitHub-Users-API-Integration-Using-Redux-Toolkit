import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../redux/slice/githubUserSlice";
import { useEffect, useState } from "react";
import DataModal from "./DataModal";

const GithubUserCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  const data = useSelector((state) => state.githubUsers);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  const handleTitleClick = (elem) => {
    setSelectedUser(elem);
    setShowModal(true);
  };

  return (
    <div className="githubUsersParentContainer">
      <label id="appTitle">GitHub Developers</label>
      <div className="searchBarContainer">
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </div>

      {(data && data.loading && <h6>Loading...</h6>) ||
        data.users
          .filter((ele) => ele.login.match(search))
          .map((elem) => {
            return (
              <div className="card" key={elem.id}>
                <img
                  className="card-img-top"
                  src={elem.avatar_url}
                  alt="user avatar"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    onClick={() => handleTitleClick(elem)}
                  >
                    {elem.login}
                  </h5>
                  <a
                    href={elem.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary form-control"
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>
            );
          })}

      {showModal && (
        <DataModal user={selectedUser} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default GithubUserCard;

import { useDispatch, useSelector } from "react-redux";
import { removeUsers, removeAllUsers } from "../../redux/createSlice";
import "./Users.css";

const Users = () => {
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <div className="all-users">
      {users.length > 0 ? (
        users.map((user) => (
          <div className="card" key={user.id}>
            <img
              src={
                user.gender === "male"
                  ? "https://cdn-icons-png.flaticon.com/512/4042/4042171.png"
                  : user.gender === "female"
                  ? "https://e7.pngegg.com/pngimages/516/431/png-clipart-female-profile-avatar-illustration-computer-icons-female-user-profile-female-girl-wife-woman-icon-miscellaneous-logo.png"
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEeyqx9JkeXJP1dcTrYXcdkTjoUuQLCrLDSg&s"
              }
              alt={user.gender}
            />
            <h2>{user.name}</h2>
            <h2>{user.surname}</h2>
            <h2>{user.email}</h2>
            <button onClick={() => dispatch(removeUsers({ id: user.id }))}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <h2>No users found</h2>
      )}
      {users.length > 0 && (
        <div className="all-delete-btn-wrapper">
          <button
            className="all-delete-btn"
            onClick={() => dispatch(removeAllUsers())}
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { UserAuth } from "../../context/authContext";
import DataTable from "react-data-table-component";
import UpdateBalanceModal from '../../components/UpdateModal';

export default function UpdateBalance() {
  const { user } = UserAuth();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    }
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="transactions">
      <h4>All Users</h4>
      {filteredUsers.length === 0 ? (
        <p className="text-black dark:text-white">No users found</p>
      ) : (
        <DataTable
          columns={columns}
          data={filteredUsers}
          pagination
          highlightOnHover
          onRowClicked={handleUserClick}
          striped
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setSearchText(e.target.value)}
            />
          }
        />
      )}

      <UpdateBalanceModal
        userId={selectedUser ? selectedUser.userId : null}  
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedUser={selectedUser} 
      />
    </div>
  );
}
import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء جلب المستخدمين:", error);
      });
  }, []);

  return (
    <div className="bg-white my-10 rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">
        المستخدمون المسجلون
      </h2>
      <table className="w-full text-right border border-gray-200">
        <thead className="bg-gray-100 text-blue-800">
          <tr>
            <th className="p-2">الرقم</th>
            <th className="p-2">الاسم</th>
            <th className="p-2">البريد الإلكتروني</th>
            <th className="p-2">تاريخ التسجيل</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{idx + 1}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">
                {new Date(user.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;

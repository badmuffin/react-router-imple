import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">
      User: {userid} {/* this userid is same as :userid in main.jsx */}
    </div>
  );
}

export default User;

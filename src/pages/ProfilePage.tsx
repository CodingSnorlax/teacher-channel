import React from "react";
import useAuthStore from "../stores/AuthStores";

const ProfilePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">個人資料</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">
            <h1>
              歡迎回來，<span>{user?.name || "未知用戶"}！</span>
            </h1>
          </p>

          <p className="text-gray-500 mt-2">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

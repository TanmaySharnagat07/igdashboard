import React from "react";
import Card from "@/components/adminCard";

const Admin = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold flex justify-center ">
          Admin Dashboard
        </h1>
      </div>
      <div className="flex flex-col md:flex md:flex-row justify-between ">
        <Card
          title="Leaderboard"
          content="Update the leaderboard Points"
          link="leaderboard"
        />
        <Card
          title="Enthu Points"
          content="Update the Enthu Points"
          link="enthupoint"
        />
        <Card
          title="New Member"
          content="Approve or reject new member request from here"
          link="request"
        />
      </div>
    </>
  );
};

export default Admin;

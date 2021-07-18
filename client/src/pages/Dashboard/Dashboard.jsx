import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/auth';

import UserCard from '../../components/UserCard/UserCard';
import Loading from '../../components/Loading/Loading';

const Dashboard = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      {userData ? (
        <div>
          <UserCard
            firstName={userData.firstName}
            lastName={userData.lastName}
            email={userData.email}
            attempted={userData.attemptedQuiz.length}
            created={userData.createdQuiz.length}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dashboard;

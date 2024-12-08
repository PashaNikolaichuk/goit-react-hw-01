import userData from "./components/profile/userData.json";
import friends from "./components/FriendList/friends.json";
import Profile from "./components/profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./components/Transaction/transactions.json";
import TransactionHistory from "./components/Transaction/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

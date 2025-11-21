import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';

export default function Home() {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar />
      <UserCard />
    </div>
  );
}

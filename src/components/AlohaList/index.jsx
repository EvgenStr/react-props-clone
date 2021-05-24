import Aloha from "../Aloha";

function AlohaList({ users, setUsers }) {
  const createUserGreetings = (users) =>
    users.map(({ id, firstname, lastname }, index) => (
      <li key={id}>
        <Aloha
          name={`${firstname} ${lastname}`}
          setUsers={setUsers}
          users={users}
          id={id}
        />
      </li>
    ));

  return <ul>{createUserGreetings(users)}</ul>;
}

export default AlohaList;

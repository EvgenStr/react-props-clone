import Aloha from "../Aloha";

function AlohaList({ users }) {
  const { deleteUser } = this.props;
  const createUserGreetings = (users) =>
    users.map(({ id, firstname, lastname }, index) => (
      <li key={id}>
        <Aloha
          name={`${firstname} ${lastname}`}
          deleteUser={deleteUser}
          id={id}
        />
      </li>
    ));

  return <ul>{createUserGreetings(users)}</ul>;
}

export default AlohaList;

function Profile(props) {
  const firstName = props.firstName
  const lastName = props.lastName
  const avatar = props.avatar;

  return (
    <aside>
      <div class="profile">
        <img class="profile__image" src={avatar} alt="hexagon" />
      </div>
      <br />
      <div class="profile__name">
        <h2><span class="profile--bold">{firstName}</span> {lastName}</h2>
      </div>
    </aside>
  );
}

export default Profile;
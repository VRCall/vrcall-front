import { useEffect, useState } from "react";
import { Profile, getProfile } from "../../services/getProfile";
import "./Profile.scss";

export default function Index() {
  const [profile, setProfile] = useState<Profile | undefined>();

  useEffect(() => {
    getProfile()
      .then((response) => {
        setProfile(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <h1>Profile</h1>
      {profile ? (
        <div className="profileBody">
          <div className="basicInfo">
            <img src={profile.img} />
            <div>
              <h3>Username</h3>
              <p>{profile.pseudo}</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>{profile.email}</p>
            </div>
          </div>
          <h3>Validated by mail</h3>
          <p>{profile.is_validated ? "validated" : "not validated"}</p>
          <h3>account created at</h3>
          <p>{formatDate(profile.created_at.toString())}</p>
          <h3>account last modified at</h3>
          <p>{formatDate(profile.modified_at.toString())}</p>
        </div>
      ) : (
        <p>No profile to display</p>
      )}
    </>
  );
}

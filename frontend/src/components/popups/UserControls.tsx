import { useUserAuth } from "../../context/userAuthCtx";
//
const UserControls: React.FC = () => {
  const { changeUser } = useUserAuth();
  const logout = async () => {
    localStorage.clear();
    changeUser(null);
  };
  return (
    <div className="bg-[var(--bg-3)] z-50 absolute w-[300px] h-fit right-0 rounded-lg p-3 top-[55px]">
      <ul>
        <li className="flex gap-2 pb-2 mb-2 cursor-pointer border-b border-[var(--border-color)] text-base text-[var(--dark-text)] hover:text-[var(--text-color)]">
          <img
            className="w-[40px] h-[40px] rounded-full cursor-pointer"
            src="https://www.gravatar.com/avatar/b3568450826559f6ce26b424b8283279.jpg?size=240&d=https%3A%2F%2Fwww.artstation.com%2Fassets%2Fdefault_avatar.jpg"
          />
          <div className="pt-[5px] ">
            <p>[name]</p>
            <p className="text-sm text-[var(--dark-text)] hover:text-[var(--text-color)]">
              Change your user information
            </p>
          </div>
        </li>
        <li className="pb-2 mb-2 cursor-pointer items-center flex text-sm text-[var(--dark-text)] hover:text-[var(--text-color)]">
          Manage your playlists
        </li>
        <li className="pb-2 mb-2 cursor-pointer items-center flex text-sm text-[var(--dark-text)] hover:text-[var(--text-color)]">
          Manage your uploads
        </li>
        <li className="pb-2 mb-2 cursor-pointer items-center flex text-sm text-[var(--dark-text)] hover:text-[var(--text-color)]">
          Messages
        </li>
        <li className="pb-2 mb-2  cursor-pointer items-center flex text-sm border-b border-[var(--border-color)] text-[var(--dark-text)] hover:text-[var(--text-color)]">
          Follows
        </li>
        <li
          className="cursor-pointer items-center flex text-sm text-[var(--dark-text)] hover:text-[var(--text-color)]"
          onClick={logout}
        >
          log out
        </li>
      </ul>
    </div>
  );
};

export default UserControls;

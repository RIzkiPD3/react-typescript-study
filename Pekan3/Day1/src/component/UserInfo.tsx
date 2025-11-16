import useUser from "../hooks/useUser";

export default function UserInfo() {
  const { user } = useUser();

  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h3 className="font-semibold text-lg mb-2">User Info</h3>

      <p><b>Nama:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      <p className="mt-2">
        <b>Status:</b>{" "}
        {user.isLoggedIn ? (
          <span className="text-green-600">Logged In</span>
        ) : (
          <span className="text-red-600">Guest</span>
        )}
      </p>
    </div>
  );
}

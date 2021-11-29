import { getProviders, signIn } from "next-auth/react";
function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        className="w-52 mb-5"
        alt="spotify"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18D860] text-white p-3 rounded-md"
          >
            <strong>Login with {provider.name}</strong>
          </button>
        </div>
      ))}
    </div>
  );
}
export default Login;

// this run on the server before the page get loaded everytime
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

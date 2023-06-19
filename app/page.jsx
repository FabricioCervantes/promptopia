import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Unleash your creativity with AI-generated suggestions and connect with a
        global community of artists and creators.
      </p>

      {/* Feed */}

      <Feed />
    </section>
  );
};

export default Home;

/*eslint-disable*/
import Head from "next/head";
import PropTypes from "prop-types";
import withLayout from "../lib/withLayout";

const Index = ({ user }) => (
  <div style={{ padding: "10px 45px" }}>
    <Head>
      <title>Index Page</title>
      <meta
        name="description"
        content="This is description of the index page"
      />
    </Head>
    <p>Content of page</p>
    <p>
      Email:
      {user.email}
    </p>
  </div>
);
Index.getInitialProps = async ({ query }) => ({ user: query.user });

Index.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
};

Index.defaultProps = {
  user: null
};

export default withLayout(Index);

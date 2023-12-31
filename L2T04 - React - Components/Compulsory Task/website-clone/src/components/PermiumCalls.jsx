import PropTypes from "prop-types";

export default function PermiumCalls({ title }) {
  return (
    <div className="section-box">
      <h2>{title}</h2>
      <p>
        Host video calls with hundreds of people, get moderator controls, and
        more.
      </p>
      <button className="mb-2">
        <a href="https://account.brave.com/plans/?intent=checkout&product=talk">
          Start free trial
        </a>
      </button>
      <p>
        Trial brings 30 days of free access to Brave Talk Premium. After 30
        days, the credit card you enter will be charged $7.00 US per month.
        Cancel any time.
      </p>
      <p>
        Already have Premium?{" "}
        <a
          href="https://account.brave.com/account/?intent=recover&product=talk"
          aria-label="Log in"
        >
          Log in
        </a>
        .
      </p>
    </div>
  );
}

PermiumCalls.propTypes = {
  title: PropTypes.string.isRequired,
};

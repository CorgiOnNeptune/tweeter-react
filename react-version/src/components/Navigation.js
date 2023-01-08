function Navigation() {
  return (
    <nav>
      <span class="nav--text">tweeter</span>

      <div class="btn btn--scroll">
        {/* Add href to compose tweet later */}
        <a href="#tweet-form" class="btn__text btn--borderless" title="Compose Tweet">
          <span class="btn--bold">Write</span> a new tweet
          <br />
          <i class="btn__icon fas fa-angle-double-down"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
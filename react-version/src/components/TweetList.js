import Tweet from './Tweet';

function TweetList() {
  return (
    <>
      <section class="tweets">
        <Tweet />
        <Tweet />
      </section>

      <div class="round-btn">
        <i class="round-btn__icon fas fa-angle-double-up"></i>
      </div>
    </>
  );
}

export default TweetList;
function TweetForm() {
  const placeHolderText = 'What are you humming about?';

  return (
    <>
      <section class="error-container">
        <i class="fas fa-exclamation-triangle"></i>
        {/* <h4></h4> */}
        <i class="fas fa-exclamation-triangle"></i>
      </section>

      <section class="newtweet" id="tweet-form">
        <form onSubmit={e => e.preventDefault()} method="post" action="/tweets" class="newtweet__form">
          <textarea class="form__textarea" name="text" placeholder={placeHolderText}></textarea>
          <input type="submit" value="Tweet" class="form__input" />
          <span class="form__counter">140</span>
        </form>
      </section>
    </>
  );
}

export default TweetForm;
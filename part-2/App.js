function App(){
    return (
        <div>
            <Tweet
              name="Rich B"
              username="richb"
              date={new Date().toDateString()}
              message= "Love this new Tweet app."
            />
            <Tweet
              name="Moosh"
              username="Moosh"
              date={new Date().toDateString()}
              message= "The best tweet is the first tweet."
            />
            <Tweet
              name="Melon"
              username="Melon"
              date={new Date().toDateString()}
              message="I hope I don't regret this!"
            />
        </div>
    );
}
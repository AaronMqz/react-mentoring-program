import Counter from "./components/Counter/Counter";
import SearchFormComponent from "./components/SearchForm/SearchForm";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import { GenresList } from "./utils";

function App() {
  return (
    <section className="App">
      <div className="counter">
        <label>Counter</label>
        <Counter initialValue={10} />
      </div>
      <div className="search">
        <label>Search Form</label>
        <SearchFormComponent
          searchQuery={"Avengers"} // initial value
          onChange={(search) => console.log("Search: ", search)}
        />
      </div>
      <div className="genre">
        <label>Genre Select</label>
        <GenreSelect
          genreList={GenresList}
          currentSelected={"HORROR"} // initial value
          onChange={(selected) => console.log("Genre: ", selected)}
        />
      </div>
    </section>
  );
}

export default App;

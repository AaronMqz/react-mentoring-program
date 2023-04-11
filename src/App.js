import Counter from "./Task1/Counter";
import SearchFormComponent from "./Task1/SearchForm/SearchForm";
import GenreSelect from "./Task1/GenreSelect/GenreSelect";
import { GenresList } from "./Task1/utils";

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
          onSearch={(search) => console.log("Search: ", search)}
        />
      </div>
      <div className="genre">
        <label>Genre Select</label>
        <GenreSelect
          genreList={GenresList}
          currentSelected={"HORROR"} // initial value
          onSelect={(selected) => console.log("Genre: ", selected)}
        />
      </div>
    </section>
  );
}

export default App;

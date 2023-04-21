import { GenresList, dummyMovieState } from "./utils";

import Counter from "./components/Counter/Counter";
import SearchFormComponent from "./components/SearchForm/SearchForm";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import MovieTile from "./components/MovieTile/MovieTile";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SortControl from "./components/SortControl/SortControl";

import DialogComponent from "./components/Dialog/Dialog";
import MovieForm from "./components/MovieForm/MovieForm";
import { initialMovieState } from "./utils";

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
      <div>
        <MovieTile movie={dummyMovieState} />
      </div>
      <div>
        <MovieDetails movie={dummyMovieState} />
      </div>
      <div>
        <SortControl
          current={"title"}
          onChange={(selected) => console.log("Sort by: ", selected)}
        />
      </div>
      <div>
        <DialogComponent>
          <MovieForm.Default
            movie={initialMovieState}
            titleForm="TEST"
            handleSubmit={() => console.log("Submit")}
            handleReset={() => console.log("Reset")}
          />
        </DialogComponent>
      </div>
    </section>
  );
}

export default App;

import { createStore } from "redux";

import AllPersons from "./modules/reducer";

const store = createStore(AllPersons); // O Create Store é o estado global do app e ficará acessivel em toda a aplicação

export default store;
import Axios from "axios";

// const URL = `user.json`;
// const api = Axios.create({
//   baseURL: `https://dev-books-db1a2.firebaseio.com/books.json`,
// });

export async function fetchCourse() {
  const response = await Axios.get("https://dev-books-db1a2.firebaseio.com/books.json/");
  const fetchedbooks = [];
  for (let key in response.data) {
    fetchedbooks.push({
      ...response.data[key],
      id: key,
    });
  }
  if (response.status >= 400) {
    throw new Error(response.errors);
  }

  return fetchedbooks;
}

export async function createCourse(data) {
    const response = await Axios.post("https://dev-books-db1a2.firebaseio.com/books.json/",data);
    const fetchedbooks = [];
    console.log("Res", response);
    for (let key in response.data) {
      fetchedbooks.push({
        ...response.data[key],
        id: key,
      });
    }
    if (response.status >= 400) {
      throw new Error(response.errors);
    }
  
    return fetchedbooks;
}


export async function deleteCourse(id) {
    const response = await Axios.delete('https://dev-books-db1a2.firebaseio.com/books/' + id+'.json');
    // const fetchedbooks = [];
     console.log("Del Res", response);
    // for (let key in response.data) {
    //   fetchedbooks.push({
    //     ...response.data[key],
    //     id: key,
    //   });
    // }
    if (response.status >= 400) {
      throw new Error(response.errors);
    }
  
    // return fetchedbooks;
}

export async function updateCourse(data) {
    console.log("UPDATE data",data)
    let { title, rating } = data;
    const response = await Axios.put('https://dev-books-db1a2.firebaseio.com/books/' + data.id +'/.json', {
        title, rating
      });
    const fetchedbooks = [];
    console.log("Res", response);
    for (let key in response.data) {
      fetchedbooks.push({
        ...response.data[key],
        id: key,
      });
    }
    if (response.status >= 400) {
      throw new Error(response.errors);
    }
  
    return fetchedbooks;
}
